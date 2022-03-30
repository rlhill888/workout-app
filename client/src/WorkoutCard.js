import React from "react";



function WorkoutCard({workout}){
    // console.log(workout)

    return(
        <div>
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