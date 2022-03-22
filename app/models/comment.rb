class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :post


  # validates :comment_text, presence: true
  # validates :comment_text length: { minimum: 3 }
  # validates :likes, :dislikes, numericality: { greater_than_or_equal_to: 0 }
end
