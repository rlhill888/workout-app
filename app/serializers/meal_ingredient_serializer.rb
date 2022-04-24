class MealIngredientSerializer < ActiveModel::Serializer
  attributes :id, :servings, :ingredient_id, :meal_id
  has_one :ingredient
  has_one :meal

end
