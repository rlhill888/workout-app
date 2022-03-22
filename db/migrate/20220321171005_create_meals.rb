class CreateMeals < ActiveRecord::Migration[6.1]
  def change
    create_table :meals do |t|
      t.string :name
      t.string :description
      t.integer :like
      t.integer :dislike
      t.boolean :public

      t.timestamps
    end
  end
end
