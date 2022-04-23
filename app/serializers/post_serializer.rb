class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :description, :likes, :dislikes, :associated_routine, :routine_post, :meal_post
  has_one :user, serializer: UserFollowingDetailsSerializer
  has_many :comments
  # has_many :routines

  
end
