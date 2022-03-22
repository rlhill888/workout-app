class EditWorkoutTableColumns < ActiveRecord::Migration[6.1]
  def change
    
    remove_column :workouts, :type
    add_column :workouts, :workout_type, :string
    add_column :workouts, :target_muscles, :string

  end
end
