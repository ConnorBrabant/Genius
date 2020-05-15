class Api::SessionsController < ApplicationController 

    def create 
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if @user 
            login!(@user)
            render 'api/users/show'
        else 
            if params[:user][:username] == '' && params[:user][:password] = ''
                render json: ['You did not provide any details for authentication.'], status: 401
            elsif params[:user][:username] == '' 
                render json: ['Login cannot be blank']
            elsif params[:user][:password] == ''
                render json: ['Password cannot be blank']
            elsif User.find_by(username: params[:user][:username])
                render json: ['Password is not valid'], status: 401
            else 
                render json: ['Login is not valid'], status: 401
            end
        end 
    end

    def destroy 
        if !current_user
            render json: ['You are not logged in!'], status: 404
        else
            logout 
            render json: {}
        end
    end 
        
end