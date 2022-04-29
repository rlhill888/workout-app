import React, { useEffect, useState } from "react";
import LogOutButton from "./LogOutButton";
import NavBar from "./NavBar";
import PostForm from "./PostForm";
import { useHistory } from "react-router-dom";


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
    <LogOutButton />
    <h1>Welcome {user.user_name}</h1>
    <img src={user.profile_pic} height='150' width='150'></img>
    <br />
    <br />
    <NavBar />
    <br />
    <br />
    <h1>Here Are Your Routines You Are Currently Using</h1>
    <br />
    {routines.map((a)=>{
        return(
        <div onClick={()=>{ 
            history.push(`routine/${a.id}`)}}>
            <h1>{a.name}</h1>
            <img  src={a.image} width="900" height="500" object-fit= 'cover'></img>
        </div>
        )
    })}
    <br />
    <br />
    <PostForm posts={posts} user={user} users={users}/>
    </>
)

}

export default Home