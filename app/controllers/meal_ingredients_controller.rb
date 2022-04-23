class MealIngredientsController < ApplicationController

    def index
        render json: MealIngredient.all
    end

    def show
        render json: find_meal_ingredient
    end
    
    def create
        meal_ingredient = MealIngredient.create!(meal_ingredient_params)
        render json: meal_ingredient, status: :ok
    end

    def delete 
        find_meal_ingredient.destroy
        head :no_content
    end


    private

    def find_meal_ingredient
        MealIngredient.find(params[:id])
    end

    def meal_ingredient_params
        params.permit(:ingredient_id, :meal_id, :servings)
    end 
end
