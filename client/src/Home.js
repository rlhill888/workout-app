import React from "react";
import LogOutButton from "./LogOutButton";
import NavBar from "./NavBar";
import PostForm from "./PostForm";


function Home({user}){

return(
    <>
    <LogOutButton />
    <h1>Home page</h1>
    <NavBar />
    <br />
    <br />
    {user.routines.map((a)=>{
        return(
        <div onClick={()=> console.log('click')}>
            <h1>{a.name}</h1>
            <img  src={a.image} width="900" height="500"></img>
        </div>
        )
    })}
    <br />
    <br />
    <PostForm />
    </>
)

}

export default Home