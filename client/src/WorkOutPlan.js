import React, {useState, useEffect} from "react";
import NavBar from "./NavBar";
import RoutineDisplayCardWorkoutPlan from "./RoutineDisplayCardWorkoutPlan";
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import AddIcon from '@mui/icons-material/Add';

import { useHistory } from "react-router-dom";

function WorkOutPlan({user}){

    const [routines, setRoutines]= useState([])
    const history= useHistory()
    
    useEffect(()=>{
        fetch('current_user_routines')
        .then(res=> res.json())
        .then(res=> setRoutines(res))
    }, [])
    function deleteRoutine(id){
        console.log(id)
        fetch(`routines/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type' : 'application/json'
            }
        })
    }
   

    return(
    <>
    <br />
    <br />
    <h1>Work Out Plan</h1>
    <h3>Manage All Your Routines Here</h3>
    <NavBar user={user}/>
    {routines.map((r)=>{
        return(
            <RoutineDisplayCardWorkoutPlan r={r} user={user} deleteRoutine={deleteRoutine}/>
        )
    })}
    <SpeedDial 
    ariaLabel="SpeedDial basic example"
    sx={{ position: 'absolute', bottom: 16, right: 16 }}
    icon={<SpeedDialIcon />}
    >
        <SpeedDialAction
        icon={<AddIcon />}
        tooltipTitle='Create a New Routine'
        onClick={()=> history.push('/createRoutine')}
        >

        </SpeedDialAction>

    </SpeedDial>
    </>
    )
}


export default WorkOutPlan