class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :gif, :video_link, :workout_tag, :target_muscles
end
