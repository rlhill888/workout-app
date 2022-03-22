class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :gif, :type, :video_link
end
