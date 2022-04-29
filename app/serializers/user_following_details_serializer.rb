class UserFollowingDetailsSerializer < ActiveModel::Serializer
  attributes :user_name, :goal_type, :profile_pic, :id, :public_user
end
