class Api::JokesController < ApplicationController 
    def index 
        @jokes = Joke.find_by_sql("
            SELECT * 
            FROM jokes
            ORDER BY created_at 
            OFFSET #{params[:start]}
            LIMIT 7")
        render :index 
    end 

    def show 
        @joke = Joke.find(params[:id])
        render :show
    end

    def create
        @joke = Joke.new(joke_params)
        @joke.user_id = current_user.id 
        if Comedian.find_by(name: params[:joke][:comedian])
            @joke.comedian_id = Comedian.find_by(name: params[:joke][:comedian]).id
        else 
            comedian = Comedian.create(name: params[:joke][:comedian], description: 'funny person')
            @joke.comedian_id = comedian.id
        end
        debugger
        if @joke.save
            @joke_comedian = @joke.comedian 
            @joke_user = @joke.user 
            render 'api/jokes/show'
        else
            render json: @joke.errors.full_messages, status: 401
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

    private 
    def joke_params 
        params.require(:joke).permit(:title, :joke, :image)
    end
end 