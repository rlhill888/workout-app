import React, {useEffect, useState} from "react";
import { useHistory, useParams } from "react-router-dom";


function WorkoutCard(){
    // console.log(workout)
    const params = useParams()
    const history= useHistory()
    const [workout, setWorkout]=useState({})
    
    useEffect(()=>{ 
        fetch(`http://localhost:4000/workouts/${params.id}`)
        .then(res=> res.json())
        .then(res=> setWorkout(res))
    }, [])
    return(
        <div>
            <button onClick={history.goBack}>Back</button>
             <h1>{workout.name}</h1>
             <br />
             <br />
             <h3>{workout.description}</h3>
             <br />
             <br />
             <h3> {`Workout type: ${workout.workout_tag}`} </h3>
             <br />
             <br />
             <h3> {`Targeted muscle groups for ${workout.name}: ${workout.target_muscles}`}</h3>
             <br />
             <br />
             <h2>{`Heres on a video explaining good form and teqniques for ${workout.name}`} </h2>
             <br />
             <br />
             
             <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${workout.video_link}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
        </div>
    )
}

export default WorkoutCard