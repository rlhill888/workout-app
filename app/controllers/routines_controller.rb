class RoutinesController < ApplicationController

    def index
        render json: Routine.all
    end

    def show
        render json: find_routine
    end

    def create
        
        routine= Routine.create!(create_routine_params)

        # array= params[:workout_array]
        
        # array.map do |a|
            
        #     workout_routine= WorkoutRoutine.create!( routine_id: routine.id, reps: a[:reps], sets: a[:sets], workout_id: a[:workout_id])  
        # end

        # user_routine = UserRoutine.create!(user_id: params[:user_id], routine_id: routine.id, currently_using: false)
        
        render json: routine

    end

    def update

        routine= find_routine

        routine.update!(update_routine_params)
        render json: routine
    end

    def destroy
        routine= find_routine
        routine.destroy
        head :no_content
    end

    private

    def find_routine
        Routine.find(params[:id])
    end

    

    def update_routine_params
        params.permit(:name, :description, :image)
    end

    # def workout_routine_params
    #     params.permit(:workout_id, :reps, :sets)
    # end

    def create_routine_params
        params.permit( :name, :description, :image, :created_by_id)
    end

    


end
