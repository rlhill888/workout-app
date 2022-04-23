import React, {useState} from "react";
import { GiphyFetch } from '@giphy/js-fetch-api'
import TextList from './components/TextList'
import Error from './components/Error'

const giphy = new GiphyFetch(process.env.REACT_APP_GIPHY_KEY)


function PostCard({post, user}){

    const [comment, setComment]= useState('')
    const [showComments, setShowComments]= useState(false)
   
    let comments;

    
    if(showComments===true){
        comments= post.comments.map((c)=>{
            return(
                <div>
                    <p>{c.comment_text}</p>
                </div>
            )
        })
    }
    

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
        setShowComments(true)

    }
    

   

    return(
        <> 
        <br />
       <div>
           <img src={post.user.profile_pic} width="50" height="50"></img>
           <h3>{post.user.user_name} </h3>
            <h1>{post.title}</h1>
            <br />
            <br />
            <img src={post.image} height='400' width='500'></img>
            <br />
            <br />
            <h2>{post.description}</h2>
            <br />
            <br />
        </div>
        <div>
            <form onSubmit={handlesSubmit}>
                <input placeholder='comment' onChange={(e)=> setComment(e.target.value)} value={comment}></input> 
                <input type='submit' value='Send'></input>
            </form>
            <button onClick={()=>setShowComments((p)=>!p) }>{showComments ? `Hide Comments`: 'Show Comments'}</button>
            <br />
            <br />
        </div>
        {comments}
        <br />
        </>
    )
}

export default PostCard