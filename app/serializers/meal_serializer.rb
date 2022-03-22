class MealSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :like, :dislike, :public
end
