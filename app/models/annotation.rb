# == Schema Information
#
# Table name: annotations
#
#  id          :bigint           not null, primary key
#  description :text             not null
#  joke_id     :integer          not null
#  user_id     :integer          not null
#  start_index :integer          not null
#  end_index   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Annotation < ApplicationRecord
    validates :description, :start_index, :end_index, presence:true 
    
    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :joke,
        foreign_key: :joke_id, 
        class_name: :Joke
end
