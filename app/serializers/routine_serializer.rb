class RoutineSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image, :users_using_routine, :created_by
end
