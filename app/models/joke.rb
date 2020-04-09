# == Schema Information
#
# Table name: jokes
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  comedian_id :integer          not null
#  joke        :text             not null
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Joke < ApplicationRecord
    validates :title, presence: true
    validates :joke, presence: true 

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :comedian,
        primary_key: :id,
        foreign_key: :comedian_id,
        class_name: :Comedian
end
