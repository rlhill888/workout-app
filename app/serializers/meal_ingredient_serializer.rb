class MealIngredientSerializer < ActiveModel::Serializer
  attributes :id
  has_one :ingredient
  has_one :meal
end
