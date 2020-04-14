json.set! comment.id do 
    json.extract! comment, :id, :content, :user_id, :commentable_type, :commentable_id
    json.set! :username, comment.user
end