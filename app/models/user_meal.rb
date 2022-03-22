class UserMeal < ApplicationRecord
  belongs_to :meal
  belongs_to :user

  has_many :meal_ingredients, through: :meals
  has_many :ingredients, through: :meal_ingredients
end
