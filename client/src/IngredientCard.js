import React from "react";



function IngredientCard({ingredient}){
    console.log(ingredient)

    return(
        <div> 
        <h2>{ingredient.servings === 1 ? `${ingredient.servings} serving of ${ingredient.name}`: `${ingredient.servings} servings of ${ingredient.name}`}</h2>
        <br />
        <h3>Macros For One Serving: </h3>
        <h3>Protien: {ingredient.protein} grams</h3>
        <h3>Carbs: {ingredient.carb} grams</h3>
        <h3>Fats: {ingredient.fat} grams</h3>
        <br />
       
        
        </div>
    )
}

export default IngredientCard