class UserMealsController < ApplicationController
    def index 
        render json: UserMeal.all
    end 

    def show
        render json: find_user_meal
    end 

    def create
        user_meal = UserMeal.create(user_meal_params)
        render json: user_meal
    end

    def delete
        find_user_meal.destroy
        head :no_content
    end


    private 

    def find_user_meal
        UserMeal.find(params[:id])
    end

    def user_meal_params
        params.permit(:meal_id, :user_id)
    end 
end
