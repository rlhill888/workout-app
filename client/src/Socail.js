import React, {useState, useEffect} from "react";
import NavBar from "./NavBar";
import PostForm from "./PostForm";
import { useHistory } from "react-router-dom";
import FollowUserCard from "./FollowUserCard";
import Button from '@mui/material/Button';


function Socail({user}){
    const history= useHistory()
    const [posts, setPosts]=useState([])
    const [users, setUsers]= useState([])
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
        <> 
        <NavBar user={user}/>
        
        <br />
        <br />
        <h1>Social</h1>
        <br />
        <br />
        <FollowUserCard user={user} users={users}></FollowUserCard>
        <br />
        <br />
        <Button variant="contained" onClick={()=> history.push('createpost')}>Create Post</Button>
        <br />
        <br />
        <PostForm posts={posts} user={user} users={users}/>
        
        </>
    )
}

export default Socail