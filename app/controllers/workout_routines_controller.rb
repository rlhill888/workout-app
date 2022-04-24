class WorkoutRoutinesController < ApplicationController


    def index
        render json: WorkoutRoutine.all
    end

    def create
        workout_routine = WorkoutRoutine.create!(create_workout_routine_params)
        render json: workout_routine, status: :created
    end

    def update
        workout_routine= find_workout_routine
        workout_routine.update!(update_workout_routine_params)
        render json: workout_routine
    end

    def show
        render json: find_workout_routine
    end

    def destroy
        find_workout_routine.destroy
        head :no_content
    end

    private 
    
    def find_workout_routine
        WorkoutRoutine.find(params[:id])
    end

    def create_workout_routine_params
        params.permit(:reps, :sets, :workout_id, :routine_id)
    end

    def update_workout_routine_params
        params.permit(:reps, :sets)
    end
end
