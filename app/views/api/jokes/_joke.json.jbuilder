json.set! joke.id do 
    json.extract! joke, :id, :title, :joke
    json.comedian do 
        json.name comedian.name 
        json.id comedian.id 
    end
    json.user do 
        json.name joke_user.username
        json.id joke_user.id
    end
end

