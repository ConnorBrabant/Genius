json.set! joke.id do 
    json.extract! joke, :id, :title, :image
    deformatJoke = joke[:joke].tr("\n", "")
    json.set! :joke, deformatJoke
    json.comedian do 
        json.name comedian.name 
        json.id comedian.id 
    end
    json.user do 
        json.name joke_user.username
        json.id joke_user.id
    end
   json.annotations do 
        json.array! joke.annotations.each do |annotation|
            json.id annotation.id
            json.description annotation.description
            json.start_index annotation.start_index 
            json.end_index annotation.end_index
            json.user annotation.user.username
            json.user_id annotation.user_id
            json.joke_id annotation.joke_id
        end 
    end
    json.comments do 
        joke.comments.each do |comment|
            json.set! comment.id do 
                json.id comment.id 
                json.content comment.content
                json.user_id comment.user_id
                json.username comment.user 
                json.commentable_type comment.commentable_type
            end 
        end 
    end 
end