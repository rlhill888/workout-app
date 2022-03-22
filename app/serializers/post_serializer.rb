class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :description, :likes, :dislikes
  has_one :user
end
