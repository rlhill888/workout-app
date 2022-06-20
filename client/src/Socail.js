import React, {useState, useEffect} from "react";
import NavBar from "./NavBar";
import PostForm from "./PostForm";
import { useHistory } from "react-router-dom";
import FollowUserCard from "./FollowUserCard";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import PostAddIcon from '@mui/icons-material/PostAdd';
import Paper from '@mui/material/Paper';
import './socialmedia.css'


function Socail({user}){
    const history= useHistory()
    const [posts, setPosts]=useState([])
    const [users, setUsers]= useState([])
    const [openDrawer, setOpenDrawer]= useState(false)
    useEffect(()=>{
        fetch(`loadposts/${user.id}`)
        .then(res=> res.json())
        .then(res=> {
            setPosts(res)})
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
        <div 
        // style={{

        //     height: '100vh'
        // }}
        
        className='meal-background'> 
        <NavBar user={user}/>
        
        <br />
        <br />
        <br />
        <br />
        <Box>
            <Container>
                <Paper>
                    <Box p={4}>
         <Box sx={{ flexDirection: 'row-reverse' }}>
            
        <Button variant='contained' onClick={()=> setOpenDrawer(true)}>
            <MenuIcon /> Social Menu
        </Button>
        </Box>
        <Box textAlign='center'>
            <h1 >Social</h1>
        </Box>


        <PostForm posts={posts} user={user} users={users}/>
        </Box>
        </Paper>
        </Container>
        </Box>

        <Drawer  open={openDrawer} onClose={()=> setOpenDrawer(false)} anchor='right'>
            <Box p={2} textAlign='center' width='250px' role='presentation'>
                <h2 >Socail Menu</h2>
                 <FollowUserCard user={user} users={users}></FollowUserCard>
        <br />
        <br />
        <br />
        <br />
        <br />
        
        <Button variant="contained" onClick={()=> history.push('createpost')}>
            <PostAddIcon />
            Create A New Post</Button>
            </Box>
        </Drawer>
        
        
        </div>
    )
}

export default Socail