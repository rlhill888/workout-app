class AddMealImageColumnToMeals < ActiveRecord::Migration[6.1]
  def change
    add_column :meals, :image, :string
  end
end
