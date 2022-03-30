import React from "react";
import NavBar from "./NavBar";
import { useHistory } from "react-router-dom";



function MealPlan(){
    const history = useHistory();

    return(
        <>
        <h1>Meal Plan</h1>
        <NavBar /> 
        <br />
        <br />
        <button onClick={()=> history.push('/createmeal')}>Create A New Meal</button>
        </>
    )

}


export default MealPlan