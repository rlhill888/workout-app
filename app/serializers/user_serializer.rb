class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :user_name, :email, :goal_type, :age, :weight, :height, :bmi, :bmr, :initial_form_activity_level, :profile_pic, :public_user
  has_many :routines, serializer: RoutineDetailsSerializer
  has_many :meals
  has_many :posts
  

end
