json.set! joke.id do 
    json.extract! joke, :id, :title, :image, :joke
    # formatJoke = '';
    # joke[:joke].each_char.with_index do |char, i|
    #     debugger
    #     if (char + joke[:joke][i+1]) == '. ' 
    #         formatJoke += ".\n"
    #     else
    #         formatJoke += char 
    #     end 
    # end
    # json.set! :joke, formatJoke
    json.comedian do 
        json.name comedian.name 
        json.id comedian.id 
    end
    json.user do 
        json.name joke_user.username
        json.id joke_user.id
    end
    
end

