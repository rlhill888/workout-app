class RoutineSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image, :users_using_routine, :created_by_id
  has_many :workouts
  has_many :workout_routines
  
end
