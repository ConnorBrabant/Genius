class Api::CommentsController < ApplicationController 
    before_action :commenter 

    def create
        @comment = @commenter.comments.new(comment_params)
        @comment.user_id = current_user.id 
        if @comment.save 
            render :index
        else
            render json: @comment.errors.full_messages, status: 401 
        end
    end 


    private 

    def commenter 
        @klass = params[:comment][:commentableType].constantize
        @commenter = @klass.find(params[:comment][:commentableId])
    end

    def comment_params 
        params.require(:comment).permit(:content)
    end

end