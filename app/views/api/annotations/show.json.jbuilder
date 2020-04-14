json.annotations do 
    json.set! @annotation.id do 
        json.partial! 'api/annotations/annotation', annotation: @annotation
    end
end