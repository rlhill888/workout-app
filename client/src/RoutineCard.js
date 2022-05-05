import React, {useEffect, useState} from "react";
import { useHistory, useParams } from "react-router-dom";
import RoutineCardSettings from "./RoutineCardSettings";
import NavBar from "./NavBar";
import { CardActionArea, CardMedia, CardContent, Card } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import './routinecard.css'




function RoutineCard({user, setRoutineBeingShown, setWorkoutBeingShown}){
    const history= useHistory()
    const params= useParams()
    const [workoutArray, setWorkoutArray]= useState([])
    const [routine, setRoutine]= useState({})
   
    useEffect(()=>{
        let routine 
        fetch(`http://localhost:4000/routines/${params.id}`)
        .then(res=> res.json())
        .then(res=> {
            
        routine = res
        setRoutine(res)
            
         routine.workouts.map((w)=>{
        
            routine.workout_routines.map((wr)=>{
            
                if(wr.workout_id===w.id){
                    console.log(w.id)
                    console.log(wr.id)
                    return setWorkoutArray((p)=> [...p, {
                        name: w.name,
                        gif: w.gif,
                        reps: wr.reps,
                        sets: wr.sets,
                        workout: w
                    }])
                }
            })
            
        })
        })
       
    
    }, [])

    


   
    return (
    <div
    className='main-background'
    > 
    <NavBar user={user}/>
    <br />
    <br />
    <br />
    <br />
    <Container style={{
        textAlign:'center' 
    }}>
        <Paper className='main-workout-paper' elevation={15}>
            <Box pb={12}>
    <br />
    <br />
    <Container>
    <Paper>
        <Box p={4}>
    <h1>{routine.name}</h1>
    <br />
    <div>
        <h3>{routine.description}</h3>
    </div>
    </Box>
    </Paper>
    </Container>
    <Grid container  style={{
        textAlign:'center' 
    }} >
        
        {workoutArray.map((w)=>{
        return(<Box
            m={3} my={4}
            p={2}
            sx={{
                width: 300,
                height: 300
              }}
        > 

        <br />
            <Card
            elevation={15}
            >
                <h2>{w.name}</h2>
                <CardActionArea>
                     <img onClick={()=> {
                    setWorkoutBeingShown(w.workout)
                    history.push(`/workouts/${w.workout.id}`)
                }} src={w.gif} height='200' width='300'></img>
                </CardActionArea>
                <h2>{`Sets: ${w.sets}`}</h2>
                <h2>{`Reps: ${w.reps}`}</h2>

            </Card>
        <br />
        </Box>
           
        )
    })}
    
    </Grid>
    </Box>
    </Paper>
    </Container>
    </div>)
}

export default RoutineCard