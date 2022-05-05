import React, {useState} from "react";
import PostCardTemplate from "./PostCardTemplate";
import {  useHistory } from "react-router-dom";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import NavBar from "./NavBar";

function CreatePost({user}){

    const [title, setTitle]= useState('')
    const [image, setImage]= useState('')
    const [description, setDescription]= useState('')
    const history = useHistory();

    function handleSubmit(e){
        e.preventDefault()
        fetch('http://localhost:4000/posts',{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                user_id: user.id,
                title: title,
                image: image,
                description: description,
                routine_post: false,
                meal_post: false
            })
        })
        .then(res=> res.json())
        .then(res=> console.log(res))

        history.push('/profile')
        window.location.reload(false)
    }
    
    return(

        <div className='main-background'> 
        <NavBar user={user}/>
        <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <Box
             style={{
                textAlign:'center' 
            }}
            >
                <Container>
                    <Paper elevation={15}>
                        <Box p={4}>
            <form onSubmit={handleSubmit}>
                <h3 name='title'>Post Title: </h3>
                <TextField value={title} variant='standard' onChange={(e)=> setTitle(e.target.value)} name='title'></TextField>
                <br />
                <h3 name='Image'>Image Link:</h3>
                <TextField value={image} name='Image' variant='standard' onChange={(e)=> setImage(e.target.value)}></TextField>
                <br />
                <h3 name='description'>Description: </h3>
                <TextField variant='standard' name='description' value={description} onChange={(e)=> setDescription(e.target.value)}></TextField>
                <br />
                <br />
                <Button color='secondary' type='submit'>Create Post</Button>
            </form>
            </Box>
            </Paper>
            </Container>
            </Box>
        </div>
        <br />
        <PostCardTemplate user={user} title={title} image={image} description={description}/>
        </div>
    )
}


export default CreatePost