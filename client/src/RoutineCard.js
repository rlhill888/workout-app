import React, {useEffect, useState} from "react";
import { useHistory } from "react-router-dom";


function RoutineCard({routine, setRoutineBeingShown, setWorkoutBeingShown}){
    console.log(routine)
    const history= useHistory()
    const [workoutArray, setWorkoutArray]= useState([])

    console.log('start')
   
    useEffect(()=>{
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
    
    }, [])
    console.log(workoutArray)
   
    return (<> 
    <h1>{routine.name}</h1>
    <br />
    <button onClick={()=>{
        setRoutineBeingShown(routine)
        history.push(`updateroutine/${routine.id}`)
    }}>Edit Routine</button>
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