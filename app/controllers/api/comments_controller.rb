class API::CommentsController < ApplicationController 
    before_action :commenter 


    def create
        @comment = @commenter.comments.new(params[:comments])
        if @comment.save 
            render :show 
        else
            render json: @comment.errors.full_messages, status: 401 
        end
    end 


    private 

    def commenter 
        @klass = params[:comment_type].capitalize.constantize 
        @commenter = klass.find(params[:commenter_id])
    end
end