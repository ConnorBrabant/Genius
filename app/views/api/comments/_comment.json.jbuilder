json.set! comment.id do 
    json.extract! comment, :id, :content, :user_id, :commentable_type, :commentable_id
    json.set! :username, comment.user
    json.likes do 
        comment.likes.each do |like| 
            json.set! like.id do 
                json.id like.id 
                json.user_id like.user_id 
                json.value like.value
            end
        end 
    end 
end
