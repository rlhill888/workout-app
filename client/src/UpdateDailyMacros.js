import React, {useState} from "react";
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import NavBar from "./NavBar";
import './updatedailymacros.css'


function UpdateDailyMacros({user}){
    const [calories, setCalories]= useState(user.calories)
    const [carbs, setCarbs]= useState(user.carb_macros)
    const [protein, setProtein]= useState(user.protein_macros)
    const [fats, setFats]= useState(user.fat_macros)
    console.log(calories)
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
            <h1>
                Change daily macros
            </h1>
            <form onSubmit={(e)=>{
                e.preventDefault()
                fetch(`http://localhost:4000/users/${user.id}`, {
                    method: 'PATCH', 
                    headers: {
                        'Content-Type' : 'application/jsom'
                    },
                    body: JSON.stringify({
                        calories: calories,
                        carb_macros: carbs,
                        protein_macros: protein,
                        fat_macros: fats
                    })
                })
                .then(res=> res.json())
                .then(data=> console.log(data))
            }}>
                <h3 name='calories'>Calories: </h3>
                <TextField variant='standard' onChange={(e)=> setCalories(e.target.value)}value={calories} name='calories'type='number'></TextField>
                <br />
                <br />
                <h3 name='fats'>Grams of fat: </h3>
                <TextField variant='standard' onChange={(e)=> setFats(e.target.value)} value={fats} name='fats' type='number'></TextField>
                <br />
                <br />
                <h3 name='proteins'>Grams of protein: </h3>
                <TextField variant='standard' onChange={(e)=> setProtein(e.target.value)} value={protein} name='proteins' type='number'></TextField>
                <br />
                <br />
                <h3 name='carbs'>Grams of carbs: </h3>
                <TextField variant='standard' onChange={(e)=> setCarbs(e.target.value)} value={carbs} name='carbs' type='number'></TextField>
                <br />
                <br />
                <Button type='submit' variant='contained'>Update Your Daily Macro Goals</Button>
            </form>
            </Box>
            </Paper>
            </Container>
            </Box>
        </div>
    )
}

export default UpdateDailyMacros