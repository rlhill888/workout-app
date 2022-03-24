class WorkoutsController < ApplicationController

    def index
        workouts= Workout.all
        render json: workouts
    end

    def show
        render json: find_workout
    end

    def create
        workout = Workout.create!(workout_params)
        render json: workout, status: :created
    end

    def update
        workout= find_workout
        workout.update(workout_params)
        render json: workout
    end

    def destroy
        find_workout.destroy
        head :no_content
    end

    private

    def find_workout
        workout= Workout.find(params[:id])
    end

    def workout_params
        params.permit(:name, :description, :gif, :video_link, :target_muscles, :workout_tag)
    end
end
