class CreateWorkouts < ActiveRecord::Migration[6.1]
  def change
    create_table :workouts do |t|
      t.string :name
      t.string :description
      t.string :gif
      t.string :type
      t.string :video_link

      t.timestamps
    end
  end
end
