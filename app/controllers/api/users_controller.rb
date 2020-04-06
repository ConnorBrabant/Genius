class Api::UsersController < ApplicationController 
    def create 
        @user = User.new(user_params)
        if @user 
            login!(@user)
            render :show
        else 
            render json: @user.errors.full_messages, status: 401
        end
    end

    def 

end
