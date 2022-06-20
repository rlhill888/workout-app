import React, {useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import { Route, useRouteMatch, Switch } from "react-router-dom";
import WorkoutCard from "./WorkoutCard";
import CreateRoutineSelectorCard from "./CreateRoutineSelectorCard";
import ErrorsCard from "./ErrorsCard";
import NavBar from "./NavBar";
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import './createroutine.css'

function CreateRoutine({user}){

    const history= useHistory()

    const [worokoutInfoObject, setworokoutInfoObject]= useState([])
    const [showWorkouts, setShowworkouts]= useState(false)
    const [workoutSearchFilter, setWorkoutSearchFilter]= useState('')
    const [routineName, setRoutineName]= useState('')
    const [routineDescription, setRoutineDescription]= useState('')
    const [imageLink, setImageLink]= useState('')
    const [workOutSearchCheckBox, setWorkOutSearchCheckBox]= useState([])
    const [workouts, setWorkouts]= useState([])
    const [errors, setErrors]= useState([])
    
    let workoutsearch

    useEffect(()=>{
        fetch('http://localhost:4000/workouts')
        .then(res=>res.json())
        .then(res=> {
            setWorkouts(res)
            let copyArray= []
            let workouts = res
            workouts.map((w)=> copyArray.push({ [`${w.name} checked`]: false }))
            setWorkOutSearchCheckBox(copyArray)
        })
    }, [])
    
    console.log(worokoutInfoObject)
   
    

    function handleSubmit(e){
        e.preventDefault()
        let routineid
        const routine ={
            name: routineName,
            description: routineDescription,
            image: imageLink,
            created_by_id: user.id
        }

        fetch('routines', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(routine)
        })
        .then(res=>{
        
        if(res.ok){
            res.json()
            .then(data=> {
            console.log(data)
            routineid= data.id
            const userRoutineObj = {
                user_id: user.id,
                routine_id: routineid,
                currently_using: true
            }
            console.log(routineid)
            fetch('user_routines', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(userRoutineObj)
            }) 
            .then(res => res.json())
            .then(data =>console.log(data))
            // .then(data=> console.log(data))
    
            worokoutInfoObject.forEach((o)=>{
                
                 fetch('workout_routines', {
                    method: 'POST',
                    headers: {
                        'Content-Type' : 'application/json'
                    },
                    body: JSON.stringify({
                        workout_id: o.id,
                        routine_id: routineid,
                        reps: o.reps,
                        sets: o.sets
                    })
                })
            .then(res=> res.json())
            .then(data => console.log(data))
            })
            history.push(`routine/${routineid}`)
            window.location.reload(false)
        })
        }
        else{
            res.json()
            .then(res=>setErrors(res.errors))
        }
    })
        
    }



    if(showWorkouts===false){
        workoutsearch= 
        <Stack>
        <Button color='secondary' variant="contained" onClick={()=> setShowworkouts(true)}>Select Workouts For Routine</Button>
        </Stack>
    }
    if(showWorkouts===true){

        const filteredWorkoutSearch = workouts.filter((w)=> w.name.includes(workoutSearchFilter)) 
        workoutsearch= <div>
            <Stack>
                <Button color='secondary' variant="contained" onClick={()=> setShowworkouts(false)}> Hide Workouts</Button>
            </Stack>
            
            <Container
            style={{
                textAlign:'center' 
            }}>
            <br/>
            <br />


            <h3 name='workout search'> Search Work Outs:</h3>
            <TextField  variant="standard" value={workoutSearchFilter} onChange={(e)=> setWorkoutSearchFilter(e.target.value)} name='workout search'></TextField>

            </Container>
            <br />
            <br />
            <br />
            <Grid  style={{
        textAlign:'center' 
    }}>
            {filteredWorkoutSearch.map((w)=>{
                return <CreateRoutineSelectorCard 
                key={`Create Routine Selector Card ${w.id}`}
                w={w} 
                worokoutInfoObject={worokoutInfoObject} 
                workOutSearchCheckBox={workOutSearchCheckBox} 
                setWorkOutSearchCheckBox={setWorkOutSearchCheckBox} 
                setworokoutInfoObject={setworokoutInfoObject}
                />
            })}
            </Grid>
        </div>
    }
  
    return(
       <div className='other-background'> 
       <br />
       <br />
       <NavBar user={user}/>
       <br />
       <br />
       <br />
       <Box>
           <Container>
               <Paper className='create-workout-main-paper' elevation={15}>
                   <Box p={4}>


       <Box>
           <Container style={{
        textAlign:'center' 
    }}>
        <Paper elevation={10}>
            <Box p={4}>
       <h1>Create Routine</h1>
       <ErrorsCard errors={errors}/>
       <form onSubmit={handleSubmit}>
           <div>  
            <h3 name='name'>Routine Name</h3>
           <TextField value={routineName} variant="standard" onChange={(e)=> setRoutineName(e.target.value)} name='name'></TextField>
           <br />
           <br />
           <h3 name= 'description'>Description </h3>
           <TextField value={routineDescription} variant="standard" onChange={(e)=> setRoutineDescription(e.target.value)} name='description'></TextField>
           <br />
           <br />
           <h3 name= 'image'>Image Link</h3>
           <br />
            <img 
            
            className="createRoutineImage"
            
            src={imageLink} ></img>
            <br />
            <br />
           <TextField value={imageLink} onChange={(e)=> setImageLink(e.target.value)} name= 'image' variant="filled" placeholder="Image Link Here"></TextField>
           </div>
           <br />
           <Button  color='secondary' type='submit' variant="contained">Create Routine</Button>
        </form>
           <br />
           </Box>
           </Paper>
           </Container>
            
        </Box>
           <br />
           <br />
           <Container>
               <Paper elevation={10}>
                   {workoutsearch}
               </Paper>

           </Container>

           </Box>

           </Paper>


           </Container>

           </Box>
           

      
       
       </div>
    )
}

export default CreateRoutine