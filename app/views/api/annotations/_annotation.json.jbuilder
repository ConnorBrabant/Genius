json.extract! @annotation, :id, :description, :user_id, :joke_id, :start_index, :end_index
json.set! :username, @annotation.user