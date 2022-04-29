import React, {useEffect, useState} from "react";
import { useHistory, useParams } from "react-router-dom";



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

    let editButton

    if(routine.created_by_id !== user.idid){
        editButton= <> </>
    }
    if(routine.created_by_id === user.id){
        editButton=  <button onClick={()=>{
            setRoutineBeingShown(routine)
            history.push(`updateroutine/${routine.id}`)
        }}>Edit Routine</button>
    }

   
    return (<> 
    <button onClick={history.goBack}>Back</button>
    <h1>{routine.name}</h1>
    <br />
        {editButton}
    <br />
    <br />
    <div>
        <p>{routine.description}</p>
    </div>
    <br />
    <br />
    {workoutArray.map((w)=>{
        return(<> 

        <br />
            <div>
                <h2>{w.name}</h2>
                <img onClick={()=> {
                    setWorkoutBeingShown(w.workout)
                    history.push(`/workouts/${w.workout.id}`)
                }} src={w.gif} height='200' width='200'></img>
                <h2>{`Sets: ${w.sets}`}</h2>
                <h2>{`Reps: ${w.reps}`}</h2>

            </div>
        <br />
        </>
           
        )
    })}
    </>)
}

export default RoutineCard