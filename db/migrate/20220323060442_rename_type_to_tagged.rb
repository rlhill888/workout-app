class RenameTypeToTagged < ActiveRecord::Migration[6.1]
  def change

    rename_column :workouts, :workout_type, :workout_tag
  end
end
