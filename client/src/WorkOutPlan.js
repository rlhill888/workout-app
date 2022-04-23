import React, {useState} from "react";
import NavBar from "./NavBar";
import RoutineDisplayCardWorkoutPlan from "./RoutineDisplayCardWorkoutPlan";

import { useHistory } from "react-router-dom";

function WorkOutPlan({routines, setRoutineBeingShown, user}){


    const history= useHistory()
   

    return(
    <>
    <h1>Work Plan</h1>
    <NavBar />
    <br/>
    <br/>
    <button onClick={()=> history.push('/createRoutine')} >Create Routine</button>
    <br />
    <br />
    {routines.map((r)=>{
        return(
            <RoutineDisplayCardWorkoutPlan r={r} user={user} setRoutineBeingShown={setRoutineBeingShown} />
        )
    })}
    </>
    )
}


export default WorkOutPlan