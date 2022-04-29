import React, {useState, useEffect} from "react";
import NavBar from "./NavBar";
import RoutineDisplayCardWorkoutPlan from "./RoutineDisplayCardWorkoutPlan";

import { useHistory } from "react-router-dom";

function WorkOutPlan({user}){

    const [routines, setRoutines]= useState([])
    const history= useHistory()
    
    useEffect(()=>{
        fetch('current_user_routines')
        .then(res=> res.json())
        .then(res=> setRoutines(res))
    }, [])
   

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
            <RoutineDisplayCardWorkoutPlan r={r} user={user} />
        )
    })}
    </>
    )
}


export default WorkOutPlan