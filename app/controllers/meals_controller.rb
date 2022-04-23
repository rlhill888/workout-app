class MealsController < ApplicationController
    def index 
        render json: Meal.all
    end

    def show
        render json: find_meal
    end

    def create
        meal = Meal.create!(meal_params)

        render json: meal, status: :created
    end

    def update
        meal= find_meal
        meal.update!(meal_params)
        render json: meal
    end

    def destroy
        find_meal.destroy
        head :no_content
    end 

    private

    def find_meal
        Meal.find(params[:id])
    end

    def meal_params
        params.permit(:name, :description, :public, :image)
    end

end
