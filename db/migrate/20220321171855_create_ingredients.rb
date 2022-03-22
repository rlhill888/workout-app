class CreateIngredients < ActiveRecord::Migration[6.1]
  def change
    create_table :ingredients do |t|
      t.string :macro_type
      t.string :name
      t.integer :serving_size
      t.string :serving_measurement_type
      t.integer :fat
      t.integer :protein
      t.integer :carb

      t.timestamps
    end
  end
end
