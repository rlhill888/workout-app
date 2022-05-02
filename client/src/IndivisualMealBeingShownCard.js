import React, {useState, useEffect} from "react";
import IngredientCard from "./IngredientCard";
import { useHistory, useParams } from "react-router-dom";


function IndivisualMealBeingShownCard(){
    const history = useHistory()
    const params= useParams()
    const [meal, setMeal]= useState([])
    let ingredientsArray = []
    let carbs
    let protein 
    let fat

    useEffect(()=>{
        fetch(`http://localhost:4000/meals/${params.id}`)
        .then(res=> res.json())
        .then(res=> {
            console.log(res)
            setMeal(res)
            return makeIngredientsArray(res)

        })
    }, [])
    

    console.log(meal)
    makeIngredientsArray(meal)

    function makeIngredientsArray(meal){
        if(meal.meal_ingredients===undefined){
            return console.log('undefined')
        }
        let carbCalculation = 0
        let proteinCalculation = 0
        let fatCalculation = 0

        let ingredients= []
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

        console.log(ingredients)

        return(carbs, protein, fat, ingredientsArray = ingredients)
    }

    return(
        <> 
        <button onClick={history.goBack }>Back</button>
        <button onClick={()=> history.push(`/updatemeal/${meal.id}`)}>Update Meal</button>
        <button onClick={()=>{
            fetch(`http://localhost:4000/meals/${meal.id}`,{
                method: 'DELETE',
                headers: {
                    'Content-Type' : 'application/json'
                }
            })
        }}>Delete Meal</button>
        <br />
        <br />
        <h1>{meal.name}</h1>
        <img src={meal.image} height={'500px'} width={'500px'}></img>
        <br />
        <br />
        <p>{meal.description}</p>
        <br />
        <br />
        <h2>Meal Macros:</h2>
        <br />
        <br />
        <h2>Carbs: {carbs} grams</h2>
        <h2>Protein: {protein} grams</h2>
        <h2>Fat: {fat} grams</h2>
        <br />
        <br />
        <h2>Ingredients: </h2> 
        <br />
        {ingredientsArray.map((ingredient)=>{
            return( 
            <> 
            <br />
             <IngredientCard ingredient={ingredient}/>
             <br />
            </> )
        })}

        </>
    )


}

export default IndivisualMealBeingShownCard
