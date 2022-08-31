import React, {useState, useEffect} from "react";
import NavBar from "./NavBar";
import { useHistory } from "react-router-dom";
import MealPlanMealCard from "./MealPlanMealCard";
import { CardActionArea, CardMedia, CardContent, Card } from '@mui/material';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import AddIcon from '@mui/icons-material/Add';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './mealplan.css'



function MealPlan({user}){
    const history = useHistory();
    const [meals, setMeals]= useState([])

    useEffect(()=>{
        fetch('/current_user_meals')
        .then(res=> res.json())
        .then(res=> {
            console.log(res)
            setMeals(res)})
    }, [])

    return(
        <div 
        // style={{
        //     height: '100%',
        //     margin: 'auto',
            
        // }}
        className='meal-background'>
        <NavBar user={user}/> 
        <br />
        <br />
        <br />
        <br />
        <br />
        <Box>
            <Container>
                <Paper className='main-meal-paper' elevation={15}>
                    <Box p={2}>

        <Container>
            <Paper
            elevation={7}
            >
        <h1
         style={{
            textAlign:'center' 
        }}
        >Meal Plan</h1>
        </Paper>
        </Container>

        <br />
        <Container>
        <Paper elevation={7}>
        <Box p={5}
         style={{
            textAlign:'center' 
        }}
        >
        <h2>Here are your Daily Macro Goals {user.goal_type}:</h2>
        <h3>{user.calories} Calories</h3>
        <h3>Protein: {user.protein_macros.toFixed(2)} grams</h3>
        <h3>Fat: {user.fat_macros.toFixed(2)} grams</h3>
        <h3>Carbs: {user.carb_macros.toFixed(2)} grams</h3>
        </Box>
        </Paper>
        </Container>
       
        <br/>
        <br />
        <Container>
            <Paper elevation={7}>
                <Box  pb={2}>
        <h2 
         style={{
            textAlign:'center' 
        }}
        >Your meals:</h2>
        <Grid 
        container spacing={2}>
            {meals.map((meal)=>{
            return (
            <MealPlanMealCard key={`Meal Planner Meal Card ${meal.id}`} meal={meal} user={user}/>)
        })}
        </Grid>
        </Box>
        </Paper>


        
        </Container>


        </Box>
        </Paper>
        </Container>
        </Box>



        <SpeedDial 
    ariaLabel="SpeedDial basic example"
    
    sx={{ position: 'fixed', bottom: 17, right: 16 }}
    FabProps={{
        sx: {
          bgcolor: 'secondary.main',
          '&:hover': {
            bgcolor: 'secondary.main',
          }
        }
      }}
    icon={<SpeedDialIcon />}
    
    >
        <SpeedDialAction
        icon={<AddIcon />}
        tooltipTitle='Create a New Meal'
        onClick={()=> history.push('/createMeal')}
        >
        </SpeedDialAction>

    </SpeedDial>
        </div>
    )

}


export default MealPlan