class Api::UsersController < ApplicationController 
    def create 
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render :show
        else
            errors = []
            @user.errors.full_messages.each do |error|
                if (error == 'Username has already been taken')
                    errors.push('That nickname is taken!')
                elsif (error == 'Email has already been taken')
                    errors.push('Email has already been taken')
                elsif (error == 'Password is too short (minimum is 4 characters)' && params[:user][:password] != '')
                    errors.push('Password is too short (minimum is 4 characters)')
                elsif (error == 'Password is too short (minimum is 4 characters)' && params[:user][:password] == '') 
                    errors.push('Enter a password')
                else 
                    errors.push(error)
                end
            end
            render json: errors, status: 401
        end
    end

    private 
    def user_params
        params.require(:user).permit(:username, :password, :email)
    end 
end
