class AddPublicToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :public_user, :boolean
  end
end
