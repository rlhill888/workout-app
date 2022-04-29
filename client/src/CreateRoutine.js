import React, {useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import { Route, useRouteMatch, Switch } from "react-router-dom";
import WorkoutCard from "./WorkoutCard";
import CreateRoutineSelectorCard from "./CreateRoutineSelectorCard";

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
        .then(res=>res.json())
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
        })

       


       
    }



    if(showWorkouts===false){
        workoutsearch= <button onClick={()=> setShowworkouts(true)}>Select Workouts For Routine</button>
    }
    if(showWorkouts===true){

        const filteredWorkoutSearch = workouts.filter((w)=> w.name.includes(workoutSearchFilter)) 
        workoutsearch= <div>
            
            <button onClick={()=> setShowworkouts(false)}> Hide Workouts</button>
            <br/>
            <br />


            <label name='workout search'> Search Work Outs:</label>
            <input value={workoutSearchFilter} onChange={(e)=> setWorkoutSearchFilter(e.target.value)} name='workout search'></input>

            
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
        </div>
    }
  
    return(
       <> 
       <button onClick={()=> history.push('/workoutplan')}>Back To Workout Plan</button>
       <h1>Create Routine</h1>
       <form>

           <div>  
            <label name='name'>Routine Name</label>
           <br></br>
           <input value={routineName} onChange={(e)=> setRoutineName(e.target.value)} name='name'></input>
           <br />
           <br />
           <label name= 'description'>Description </label>
           <br />
           <input value={routineDescription} onChange={(e)=> setRoutineDescription(e.target.value)} name='description'></input>
           <br />
           <br />
           <label name= 'image'>Image Link</label>
           <br />
            <img src={imageLink} height='300' width='400'></img>
            <br />
           <input value={imageLink} onChange={(e)=> setImageLink(e.target.value)} name= 'image'></input>
           </div>
           <br />
           <input value='Create Routine' onClick={handleSubmit} type='submit'></input>

           <br />
           <br />
           <br />
           {workoutsearch}

       </form>
       
       </>
    )
}

export default CreateRoutine