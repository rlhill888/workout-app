class AddUserIdReferenceToRoutines < ActiveRecord::Migration[6.1]
  def change
    remove_column :routines, :created_by
    add_reference :routines, :created_by, references: :users, foreign_key: {to_table: :users}
  end
end
