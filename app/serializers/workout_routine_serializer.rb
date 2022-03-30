class WorkoutRoutineSerializer < ActiveModel::Serializer
  attributes :id, :reps, :sets, :workout_id, :routine_id
end
