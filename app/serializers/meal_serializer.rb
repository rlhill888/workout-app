class MealSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :like, :dislike, :public, :image
  has_many :meal_ingredients
  has_many :ingredients
end
