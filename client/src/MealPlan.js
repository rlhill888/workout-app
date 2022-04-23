import React from "react";
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
        <h2>Your meals:</h2>
        {user.meals.map((meal)=>{
            return (
            <MealPlanMealCard key={`Meal Planner Meal Card ${meal.id}`} meal={meal} setMealBeingShown={setMealBeingShown}/>)
        })}
        </>
    )

}


export default MealPlan