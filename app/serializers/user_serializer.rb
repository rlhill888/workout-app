class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :user_name, :email, :goal_type, :age, :weight, :height, :bmi, :bmr, :initial_form_activity_level, :profile_pic
  has_many :routines, serializer: RoutineDetailsSerializer
  

end
