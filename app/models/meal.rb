class Meal < ApplicationRecord
    has_many :user_meals, dependent: :destroy
    has_many :meal_ingredients, dependent: :destroy

    has_many :users, through: :user_meals
    has_many :ingredients, through: :meal_ingredients

    validates :name, :description, presence: true
    validates :description, length: { minimum: 5 }
    # validates :like, :dislike, numericality: { only_integer: true }
    # validates :like, :dislike, numericality: { greater_than_or_equal_to: 0 }
end

