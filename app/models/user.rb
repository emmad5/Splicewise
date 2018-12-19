# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
    attr_reader :password
    validates :username, :password_digest, :session_token, presence: true
    validates :username, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true
    before_validation :ensure_session_token

    has_many :bills,
    foreign_key: :creator_id,
    class_name: :Bill,
    dependent: :destroy

    has_many :payments

    has_many :friendships

    has_many :inverse_friendships,
    foreign_key: :friend_id,
    class_name: :Friendship

    def password=(password) 
        @password = password
        self.password_digest =  BCrypt::Password.create(password)
    end

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        if user && user.is_password?(password)
            return user
        end
        nil
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end
    
    def friends
        friends_array = friendships.map{|friendship| friendship.friend if friendship.confirmed}
        friends_array += inverse_friendships.map{|friendship| friendship.user if friendship.confirmed}
        friends_array.compact
    end


    def pending_friends
        friendships.map{|friendship| friendship.friend if !friendship.confirmed}.compact
    end

    def friend_requests
        inverse_friendships.map{|friendship| friendship.user if !friendship.confirmed}.compact
    end

 

    def friend?(user)
        friends.include?(user)
    end

    private
    
    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

end
