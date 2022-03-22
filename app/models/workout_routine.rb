class WorkoutRoutine < ApplicationRecord
  belongs_to :workout
  belongs_to :routine

  # validates :sets, :reps, presence: true
  # validates :sets, :reps, numericality: { only_integer: true }
  # validates :sets, :reps, numericality: { greater_than_or_equal_to: 0 }
end
