json.extract! annotation, :id, :description, :user_id, :joke_id, :start_index, :end_index
json.set! :username, annotation.user
json.likes do 
    annotation.likes.each do |like| 
        json.set! like.id do 
            json.id like.id 
            json.user_id like.user_id 
            json.value like.value 
        end
    end 
end 


#@annotation to annotation why didnt it crash before 