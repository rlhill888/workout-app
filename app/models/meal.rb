class Meal < ApplicationRecord
    has_many :user_meals
    has_many :meal_ingredients

    has_many :users, through: :user_meals
    has_many :ingredients, through: :meal_ingredients

    # validates :name, :description, :like, :dislike, :public, presence: true
    # validates :description, length: { minimum: 10 }
    # validates :like, :dislike, numericality: { only_integer: true }
    # validates :like, :dislike, numericality: { greater_than_or_equal_to: 0 }
end

