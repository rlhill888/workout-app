class UserRoutineSerializer < ActiveModel::Serializer
  attributes :id, :currently_using
  has_one :user
  has_one :routine
end
