class AddCaloriesColumnToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :calories, :integer
  end
end
