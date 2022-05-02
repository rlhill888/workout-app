import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import { CardActionArea, CardMedia, CardContent, Card } from '@mui/material';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Button from '@mui/material/Button';




function MealPlanMealCard({meal, user}){
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

    

    return (
        <Box m={4} p={2}
        sx={{
            width: 300,
            height: 300
          }}> 
        
            <Card elevation={15}>
        
        <CardMedia 
        component="img"
        height="300"
        image={meal.image}
        >

        </CardMedia>
       {/* <img onClick={()=> {
           history.push(`/meal/${meal.id}`)
       }} src={meal.image} width='200px' height='200px'></img> */}
       <br />
       <h2>{meal.name}</h2>
       <h2>Macros:</h2>
       <h3>Carbs: {carbs.toFixed(2)} grams</h3>
       <h3>Protein: {protein.toFixed(2)} grams</h3>
       <h3>Fat: {fat.toFixed(2)} grams</h3>
       <br />
       <Accordion>
           <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
               <h3>Show Meal Macro Percentages</h3>
               </AccordionSummary>
            <MuiAccordionDetails>
               <div>
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
            <Button variant="contained" onClick={()=> history.push(`meal/${meal.id}`)}>More Meal Details and Ingredients</Button>
        </div>

               </MuiAccordionDetails>

       </Accordion>

       </Card>
        </Box>
    )
}

export default MealPlanMealCard