class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :description, :likes, :dislikes
  has_one :user, serializer: UserNameSerializer
  has_many :comments
end
