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
            json.description annotation.description
            json.start_index annotation.start_index 
            json.end_index annotation.end_index
            json.user annotation.user.username 
        end 
    end
        
end