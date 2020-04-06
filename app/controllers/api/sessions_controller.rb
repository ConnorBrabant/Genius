class Api::SessionsController < ApplicationController 

    def create 
        user = User.find_by_credentials(params[:username], params[:password])
        if user 
            login!(user)
            #render some path 
        else 
            render json: ['Invalid Login Credentials']
        end 
    end

    def destroy 
        logout 
        #render to index path 
    end 
        
end