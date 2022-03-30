class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment_text, :likes, :dislikes, :created_by
  has_one :user, serializer: UserNameSerializer
  has_one :post

  
end
