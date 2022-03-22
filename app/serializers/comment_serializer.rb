class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment_text, :likes, :dislikes
  has_one :user
  has_one :post
end
