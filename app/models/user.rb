class User < ApplicationRecord
    has_many :reviews
    validates :username, presence: true
    validates :password, presence: true
    has_secure_password
end
