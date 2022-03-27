class DropUserColumns < ActiveRecord::Migration[6.1]
  def change
    remove_column :users, :form_questions_answered
    remove_column :users, :watched_tutorial
  end
end
