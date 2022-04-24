import React, { useEffect, useState } from "react";
import LogOutButton from "./LogOutButton";
import NavBar from "./NavBar";
import PostForm from "./PostForm";
import { useHistory } from "react-router-dom";
import { GiphyFetch } from '@giphy/js-fetch-api'
import TextList from './components/TextList'
import Error from './components/Error'

const giphy = new GiphyFetch(process.env.REACT_APP_GIPHY_KEY)


function Home({user, setRoutineBeingShown}){

    const [posts, setPosts]=useState([])
    const [users, setUsers]= useState([])

    const [text, setText] = useState('')
    const [results, setResults] = useState([])
    const [err, setErr] = useState(false)

    const apiCall = async () => {
        const res = await giphy.animate(text, {limit: 20})
        console.log(res.data)
        setResults(res.data)
      }
  

    const history = useHistory();
    
    useEffect(()=>{
        fetch(`loadposts/${user.id}`)
        .then(res=> res.json())
        .then(res=> {
            setPosts(res)})
    }, [])

    useEffect(()=>{
        fetch('users')
        .then(res=> res.json())
        .then((data)=>setUsers(data))
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
    {user.routines.map((a)=>{
        return(
        <div onClick={()=>{ 
            setRoutineBeingShown(a)
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