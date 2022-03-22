class ChangeIntegerDataTypes < ActiveRecord::Migration[6.1]
  def change
    change_column :ingredients, :serving_size, :float
    change_column :ingredients, :fat, :float
    change_column :ingredients, :protein, :float
    change_column :ingredients, :carb, :float
  end
end
