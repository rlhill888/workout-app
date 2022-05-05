import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



function FollowUserCard({user, users}){
    let followUserButton
    const [showFollowButton, setShowFollowButton]= useState(false)
    const [userShowing, setUserShowing]= useState()
    const [inputValue, setInputValue]= useState('')

    function refreshPage() {
        window.location.reload(false);
      }

    if(showFollowButton=== true){
        followUserButton= <> 
        <br />
        <br />
        <Button type='submit'  color='secondary' variant="contained">
            <Avatar src={userShowing.profile_pic}></Avatar>
              Follow {inputValue}</Button> 
        </>
    }
    if(showFollowButton=== false){
        followUserButton= <> 
        <br />
        <br />
        <Button disabled  variant="contained">
            <Avatar></Avatar>
              Follow {inputValue}</Button> 
        </>
    }

    return(
        <Stack>
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
                   refreshPage()
                   
               }}>
                   <TextField color='secondary' onChange={(e)=>{
                        setInputValue(e.target.value)
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
                   }} placeholder='search a User to follow'></TextField>
                   
                
                   {followUserButton}
               </form>
           </Stack>
    )
}

export default FollowUserCard