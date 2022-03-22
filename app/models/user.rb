class User < ApplicationRecord
    has_many :user_routines
    has_many :user_meals
    has_many :followings
    has_many :posts

    has_many :routines, through: :user_routines
    has_many :meals, through: :user_meals
    has_many :comments, through: :posts

    has_many :workout_routines, through: :routines
    has_many :meal_ingredients, through: :meals

    has_many :workouts, through: :workout_routines
    has_many :ingredients, through: :meal_ingredients

    # validates :first_name, :last_name, :user_name, :email, :form_questions_answered, :watched_tutorial, :form_questions_answered, :profile_pic, presence: true
   
    # validates :email, format: { with: /^(.+)@(.+)$/, message: "Email invalid"  }, uniqueness: { case_sensitive: false }, length: { minimum: 4, maximum: 254 }

    # validates :email, :user_name, uniqueness: true

    has_secure_password



end
