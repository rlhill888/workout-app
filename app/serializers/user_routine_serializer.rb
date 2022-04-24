class UserRoutineSerializer < ActiveModel::Serializer
  attributes :id, :currently_using, :user_id, :routine_id
  has_one :user
  has_one :routine
end
