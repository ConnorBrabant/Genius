class Api::JokesController < ApplicationController 
    def index 
        @jokes = Joke.all 
        render :index 
    end 

    def show 
        @joke = Joke.find(params[:id])
        render :show
    end

    def create
        @joke = Joke.new(joke_params)
        # @joke_comedian = @joke.comedian 
        @joke_user = @joke.user 
        if @joke.save
            render 'api/jokes/show'
        else
            render json: @users.errors.full_messages, status: 401
        end
    end

    def update
        @joke = Joke.find(params[:id])
        @joke_user = @joke.user
        if @joke.update
            render 'api/jokes/show'
        else
            render json: @joke.errors.full_messages, status: 401
        end
    end

    def destroy
        joke = Jokes.find(params[:id])
        if joke.delete
            render 'root/root'
        else 
            render json: joke.errors.full_messages, status: 401 
        end 
    end

end 