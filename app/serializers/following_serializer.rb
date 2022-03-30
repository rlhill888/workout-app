class FollowingSerializer < ActiveModel::Serializer
  attributes :id, :name_of_user_being_followed, :favorite, :user_getting_followed_id
  has_one :user
end
