class Post < ApplicationRecord
  belongs_to :user
  has_many :comments

#   validates :title, :image, :description, presence: true
#   validates :title, length: { minimum: 3 }
#   validates :description, length: { minimum: 10 }
end
