class Api::CommentsController < ApplicationController 
    before_action :commenter, only: [:create]

    def index 
        @comments = Comment.find_by_sql("
            SELECT * 
            FROM comments
            WHERE commentable_type = '#{params[:comment][:commentableType]}' AND commentable_id = #{params[:comment][:commentableId]}
            ORDER BY created_at 
            OFFSET #{params[:start]}
            LIMIT 5")
        render :index 
    end 


    def create
        @comment = @commenter.comments.new(comment_params)
        @comment.user_id = current_user.id 
        if @comment.save 
            render :show
        else
            render json: @comment.errors.full_messages, status: 401 
        end
    end 

    def destroy 
        @comment = Comment.find(params[:id])
        if @comment.delete 
            render :show 
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