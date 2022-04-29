class AddMarcoColumns < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :carb_macros, :float
    add_column :users, :protein_macros, :float
    add_column :users, :fat_macros, :float
  end
end
