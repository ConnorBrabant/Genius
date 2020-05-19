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
#  image       :string
#
class Joke < ApplicationRecord
    validates :title, :joke, presence: true
    has_one_attached :photo
    after_initialize :ensure_default_photo

    belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User
    
    belongs_to :comedian,
    primary_key: :id,
    foreign_key: :comedian_id,
    class_name: :Comedian
    
    has_many :annotations,
    foreign_key: :joke_id,
    class_name: :Annotation
    
    has_many :comments, as: :commentable 
    
    def ensure_default_photo
        unless self.photo.attached?
            self.photo.attach(io: File.open('app/assets/images/favicon/favicon-32x32.png'), filename: "default.jpg", content_type: 'image/png')
        end
    end
    
end

