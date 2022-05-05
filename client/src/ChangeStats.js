import React, {useState} from "react";
import NavBar from "./NavBar";
import { useHistory } from "react-router-dom";
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './changestats.css';

function ChangeStats({user}){
    const [age, setAge]= useState(user.age)
    const [weight, setWeight]= useState(user.weight)
    const [height, setHeight]= useState(user.height)
    const [profilePic, setProfilePic]= useState(user.profile_pic) 
    const [goalType, setGoalType]= useState(user.goal_type)
    const [privacySetting, setPrivacySetting]= useState(user.public_user)

    const history= useHistory()

    function handleSubmit(e){
        e.preventDefault()
        fetch(`http://localhost:4000/users/${user.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                age: age,
                height: height,
                weight: weight,
                profile_pic: profilePic,
                public_user: privacySetting
            })
        })
        .then(res=> res.json())
        .then(res=> console.log(res))
    }

    return(
        <div className='main-background'>
            <NavBar user={user}/>
            <br />
            <br />
            <br />
            <br />
            <br />
            <Box
             style={{
                textAlign:'center' 
            }}
            >
                <Container>
                    <Paper elevation={15}>
                        <Box p={4}>
            <h1>{user.user_name}</h1>
            <br />
            <form onSubmit={handleSubmit}>
                <h3 name='age'>Age: </h3>
                <TextField name='age' variant='standard' value={age} onChange={(e)=> setAge(e.target.value)}></TextField>
                <br />
                <br />
                <h3 name='weight'>Weight: </h3>
                <TextField name='weight' variant='standard' value={weight} onChange={(e)=> setWeight(e.target.value)}></TextField>
                <br />
                <br />
                <h3>Account Privacy: </h3>
                <select onChange={(e)=> setPrivacySetting(e.target.value)} value={privacySetting}>
                <option value={true}>Public</option>
                <option value={false}>Private</option>
                </select>
                <br />
                <br />
                <h3 name='profilepic'>Profile Pic Url:</h3>
                <TextField name='profilepic' value={profilePic} onChange={(e)=> setProfilePic(e.target.value)}></TextField>
                <br />
                <br />
                <img src={profilePic}height='250' width='250'></img>
                <br />
                <br />
                <Button color='secondary' type='submit' variant='contained'>Update Profile</Button>
                </form>
                </Box>
                </Paper>
                </Container>
                </Box>
        </div>
    )
}


export default ChangeStats