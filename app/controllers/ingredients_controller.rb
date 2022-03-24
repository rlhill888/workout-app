class IngredientsController < ApplicationController

    def index
        ingredients= Ingredient.all
        render json: ingredients
    end

    def show
        render json: find_ingredient
    end

    def create
        ingredient = Ingredient.create!(ingredient_params)
        render json: ingredient, status: :created
    end

    def update
        ingredient= find_ingredient
        ingredient.update!(ingredient_params)
        render json: ingredient
    end

    def destroy
        find_ingredient.destroy
        head :no_content
    end

    private

    def find_ingredient
        ingredient= Ingredient.find(params[:id])
    end

    def ingredient_params
        params.permit(:macro_type, :name, :serving_size, :serving_measurement_type, :fat, :protein, :carb, :calories)
    end
end
