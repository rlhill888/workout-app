class AddIngredientCaloriesColumn < ActiveRecord::Migration[6.1]
  def change
    add_column :ingredients, :calories, :integer
  end
end
