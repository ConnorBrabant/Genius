# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string
#  email           :string
#  password_digest :string
#  session_token   :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    validates :username, uniqueness: true
    validates :email, uniqueness: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP}
    validates :username, :session_token, :password_digest, presence: true
    validates :password, length: { minimum: 4}, allow_nil: true 

    attr_reader :password
    after_initialize :ensure_session_token

    #FIGVAPER 

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username) || User.find_by(email: username)
        return nil unless user 
        user.is_password?(password) ? user : nil 
    end 

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end 

    def password=(password)
        @password = password 
        self.password_digest = BCrypt::Password.create(password)
    end 

    def reset_session_token! 
        self.session_token = SecureRandom.urlsafe_base64 
        self.save 
        self.session_token
    end 

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end 

    has_many :jokes,
        foreign_key: :user_id,
        class_name: :Joke

    has_many :annotations,
        foreign_key: :user_id,
        class_name: :Annotation

    has_many :comments,
        foreign_key: :user_id,
        class_name: :Comment

    has_many :likes,
        foreign_key: :user_id,
        class_name: :Like
end
