class AddWorkout4meBooleanColumn < ActiveRecord::Migration[6.1]
  def change
    add_column :routines, :default_workout4me_routine, :boolean
  end
end
