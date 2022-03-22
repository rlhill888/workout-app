class WorkoutRoutineSerializer < ActiveModel::Serializer
  attributes :id, :reps, :sets
  has_one :workout
  has_one :routine
end
