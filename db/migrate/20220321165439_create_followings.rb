class CreateFollowings < ActiveRecord::Migration[6.1]
  def change
    create_table :followings do |t|
      t.string :name_of_user_being_followed
      t.boolean :favorite
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
