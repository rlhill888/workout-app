class CreateRoutines < ActiveRecord::Migration[6.1]
  def change
    create_table :routines do |t|
      t.string :name
      t.string :description
      t.string :image
      t.integer :users_using_routine
      t.string :created_by

      t.timestamps
    end
  end
end
