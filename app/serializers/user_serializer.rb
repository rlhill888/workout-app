class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :user_name, :email, :form_questions_answered, :watched_tutorial, :goal_type, :age, :weight, :height, :bmi, :bmr, :initial_form_activity_level, :profile_pic
end
