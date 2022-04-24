class UserRoutinesController < ApplicationController

    def create 
        user_routine= UserRoutine.create!(user_routine_params)
        render json: user_routine
    end 

    def update
        user_routine= find_user_routine
        user_routine.update!(user_routine_params)

        render json: user_routine
    end

    def destroy
        find_user_routine.destroy
        head :no_content
    end

    def show
        redner json: find_user_routine
    end


    private

    def user_routine_params
        params.permit(:user_id, :routine_id, :currently_using)
    end

    def find_user_routine
        UserRoutine.find(params[:id])
    end
end
