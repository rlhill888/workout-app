import React, {useState} from "react";
import { GiphyFetch } from '@giphy/js-fetch-api'
import TextList from './components/TextList'
import Error from './components/Error'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';
import PostSettings from "./Postsettings";
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
import Modal from '@mui/material/Modal';






function PostCardWithSettings({post, user}){
    const [comment, setComment]= useState('')
    
    let commentsSection
   
    
    

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
            <Box p={3}> 
            <Container>
        <br />
        <PostSettings post={post}></PostSettings>
        <br />
        <br />
       <div>
           <Avatar src={post.user.profile_pic}></Avatar>
           <h3>{post.user.user_name} </h3>
            <h1>{post.title}</h1>
            <br />
            <br />
            <CardMedia component="img" image={post.image} height='400' width='500'></CardMedia>
            <br />
            <br />
            <h2>{post.description}</h2>
            <br />
            <br />
        </div>
        <Accordion>
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
                
                post.comments.map((c)=>{
            return(
                <div key={`comment ${c.id}`}>
                    <h3>{c.comment_text}</h3>
                </div>
            )
        })
    }
            </AccordionDetails>

        </Accordion>
        <br />
        <hr />
        </Container>
         </Box>
        </Paper>
       
    )
}

export default PostCardWithSettings