class Api::AnnotationsController < ApplicationController 
    def index  
    end 

    def create
        # debugger
        @annotation = Annotation.new(annotation_params)
        @annotation.user_id = current_user.id 
        if @annotation.save 
            # @joke = Joke.find(@annotation.joke_id)
            render 'api/annotations/show'
        else
            render json: @annotation.errors.full_messages, status: 401
        end 
    end

    def update 
        @annotation = Annotation.find(params[:id])
        if @annotation.update 
            @joke = Joke.find(@annotation.joke_id)
            render 'api/annotations/show'
        else
            render json: @annotation.errors.full_messages, status: 401 
        end 
    end 

    def destroy 
        annotation = Annotation.find(params[:id])
        if annotatation.delete 
            @joke = Joke.find(@annotation.joke_id)
            render 'api/jokes/show'
        else
            render json: annotation.errors.full_messages, status: 401 
        end 
    end
            
    private 

    def annotation_params
        params.require(:annotation).permit(:description, :joke_id, :start_index, :end_index)
    end
end 