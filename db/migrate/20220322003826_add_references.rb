class AddReferences < ActiveRecord::Migration[6.1]
  def change
    add_reference :followings, :user_getting_followed, references: :users, foreign_key: {to_table: :users}
  end
end
