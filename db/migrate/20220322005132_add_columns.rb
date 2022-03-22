class AddColumns < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :password_digest, :string
    add_column :posts, :meal_post, :boolean
    add_column :posts, :routine_post, :boolean

  end
end
