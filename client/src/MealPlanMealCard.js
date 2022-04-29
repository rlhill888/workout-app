import React, {useState} from "react";
import { useHistory } from "react-router-dom";


function MealPlanMealCard({meal, setMealBeingShown, user}){
    const [showDetails, setShowDetails]= useState(false)
    const history= useHistory()
    let carbs
    let protein 
    let fat

    let showMacroDetails

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
    if(showDetails===false){
        showMacroDetails= <button onClick={()=> setShowDetails(true)}>Show Meal-Daiy Goal Macro Details</button>
    }
    if(showDetails===true){
        showMacroDetails= <div>
            <h2>This meal contains: </h2>
            <ul>
                <li>
                <h3>{(carbs/user.carb_macros*100).toFixed(0)}% of your daily carb goals</h3>
                </li>
                <li>
                    <h3>{(fat/user.fat_macros*100).toFixed(0)}% of your daily fat goals</h3>
                </li>
                <li>
                    <h3>{(protein/user.protein_macros*100).toFixed(0)}% of your daily protein goals</h3>
                </li>


            </ul>
            <br />
            <button onClick={()=> setShowDetails(false)}>Close Meal-Daily Goal Macro Details</button>
        </div>
    }

    

    return (
        <div> 
        <h2>{meal.name}</h2>
       <img onClick={()=> {
           setMealBeingShown(meal)
           history.push(`/meal/${meal.id}`)
       }} src={meal.image} width='200px' height='200px'></img>
       <br />
       <h2>Macros:</h2>
       <h3>Carbs: {carbs.toFixed(2)} grams</h3>
       <h3>Protein: {protein.toFixed(2)} grams</h3>
       <h3>Fat: {fat.toFixed(2)} grams</h3>
       <br />
       {showMacroDetails}
        </div>
    )
}

export default MealPlanMealCard