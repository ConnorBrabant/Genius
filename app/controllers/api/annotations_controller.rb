class Api::AnnotationsController < ApplicationController 
    def index  
        @annotations = Joke.find(params[:joke_id]).annotations
        render :index
    end 

    def create
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
        if @annotation.update(annotation_params)
            @joke = Joke.find(@annotation.joke_id)
            render 'api/annotations/show'
        else
            render json: @annotation.errors.full_messages, status: 401 
        end 
    end 

    def destroy 
        @annotation = Annotation.find(params[:id])
        if @annotation.delete 
            # @joke = Joke.find(@annotation.joke_id)
            render 'api/annotations/show'
        else
            render json: @annotation.errors.full_messages, status: 401 
        end 
    end
            
    private 

    def annotation_params
        params.require(:annotation).permit(:description, :joke_id, :start_index, :end_index)
    end
end 