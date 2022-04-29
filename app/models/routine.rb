class Routine < ApplicationRecord

    has_many :user_routines, dependent: :destroy
    has_many :workout_routines, dependent: :destroy


    has_many :users, through: :user_routines
    has_many :workouts, through: :workout_routines

   
    validates :name, :description, presence: true
    validates :description, length: { minimum: 2 }
    # validates :users_using_routine, numericality: { only_integer: true }
end
