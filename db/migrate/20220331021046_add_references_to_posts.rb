class AddReferencesToPosts < ActiveRecord::Migration[6.1]
  def change
    add_reference :posts, :share_routine, references: :routines, foreign_key: {to_table: :routines}
    add_reference :posts, :share_meal, references: :meals, foreign_key: {to_table: :meals}
  end
end
