class AddServingsColumnToMealIngredients < ActiveRecord::Migration[6.1]
  def change
    add_column :meal_ingredients, :servings, :float
  end
end
