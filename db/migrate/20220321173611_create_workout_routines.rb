class CreateWorkoutRoutines < ActiveRecord::Migration[6.1]
  def change
    create_table :workout_routines do |t|
      t.belongs_to :workout, null: false, foreign_key: true
      t.belongs_to :routine, null: false, foreign_key: true
      t.integer :reps
      t.integer :sets

      t.timestamps
    end
  end
end
