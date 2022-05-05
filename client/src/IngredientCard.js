import React from "react";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';



function IngredientCard({ingredient}){
    console.log(ingredient)

    return(
        <Box m={3} p={2}>
        <Paper  elevation={3}> 
        <br />
        <h2>{ingredient.servings === 1 ? `${ingredient.servings} serving of ${ingredient.name}`: `${ingredient.servings} servings of ${ingredient.name}`}</h2>
        <br />
        <h3>Macros For One Serving: </h3>
        <h3>Protien: {ingredient.protein} grams</h3>
        <h3>Carbs: {ingredient.carb} grams</h3>
        <h3>Fats: {ingredient.fat} grams</h3>
        <br />
        
        </Paper>
        </Box>
    )
}

export default IngredientCard