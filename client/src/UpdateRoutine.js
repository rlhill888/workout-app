import React, {useState, useEffect} from "react";
import { useHistory, useParams } from "react-router-dom";
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
import './updateroutine.css'

function UpdateRoutine({ user}){

    const [worokoutInfoObject, setworokoutInfoObject]= useState([])
    const [showWorkouts, setShowworkouts]= useState(false)
    const [workoutSearchFilter, setWorkoutSearchFilter]= useState('')
    const [routineName, setRoutineName]= useState('')
    const [routineDescription, setRoutineDescription]= useState('')
    const [imageLink, setImageLink]= useState('')
    const [workOutSearchCheckBox, setWorkOutSearchCheckBox]= useState([])
    const [originalWorkoutObj, setOriginalWorkoutObj]= useState([])
    const [workouts, setWorkouts]= useState([])
    const [routine, setRoutine]= useState({})
    const [errors, setErros]= useState([])

    let workoutsearch
    const history= useHistory()
    const params= useParams()


    useEffect(()=>{
        fetch('http://localhost:4000/workouts')
        .then(res=>res.json())
        .then(res=> {
            let workouts = res
            setWorkouts(res)
        fetch(`http://localhost:4000/routines/${params.id}`)
        .then(res => res.json())
        .then(res =>{
        let routine = res
        setRoutine(res)
        let workOutSearchCheckBox =[]
        let workoutObj= []

        workouts.map((workout)=>{
            workOutSearchCheckBox.push({[`${workout.name} checked`] : false})
        })

        workOutSearchCheckBox.map((object)=>{
            routine.workouts.map((workout)=>{
                if(Object.keys(object)[0]===`${workout.name} checked`){
                    const index = workOutSearchCheckBox.indexOf(object)
                    workOutSearchCheckBox[index] = {[`${workout.name} checked`] : true}
                }
            })
        })

        routine.workout_routines.map((workoutRoutine)=>{
            routine.workouts.map((workout)=>{
                if(workoutRoutine.workout_id===workout.id){
                    return workoutObj.push({...workout, sets: workoutRoutine.sets, reps: workoutRoutine.reps, workoutRoutineId: workoutRoutine.id})
                }
            })
            return workoutObj
        })

        setworokoutInfoObject([...workoutObj])
        setOriginalWorkoutObj([...workoutObj])
        setWorkOutSearchCheckBox([...workOutSearchCheckBox])
        setRoutineName(routine.name)
        setRoutineDescription(routine.description)
        setImageLink(routine.image)
        })

        

        })

       
        
    }, [])

    function handleSubmit(e){
        e.preventDefault()
        const routineObj ={
            name: routineName,
            description: routineDescription,
            image: imageLink,
            created_by_id: user.id
        }

        fetch(`http://localhost:4000/routines/${routine.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(routineObj)
        })
        .then(res=>{
        if(res.ok){
             res.json()
             .then(data=> console.log(data))

        let workoutBeingAdded = []
        let workoutBeingDeleted= []
        let updateSetsAndReps= []

        worokoutInfoObject.map((updatedWorkout)=>{
            workoutBeingAdded.push(updatedWorkout)
            originalWorkoutObj.map((originalWorkout)=>{
                if(updatedWorkout.id === originalWorkout.id){
                    
                    const index = workoutBeingAdded.indexOf(originalWorkout)
                    
                    return workoutBeingAdded.splice(index, 1)
                } 
            })
            return workoutBeingAdded
        })
        
        originalWorkoutObj.map((originalWorkout)=>{
            workoutBeingDeleted.push(originalWorkout)
            
            worokoutInfoObject.map((workout)=>{
               
                
                if(workout.id===originalWorkout.id){
                    const index = workoutBeingDeleted.indexOf(originalWorkout)
                    console.log('equal')
                    return workoutBeingDeleted.splice(index, 1)
                    
                }
            })
            return workoutBeingDeleted
        })

        worokoutInfoObject.map((updatedWorkout)=>{
            originalWorkoutObj.map((originalWorkout)=>{
                if((updatedWorkout.id===originalWorkout.id&&updatedWorkout.sets!==originalWorkout.sets)||(updatedWorkout.id===originalWorkout.id&&updatedWorkout.reps!==originalWorkout.reps)){
                    return updateSetsAndReps.push(updatedWorkout)
                }
            })
            return updateSetsAndReps
        })

        console.log('Workouts being added: ', workoutBeingAdded)
        console.log('Workouts being deleted: ', workoutBeingDeleted)
        console.log('Workouts being updated: ', updateSetsAndReps)

        workoutBeingAdded.map((workout)=>{
            fetch('http://localhost:4000/workout_routines', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({
                    workout_id: workout.id,
                    routine_id: routine.id,
                    sets: workout.sets, 
                    reps: workout.reps
                })
            })
            .then(res=> res.json())
            .then(data=> console.log(data))
        })

        workoutBeingDeleted.map((workout)=>{
            fetch(`http://localhost:4000/workout_routines/${workout.workoutRoutineId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type' : 'application/json'
                }
            })
            
        })

        updateSetsAndReps.map((workout)=>{
            fetch(`http://localhost:4000/workout_routines/${workout.workoutRoutineId}`, {
                method: 'PATCH',
                headers: {
                    'Content-type' : 'application/json'
                },
                body: JSON.stringify({
                    sets: workout.sets,
                    reps: workout.reps
                })
            })
            .then(res=> res.json())
            .then(data=> console.log(data))
        })
       
        history.push(`/routine/${routine.id}`)
         window.location.reload(false)
        } 
        else{
            res.json()
            .then(res=> setErros(res.errors))
        }  
       })
        
    }

    console.log(worokoutInfoObject)
    
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

            <Container style={{
                textAlign:'center' 
            }}>
            <br/>
            <br />


            <h3 name='workout search'> Search Work Outs:</h3>
            <TextField variant="standard" value={workoutSearchFilter} onChange={(e)=> setWorkoutSearchFilter(e.target.value)} name='workout search'></TextField>
            </Container>
            
            <Grid
            style={{
                textAlign:'center' 
            }}
            >
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
       <NavBar user={user}/>
       <br />
       <br />
       <br />


        <Box>
            <Container>
                <Paper className='update-workout-main-paper' elevation={15}>
                    <Box p={4}>




       <Box>
           <Container style={{
        textAlign:'center' 
    }}>
               <Paper elevation={10}>
       <h1>Update {routine.name}</h1>
       <ErrorsCard errors={errors}/>
       <form onSubmit={handleSubmit}>
           <div>  
            <h3 name='name'>Routine Name</h3>
           <br></br>
           <TextField variant="standard" value={routineName} onChange={(e)=> setRoutineName(e.target.value)} name='name'></TextField>
           <br />
           <br />
           <label name= 'description'>Description </label>
           <br />
           <TextField variant="standard" value={routineDescription} onChange={(e)=> setRoutineDescription(e.target.value)} name='description'></TextField>
           <br />
           <br />
           <h3 name= 'image'>Image Link</h3>
           <br />
            <img src={imageLink} height='300' width='400'></img>
            <br />
           <TextField value={imageLink} variant="filled" onChange={(e)=> setImageLink(e.target.value)} name= 'image'></TextField>
           </div>
           <br />
           <Button  color='secondary' variant="contained" type='submit'> Update {routine.name}</Button>
        </form>
        <br />
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


export default UpdateRoutine