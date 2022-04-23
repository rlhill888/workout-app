import React, {useState} from "react";
import PostCardTemplate from "./PostCardTemplate";
import {  useHistory } from "react-router-dom";




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

        history.push('/')
    }
    
    return(

        <> 
        
        <div>
            <button onClick={()=> history.push('/')}>Back</button>
            <br />
            <br />
            <form onSubmit={handleSubmit}>
                <label name='title'>Title: </label>
                <input value={title} onChange={(e)=> setTitle(e.target.value)} name='title'></input>
                <br />
                <label name='Image'>Image Link:</label>
                <input value={image} name='Image' onChange={(e)=> setImage(e.target.value)}></input>
                <br />
                <label name='description'>Description: </label>
                <input name='description' value={description} onChange={(e)=> setDescription(e.target.value)}></input>
                <br />
                <br />
                <input type='submit' value='Create Post'></input>
            </form>
        </div>
        <br />
        <PostCardTemplate title={title} image={image} description={description}/>
        </>
    )
}


export default CreatePost