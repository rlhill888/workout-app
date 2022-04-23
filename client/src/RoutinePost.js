import React, {useState} from "react";
import {  useHistory } from "react-router-dom";


function RoutinePost({post, user}){

    const [comment, setComment]= useState('')
    const [showComments, setShowComments]= useState(false)
   

    const routine = post.associated_routine[0]
    const workouts = post.associated_routine[1]
    const jointTable = post.associated_routine[2]

    const history=useHistory()

   console.log(jointTable)
    
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

    function addRoutine(){
        fetch(`http://localhost:4000/user_routines`,{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                user_id: user.id,
                routine_id: routine.id,
                currently_using: true
            })
            })
            .then(res=>res.json())
            .then(data=> history.push('/workoutplan'))
    }
    
    

   
    return(
        <> 

<br />
       <div>
           <img src={post.user.profile_pic} width="50" height="50"></img>
            <h1>{post.user.user_name} posted thier routine: {post.title}</h1>
            <br />
            <button onClick={addRoutine}>Add {post.user.user_name}'s {routine.name} routine to your list of routines</button>
            <br />
            <br />
            <img src={post.image} height='400' width='500'></img>
            <br />
            <br />
            <h2>Routine description: </h2>
            <h2>{post.description}</h2>
            <br />
            <br />
        </div>
        <div>
            <ol>
                {workouts.map((w)=>{
                    let reps
                    let sets
                        
                    jointTable.map((t)=>{
                        if(w.id===t.workout_id){
                            return reps=t.reps, sets=t.sets
                        }
                    })


                    return(
                        <li>
                            <div>
                            <img height='325' width='325' src={w.gif}></img>
                            <br />
                            <br />
                            <h3>{sets} sets and, {reps} reps for each set of {w.name}</h3>
                            </div>
                        </li>
                    )
                })}
            </ol>
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


export default RoutinePost