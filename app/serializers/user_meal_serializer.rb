class UserMealSerializer < ActiveModel::Serializer
  attributes :id
  has_one :meal
  has_one :user
end
