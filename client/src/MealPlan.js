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



function MealPlan({user}){
    const history = useHistory();
    const [meals, setMeals]= useState([])

    useEffect(()=>{
        fetch('http://localhost:4000/current_user_meals')
        .then(res=> res.json())
        .then(res=> {
            console.log(res)
            setMeals(res)})
    }, [])

    return(
        <>
        <NavBar user={user}/> 
        <br />
        <br />
        <h1>Meal Plan</h1>
        <br />
        <Container>
        <Paper elevation={3}>
        <h2>Here are your daily macro goals:</h2>
        <h3>{user.calories} Calories</h3>
        <h3>Protein: {user.protein_macros.toFixed(2)} grams</h3>
        <h3>Fat: {user.fat_macros.toFixed(2)} grams</h3>
        <h3>Carbs: {user.carb_macros.toFixed(2)} grams</h3>
        </Paper>
        </Container>
       
        <br/>
        <br />
        <h2>Your meals:</h2>
        <Grid container spacing={2}>
            {meals.map((meal)=>{
            return (
            <MealPlanMealCard key={`Meal Planner Meal Card ${meal.id}`} meal={meal} user={user}/>)
        })}
        </Grid>
        
        <SpeedDial 
    ariaLabel="SpeedDial basic example"
    sx={{ position: 'absolute', bottom: 17, right: 16 }}
    icon={<SpeedDialIcon />}
    >
        <SpeedDialAction
        icon={<AddIcon />}
        tooltipTitle='Create a New Meal'
        onClick={()=> history.push('/createMeal')}
        >

        </SpeedDialAction>

    </SpeedDial>
        </>
    )

}


export default MealPlan