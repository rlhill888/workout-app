class UserRoutine < ApplicationRecord
  belongs_to :user
  belongs_to :routine

  has_many :workout_routines, through: :routines
  has_many :workouts, through: :workout_routines
end
