# == Schema Information
#
# Table name: comments
#
#  id               :bigint           not null, primary key
#  content          :text             not null
#  commentable_type :string
#  commentable_id   :bigint
#  user_id          :integer          not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#
class Comment < ApplicationRecord
  validates :content, presence: true 
  
  belongs_to :commentable, polymorphic: true 

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  has_many :likes, as: :likable

end
