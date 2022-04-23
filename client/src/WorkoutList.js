import React, {useState} from "react";


function WorkOutListCard({workouts, routine, jointTable}){
    const [showWorkouts, setShowWorkouts]= useState(false)

    let workoutList


    if(showWorkouts===false){
        workoutList= <button onClick={setShowWorkouts((p)=> !p)}> Show {routine.name} workouts</button>
    }
    if(showWorkouts===true){
        workoutList=  <div>
            <button onClick={setShowWorkouts((p)=> !p)}>Close {routine.name} workout list</button>
        <ol>
            
            {workouts.map((w)=>{
                let reps
                let sets
                    
                jointTable.map((t)=>{
                    if(w.id===t.workout_id){
                        return reps=t.reps, sets=t.sets
                    }
                })


                return(
                    <li>
                        <div>
                        <img height='500' width='500' src={w.gif}></img>
                        <br />
                        <br />
                        <h3>{sets} sets and, {reps} reps for each set of {w.name}</h3>
                        </div>
                    </li>
                )
            })}
        </ol>
    </div>
    }

    return( <> </>)
}

export default WorkOutListCard