class User < ApplicationRecord
  # Include default devise modules.
  devise :invitable, :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :confirmable, :omniauthable
end
