# == Schema Information
#
# Table name: comedians
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Comedian < ApplicationRecord
    validates :name, presence: true 

    has_many :jokes, 
        foreign_key: :comedian_id,
        class_name: :Joke
        
end
