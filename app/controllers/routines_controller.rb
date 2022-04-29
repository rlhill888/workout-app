class RoutinesController < ApplicationController

    def index
        render json: Routine.all
    end

    def show
        render json: find_routine
    end

    def create
        
        routine= Routine.create!(create_routine_params)
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

    def current_user_routines
        user = current_user
        render json: user.routines
    end

    private

    def find_routine
        Routine.find(params[:id])
    end

    def update_routine_params
        params.permit(:name, :description, :image)
    end


    def create_routine_params
        params.permit( :name, :description, :image, :created_by_id)
    end

    


end
