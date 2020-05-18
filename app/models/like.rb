# == Schema Information
#
# Table name: likes
#
#  id           :bigint           not null, primary key
#  user_id      :integer
#  likable_type :string
#  likable_id   :bigint
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Like < ApplicationRecord
  validates :value, presence: true 
  validates :user_id, uniqueness: { scope: :likable_id }

  belongs_to :likable, polymorphic: true

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User
end
