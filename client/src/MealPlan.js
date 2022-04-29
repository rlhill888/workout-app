import React, {useState, useEffect} from "react";
import NavBar from "./NavBar";
import { useHistory } from "react-router-dom";
import MealPlanMealCard from "./MealPlanMealCard";



function MealPlan({user, setMealBeingShown}){
    const history = useHistory();

    

    return(
        <>
        <h1>Meal Plan</h1>
        <NavBar /> 
        <br />
        <br />
        <button onClick={()=> history.push('/createmeal')}>Create A New Meal</button>
        <br />
        <br />
        <h2>Here are your daily macro goals:</h2>
        <h3>{user.calories} Calories</h3>
        <h3>Protein: {user.protein_macros.toFixed(2)} grams</h3>
        <h3>Fat: {user.fat_macros.toFixed(2)} grams</h3>
        <h3>Carbs: {user.carb_macros.toFixed(2)} grams</h3>
        <br/>
        <br />
        <h2>Your meals:</h2>
        {user.meals.map((meal)=>{
            return (
            <MealPlanMealCard key={`Meal Planner Meal Card ${meal.id}`} meal={meal} setMealBeingShown={setMealBeingShown} user={user}/>)
        })}
        </>
    )

}


export default MealPlan