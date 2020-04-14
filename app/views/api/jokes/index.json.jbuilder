@jokes.each do |joke|
    json.partial! '/api/jokes/joke', joke: joke, joke_user: joke.user, comedian: joke.comedian
end
