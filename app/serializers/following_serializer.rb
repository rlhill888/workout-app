class FollowingSerializer < ActiveModel::Serializer
  attributes :id, :name_of_user_being_followed, :favorite
  has_one :user
end
