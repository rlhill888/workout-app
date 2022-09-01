import React, {useState, useEffect} from "react";
import NavBar from "./NavBar";
import RoutineDisplayCardWorkoutPlan from "./RoutineDisplayCardWorkoutPlan";
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import AddIcon from '@mui/icons-material/Add';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import './workoutplan.css'

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
    <div 
    
    className='other-background'
    style={{
        height: '100%',
        
    }}
    >
    <NavBar user={user}/>
    <br />
    <br />
    <br />
    <Box>
        <Container>
            <br />
            <br />
            <Paper 
            className='workout-paper'
            elevation={10}>
                <Box p={3}>
            <br />
            <br />
            <Paper
            elevation={5}
            style={{
                textAlign:'center' 
            }}
            >
                <Box p={4}>
    <h1>Work Out Plan</h1>
    <h3>Manage All Your Routines Here</h3>
                </Box>
    </Paper>
    
    <Grid container
    style={{
        textAlign:'center',
        alignItems: 'center',
        justifyContent: 'center'
    }}
    >
    {routines.map((r)=>{
        return(
            <Box m={4}>
            <RoutineDisplayCardWorkoutPlan r={r} user={user} deleteRoutine={deleteRoutine}/>
            </Box>
        )
    })}
    </Grid>
    <SpeedDial 
    ariaLabel="SpeedDial basic example"
    sx={{ position: 'fixed', bottom: 16, right: 16 }}
    FabProps={{
        sx: {
          bgcolor: 'secondary.main',
          '&:hover': {
            bgcolor: 'secondary.main',
          }
        }
      }}
    icon={<SpeedDialIcon />}
    >
        <SpeedDialAction
        icon={<AddIcon />}
        tooltipTitle='Create a New Routine'
        onClick={()=> history.push('/createRoutine')}
        >

        </SpeedDialAction>

    </SpeedDial>
    </Box>
    </Paper>
        </Container>
    </Box>
    </div>
    )
}


export default WorkOutPlan