import React, { useEffect, useState } from "react";
import LogOutButton from "./LogOutButton";
import NavBar from "./NavBar";
import PostForm from "./PostForm";
import { useHistory } from "react-router-dom";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import "./home.css";

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
    <div className='main-background'
    style={{
        height: '100%',
        paddingBottom: '2vh'
    }}
    >
        <NavBar user={user}/>
        <br />
        <br />
        <br />
        <br />
        <br />
    <Box>
        <Container>
            <Paper
            className='home-paper-background'
            >
                <Box py={3}>

                    <Container>
                        <Paper  className='main-home-paper'>
                            <Box 
                            
                            p={2}>



  
    <br />
    <Container
    style={{
        textAlign:'center' 
    }}
    >
        <Paper>
            <Box p={1}>
    <h1
    className="largeTextSize"
    >WELCOME {user.user_name}!</h1>
    </Box>
    </Paper>
    </Container>
    
    <br />
    <br />
   
    <br />
    <Box
    >
        <Paper 
        elevation={4}>
            
            <Box 
            
            py={4}
            px={2}
            
            >
                 <h1
                 style={{
                    textAlign: 'center'
                 }}
                 className="largeTextSize"
                 >Here Are Your Routines You Are Currently Using</h1>
    {routines.map((a)=>{
        console.log(a)
        return(
            <Box my={4}
            
            >
            <Card elevation={15} >
            <CardContent>
                <h1
                className="largeTextSize"
                >{a.name}</h1>
            </CardContent>
            <CardActionArea   onClick={()=>{ 
                
                history.push(`routine/${a.id}`)
                window.scrollTo(0,0)
                }}>
            <CardMedia
            component="img"
            className="homeCardImage"
            image={a.image}
            ></CardMedia> 
            </CardActionArea>
            </Card>

            </Box>
        
        )
    })}
            </Box>
        </Paper>
    </Box>
    {/* <PostForm posts={posts} user={user} users={users}/> */}



    </Box>
    </Paper>
    </Container>



    </Box>
    </Paper>
    </Container>
    </Box>
    </div>
)

}

export default Home