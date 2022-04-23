import React from "react";
import { useHistory } from "react-router-dom";


function MealPlanMealCard({meal, setMealBeingShown}){
    const history= useHistory()
    let carbs
    let protein 
    let fat

    console.log(meal)
    function calculateMacros(){
        let carbCalculation = 0
        let proteinCalculation = 0
        let fatCalculation = 0

        let ingredients = []

        meal.meal_ingredients.map((mealIngredient)=>{
            meal.ingredients.map((ingredient)=>{
                if(ingredient.id === mealIngredient.ingredient_id){
                    ingredients.push({...ingredient, servings: mealIngredient.servings})
                    return ingredients 
                }
            })
        })

        ingredients.map((ingredient)=>{
            let carbs 
            let protein
            let fats
            carbs = ingredient.carb * ingredient.servings
            protein = ingredient.protein * ingredient.servings
            fats = ingredient.fat * ingredient.servings

            carbCalculation = carbCalculation + carbs
            proteinCalculation = proteinCalculation + protein
            fatCalculation = fatCalculation + fats
            
            return(carbCalculation, proteinCalculation, fatCalculation)
        })

        carbs = carbCalculation
        protein= proteinCalculation
        fat = fatCalculation

        return(carbs, protein, fat)

        
    }

    calculateMacros()

    return (
        <div> 
        <h3>{meal.name}</h3>
       <img onClick={()=> {
           setMealBeingShown(meal)
           history.push(`/meal/${meal.id}`)
       }} src={meal.image} width='200px' height='200px'></img>
       <br />
       <h2>Macros:</h2>
       <h3>Carbs: {carbs} grams</h3>
       <h3>Protein: {protein} grams</h3>
       <h3>Fat: {fat} grams</h3>
        </div>
    )
}

export default MealPlanMealCard