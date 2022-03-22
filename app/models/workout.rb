class Workout < ApplicationRecord
    has_many :workout_routines

    has_many :routines, through: :workout_routines
    has_many :user_routines, through: :routines
    has_many :users, through: :user_routines

    # validates :name, :description, :gif, :video_link, presence: true
end
