class AddColumnToComments < ActiveRecord::Migration[6.1]
  def change
    add_column :comments, :created_by, :string
  end
end
