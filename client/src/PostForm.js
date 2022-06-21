import React, {useState} from "react";
import PostCard from "./PostCard";
import RoutinePost from "./RoutinePost";
import { useHistory } from "react-router-dom";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


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
           <br />
           <Container>
           <Grid container>
            <div>
               {posts.map((p)=>{
                   if(p.routine_post===true){
                    return (
                    <Box key={`post ${p.id}`}mx={1} my={2}>
                    <Grid item>
                    <RoutinePost user={user} post={p}/>
                    </Grid>
                    </Box>
                    )
                }
                   if(p.routine_post=== false && p.meal_post=== false){
                    return( 
                    <Box key={`post ${p.id}`} mx={1} my={2}>
                    <Grid item>
                    <PostCard user={user} key={`postcard-${p.id}`} post={p}/>
                    </Grid>
                    </Box>

                    )
                   }
               })}
           </div>
           </Grid>
           </Container>
          
           
           

       </div>
    )
}

export default PostForm