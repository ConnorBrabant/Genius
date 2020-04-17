json.set! joke.id do 
    json.extract! joke, :id, :title
    json.image url_for(joke.photo)
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

end