# @jokes.each do |joke|
#     json.partial! '/api/jokes/joke', joke: joke, joke_user: joke.user, comedian: joke.comedian
# end

json.array! @jokes.each do |joke|
    #json.set! joke.id do 
        json.extract! joke, :id, :title, :image
        deformatJoke = joke[:joke].tr("\n", "")
        json.set! :joke, deformatJoke
        json.comedian do 
            json.name joke.comedian.name 
            json.id joke.comedian.id 
        end
        json.user do 
            json.name joke.user.username
            json.id joke.user.id
        end
   # end
end