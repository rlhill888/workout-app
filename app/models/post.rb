class Post < ApplicationRecord
  belongs_to :user
  has_many :comments

#   validates :title, :image, :description, presence: true
#   validates :title, length: { minimum: 3 }
#   validates :description, length: { minimum: 10 }

def associated_routine
  def workouts (routine)
    workouts = routine.workouts
    return workouts
  end

  if self.meal_post == false && self.routine_post == false
    return nil
  end
  if self.routine_post == true
    routine = Routine.find(self.share_routine_id)
    return routine, workouts(routine), routine.workout_routines 
  end
  if self.meal_post == true
    meal = Meal.find(self.share_meal_id)
    return meal   
  end

end 

end
