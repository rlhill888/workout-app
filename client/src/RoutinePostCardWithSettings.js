import React, {useState} from "react";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import CardMedia from '@mui/material/CardMedia';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Grid from '@mui/material/Grid';
import PostSettings from "./Postsettings";
import { CardActionArea, CardContent, Card } from '@mui/material';
import { useHistory } from "react-router-dom";


function RoutinePostCardWithSettings({post, user}){
    const history =useHistory()
    const [comment, setComment]= useState('')
    const [showComments, setShowComments]= useState(false)
    let commentsSection
   

    const routine = post.associated_routine[0]
    const workouts = post.associated_routine[1]
    const jointTable = post.associated_routine[2]

   console.log(jointTable)
    
  
    function handlesSubmit(e){
        e.preventDefault()
        fetch('comments',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                comment_text: comment,
                post_id: post.id,
                user_id: user.id
            })
        })
        .then(res=> res.json())
        .then(res=> console.log(res))
        setShowComments(true)

    }

    function addRoutine(){
        fetch(`/user_routines`,{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                user_id: user.id,
                routine_id: routine.id,
                currently_using: true
            })
            })
            .then(res=>res.json())
            .then(data=> history.push('/workoutplan'))
    }
    function checkCommentInput(){
        if(comment===''){
            return true
        }
        else{
            return false
        }
    }
    
    

   
    return(
        <Paper elevation={15}> 
            <Box>
                <Container>

        <br />
        <br />
        <PostSettings user={user} post={post}></PostSettings>
        <br />
        <br />
       <div>
           <Avatar src={post.user.profile_pic} ></Avatar>
            <h1>{post.user.user_name} posted thier routine: {post.title}</h1>
            <br />
            <Button disabled variant="contained" onClick={addRoutine}>Add {post.user.user_name}'s "{routine.name}"  to your list of routines</Button>
            <br />
            <br />
            <CardMedia component="img" image={post.image} height='400' width='500'></CardMedia>
            <br />
            <br />
            <h2>Routine description: </h2>
            <h3>{post.description}</h3>
        </div>
        <br />
        <Accordion elevation={3}>
            <AccordionSummary>
                <h3>Show Workouts For {routine.name}</h3>
            </AccordionSummary>
            <AccordionDetails>
                <Paper elevation={2}>
                    <br />

            <Grid container>
                {workouts.map((w)=>{
                    let reps
                    let sets
                        
                    jointTable.map((t)=>{
                        if(w.id===t.workout_id){
                            return reps=t.reps, sets=t.sets
                        }
                    })
                    return(
                            <Box mx={2}>
                                <Card>
                                    <Container>
                                        <CardActionArea>
                                             <img height='325' width='325' src={w.gif} onClick={()=> history.push(`/workouts/${w.id}`)}></img>
                                        </CardActionArea>
                                    </Container>
                                    
                                    <br />
                                    <br />
                                    <h3>{sets} sets and, {reps} reps for each set of {w.name}</h3>
                                </Card>
                            </Box>
                    )
                })}
            </Grid> 
            <br />
            </Paper>
            </AccordionDetails>
        </Accordion>
        <Accordion Accordion elevation={3}>
            <AccordionSummary>
                <h3>Comments</h3>
            </AccordionSummary>
            <AccordionDetails>
            <div>
            <form onSubmit={handlesSubmit}>
                <Stack>
                <TextField variant="standard" placeholder='comment' onChange={(e)=> setComment(e.target.value)} value={comment}></TextField> 
                <Button type='submit' disabled={checkCommentInput()}>Post comment</Button>
                </Stack>
            </form>
            <br />
            <br />
        </div>
                {commentsSection = post.comments.length === 0 ? (
                <>
                <h3>This post dosent have any comments yet</h3>
                <br />
                </>
                ) :
                
                (post.comments.map((c)=>{
            return(
                <div key={`comment ${c.id}`}>
                    <h3>{c.comment_text}</h3>
                </div>
            )
        }))
    }
            </AccordionDetails>

        </Accordion>
        <br />

        </Container>
        </Box>
        </Paper>
    )

}



export default RoutinePostCardWithSettings