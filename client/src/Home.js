import React, { useEffect, useState } from "react";
import LogOutButton from "./LogOutButton";
import NavBar from "./NavBar";
import PostForm from "./PostForm";
import { useHistory } from "react-router-dom";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import HomeCSS from './Home.module.css'

import { CardActionArea, CardMedia, CardContent, Card } from '@mui/material';


function Home({user}){

    const [posts, setPosts]=useState([])
    const [users, setUsers]= useState([])
    const [routines, setRoutines]= useState([])
  

    const history = useHistory();
    
    useEffect(()=>{
        fetch(`loadposts/${user.id}`)
        .then(res=> res.json())
        .then(res=> {
            setPosts(res)})
        fetch('current_user_routines')
        .then(res=> res.json())
        .then(res=> setRoutines(res))
    }, [])

    useEffect(()=>{
        fetch('users')
        .then(res=> res.json())
        .then((data)=>{
            const filteredUserArray = data.filter((array)=>{
                return array.public_user === true && array.user_name !== user.user_name
            })
            setUsers(filteredUserArray)
        })
    }, [])
    

return(
    <>
    <br />
    <LogOutButton />
    <h1>Welcome {user.user_name}</h1>
    <br />
    <br />
    <NavBar user={user}/>
    <br />
    <br />
    <h1>Here Are Your Routines You Are Currently Using</h1>
    <br />
    {routines.map((a)=>{
        console.log(a)
        return(
            <Box my={4}>
            <Card elevation={15} >
            <CardContent>
                <h1>{a.name}</h1>
            </CardContent>
            <CardActionArea   onClick={()=>{ history.push(`routine/${a.id}`)}}>
            <CardMedia
            component="img"
            height="300"
            image={a.image}
            ></CardMedia> 
            </CardActionArea>
            </Card>

            </Box>
        
        )
    })}
    <br />
    <br />
    <PostForm posts={posts} user={user} users={users}/>
    </>
)

}

export default Home