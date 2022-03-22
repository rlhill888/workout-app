class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :post, null: false, foreign_key: true
      t.string :comment_text
      t.integer :likes
      t.integer :dislikes

      t.timestamps
    end
  end
end
