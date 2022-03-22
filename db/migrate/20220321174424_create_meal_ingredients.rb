class CreateMealIngredients < ActiveRecord::Migration[6.1]
  def change
    create_table :meal_ingredients do |t|
      t.belongs_to :ingredient, null: false, foreign_key: true
      t.belongs_to :meal, null: false, foreign_key: true

      t.timestamps
    end
  end
end
