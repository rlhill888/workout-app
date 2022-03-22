class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :title
      t.string :image
      t.string :description
      t.integer :likes
      t.integer :dislikes

      t.timestamps
    end
  end
end
