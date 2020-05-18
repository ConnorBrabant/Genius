class Api::LikesController < ApplicationController 
    before_action :liker, only: [:create]

    def create 
        like = @liker.likes.new(like_params)
        like.user_id = current_user.id
        if like.save 
            if like.likable_type == 'Annotation'
                @annotation = Annotation.find(like.likable_id)
                render 'api/annotations/show'
            elsif like.likable_type == 'Comment'
                @comment = Comment.find(like.likable_id)
                render 'api/comments/show'
            end 
        else
            render json: like.errors.full_messages, status: 401 
        end 
    end 

    def update 
        like = Like.find(params[:id])
        if (like.value == 1 ? like.update(value: -1) : like.update(value: 1))
            if like.likable_type == 'Annotation'
                @annotation = Annotation.find(like.likable_id)
                render 'api/annotations/show'
            elsif like.likable_type == 'Comment'
                @comment = Comment.find(like.likable_id)
                render 'api/comments/show'
            end
        else
            render json: like.errors.full_messages, status: 401
        end 
    end


    def destroy
        like = Like.find(params[:id])
        if like.destroy 
            if like.likable_type == 'Annotation'
                @annotation = Annotation.find(like.likable_id)
                render 'api/annotations/show'
            elsif like.likable_type == 'Comment'
                @comment = Comment.find(like.likable_id)
                render 'api/comments/show'
            end
        else
            render json: like.errors.full_messages, status: 401 
        end 
    end 

    private 

    def liker 
        @klass = params[:like][:likableType].constantize 
        @liker = @klass.find(params[:like][:likableId])
    end 

    def like_params 
        params.require(:like).permit(:value)
    end
end 