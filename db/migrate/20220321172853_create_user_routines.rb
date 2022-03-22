class CreateUserRoutines < ActiveRecord::Migration[6.1]
  def change
    create_table :user_routines do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :routine, null: false, foreign_key: true
      t.boolean :currently_using

      t.timestamps
    end
  end
end
