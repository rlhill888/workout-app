import React, {useState} from "react";
import PostCard from "./PostCard";

import { useHistory } from "react-router-dom";


function PostForm({users, posts, user}){

    const [showFollowButton, setShowFollowButton]= useState(false)
    const [userShowing, setUserShowing]= useState()
    const history = useHistory();

    console.log(userShowing)
    let followUserButton
    console.log(posts)
    if(showFollowButton=== true){
        followUserButton= <> 
        <input type='submit' value='follow'></input> 
        <img width="50" height="50" src={userShowing.profile_pic}></img>
        </>
    }
    if(showFollowButton=== false){
        followUserButton= <> </>
    }

    return(
       <div>
           <h1 >Posts</h1>
           <br />
           <br />
           <div>
               <form onSubmit={(e)=>{
                   e.preventDefault()
                   console.log(userShowing[0].id)
                   fetch('followings', {
                       method: 'POST',
                       headers: {
                           'Content-Type' : 'application/json'
                       },
                       body: JSON.stringify({
                           user_id: user.id,
                           user_getting_followed_id: userShowing[0].id,
                           favorite: false
                       })
                   })
                   .then(res=> res.json())
                   .then(res=> console.log(res))
                   
               }}>
                   <input onChange={(e)=>{
                       
                        let user_filter = users.filter((u)=>{ 
                            return e.target.value === u.user_name})
                          
                        
                        if(user_filter.length >=1){
                            setUserShowing(user_filter)
                            return setShowFollowButton(true)
                        }
                        else{
                            setUserShowing(null)
                             return setShowFollowButton(false)
                        }
                   }} placeholder='search a User to follow'></input>
                   {followUserButton}
               </form>
           </div>
           <br />
           <button onClick={()=> history.push('createpost')}>Create Post</button>
           <br />
           <div>
               {posts.map((p)=>{
                   return <PostCard user={user} key={`postcard-${p.id}`} post={p}/>
               })}
           </div>
           
           

       </div>
    )
}

export default PostForm