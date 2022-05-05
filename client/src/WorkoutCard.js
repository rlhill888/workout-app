import React, {useEffect, useState} from "react";
import { useHistory, useParams } from "react-router-dom";
import NavBar from "./NavBar";
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import './workoutcard.css'


function WorkoutCard({user}){
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
        <div className='other-background'>
            <NavBar user={user}/>
            <br />
            <br />
            <br />
            <br />
            <br />
            <Box
            style={{
                textAlign:'center' 
            }}
            m={5}
            >
                <Container>
                    <Paper elevation={15}>
                        <Box p={5}>
                            <Box>
                                <Paper elevation={3}>
                                    <Box p={2}>
             <h1>{workout.name}</h1>
             </Box>
             </Paper>
             </Box>
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
             <h2>{`Heres a video explaining good form and teqniques for ${workout.name}`} </h2>
             <br />
             <br />
             <Box>
                 <Paper className='workout-video-card' elevation={3}>
                     <Box p={2}>
             <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${workout.video_link}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
    </Box>
    </Paper>
    </Box>
    </Box>
    </Paper>
    </Container>
    </Box>
        </div>
    )
}

export default WorkoutCard