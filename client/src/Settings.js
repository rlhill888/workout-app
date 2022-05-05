import React from "react";
import NavBar from "./NavBar";
import {  useHistory } from "react-router-dom";
import {Map, GoogleApiWrapper} from 'google-maps-react'
import PostCard from "./PostCard";
import PostSettings from "./Postsettings";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { CardActionArea, CardMedia, CardContent, Card } from '@mui/material';
import PostCardWithSettings from "./PostCardWithSettings";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RoutinePostCardWithSettings from "./RoutinePostCardWithSettings";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import './settings.css'



function Settings({user}){
    console.log(user)
    const history= useHistory()
    const height = ()=>{
        let inchesRemaining
        let feet
        
        feet = user.height/12
        feet = Math.trunc(feet)
        console.log(feet)
        inchesRemaining = user.height - (feet*12)
        if(inchesRemaining===0){
            return `${feet} ft`
        }
        else{
            return `${feet} ft ${inchesRemaining}`
        }
    }
    return(
        <div className='main-background'> 
            <br />
            <br />
            <br />
            <br />
        <NavBar user={user}/>
        <Box>
            <Container>
                <Paper className='profile-background-main-card' elevation={15}>
                    <Box 
                    p={4}
                    >
                        <Container>
                            <Paper>
                                <Box p={4}>


        <h1>
            <Avatar
            src={user.profile_pic}></Avatar>
            Profile</h1>
            
            <h2>{user.user_name}</h2>
        <br />
        
        <br />
        <Accordion>
            <AccordionSummary  expandIcon={<ExpandMoreIcon />}>
            <h2>Account Information</h2>
            </AccordionSummary>
            <AccordionDetails>
             <h3>{`Name: ${user.first_name} ${user.last_name}`}</h3>
             <h3>{`Username: ${user.user_name}`}</h3>
            <h3>{`BMI: ${user.bmi}`}</h3>
            <h3>{`BMR: ${user.bmr}`}</h3>
            <h3>{`age: ${user.age}`}</h3>
            <h3>{`weight: ${user.weight}`}</h3>
            <h3>{`Height: ${height()}`}</h3>
             <Button color='secondary' onClick={()=> history.push(`/changestats/${user.id}`)}>Change Account Information</Button>
            </AccordionDetails>
           
        </Accordion>
        <Accordion>
        <AccordionSummary  expandIcon={<ExpandMoreIcon />}> 
        <h2>Meal Plan Daily Macros</h2>
        </AccordionSummary>
        <AccordionDetails>
            <h3>{user.calories} Calories</h3>
            <h3>{user.carb_macros} Grams of Carbs</h3>
            <h3>{user.protein_macros} Grams of Protein</h3>
            <h3>{user.fat_macros} Grams of Fats</h3>
             <Button color='secondary' onClick={()=> history.push('/updatedailymacros')}>Change Daily Macro Goals</Button>
        </AccordionDetails>
        </Accordion>
        <div >
        </div>
        <br />
        <br />
        <h2>Your Posts:</h2>
        <Grid container>
        {user.posts.map((post)=>{
            if(post.routine_post===true){
                return (
                <Box m={4}>
                <Grid item>
                    <RoutinePostCardWithSettings post={post} user={user}/>
                </Grid>
                </Box>
                
                )
            }
            if(post.routine_post=== false && post.meal_post=== false){
            return (
            <Box m={4}>
                <Grid item>
                 <PostCardWithSettings post={post} user={user}/>
                </Grid>
            </Box>
            )
            }
        })}
        </Grid>




        </Box>
        </Paper>
        </Container>








        </Box>






        </Paper>
        </Container>
        </Box>
        
        </div>
    )
}

export default Settings