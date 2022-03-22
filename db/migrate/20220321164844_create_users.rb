class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :user_name
      t.string :email
      t.boolean :form_questions_answered
      t.boolean :watched_tutorial
      t.string :goal_type
      t.integer :age
      t.integer :weight
      t.integer :height
      t.integer :bmi
      t.integer :bmr
      t.string :initial_form_activity_level
      t.string :profile_pic

      t.timestamps
    end
  end
end
