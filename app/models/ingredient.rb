class Ingredient < ApplicationRecord
    has_many :meal_ingredients

    has_many :meals, through: :meal_ingredients
    has_many :user_meals, through: :meals
    has_many :users, through: :user_meals

    # validates :macro_type, :name, :serving_size, :serving_measurement_type, :fat, :protein, :carb, presence: true
    # validates :macro_type, inclusion: { in: %w(protein carb fat),  message: "%{value} is not a valid macro-type" }
    # validates :protein, :fat, :carb, :serving_size, numericality: { greater_than_or_equal_to: 0 }
    # validates :serving_measurement_type, inclusion: { in: %w(ounces grams pounds),  message: "%{value} is not a valid measurement-type" }

end
