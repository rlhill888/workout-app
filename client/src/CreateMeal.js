import React, {useState, useEffect} from "react";
import MealSelectorCard from "./MealSelectorCard";
import { useHistory } from "react-router-dom";
import NavBar from "./NavBar";
import ErrorsCard from "./ErrorsCard";
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import './createmeal.css'



function CreateMeal({user, ingredients}){
    const [filterOption, setFilterOption]= useState('')
    const [searchFilter, setSearchFilter]= useState('')
    const [name, setName]= useState('')
    const [description, setDescription]= useState('')
    const [image, setImage]= useState('')
    const [mealObj, setMealObj]= useState([])
    const [mealCheckedObj, setMealCheckedObj]= useState([])
    const [showMealPanel, setShowMealPanel]= useState(false)
    const [errors, setErrors]= useState([])
    const filteredIngredientsArray= ingredients.filter((i)=> i.macro_type.includes(filterOption) && i.name.includes(searchFilter))

    const history = useHistory()

    useEffect(()=>{
        let copyArray= []
        ingredients.map((i)=>  copyArray.push({ [`${i.name} checked`] : false}))
        setMealCheckedObj(copyArray) 
        
    }, [])

    function handleSubmit(e){
        e.preventDefault()
        let mealId 

        const meal={
            name: name, 
            description: description,
            image: image,
        }

        fetch('/meals', {
            method: 'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(meal)
        })
        .then(res=> {
            
        if(res.ok){
             res.json()
             .then(data=>{
            console.log(data)
            mealId= data.id
            console.log(mealId)
            fetch('/user_meals', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({
                    meal_id: mealId,
                    user_id: user.id
                })
            })
            .then(res => res.json())
            .then(data => console.log(data))
            mealObj.forEach((meal)=>{
                fetch('meal_ingredients', {
                    method: 'POST',
                    headers: {
                        'Content-Type' : 'application/json'
                    },
                    body: JSON.stringify({
                        meal_id: mealId,
                        ingredient_id: meal.id,
                        servings: meal.servings
                    })

                })
                .then(res=> res.json())
                .then(res=> console.log(res))
            })
            history.push(`/meal/${mealId}`)
            window.location.reload(false)
        })
        }
        else{
            res.json()
            .then(res=> setErrors(res.errors))
        }
        })
        
        
    }
   
    console.log(mealObj)

    let showMeals

    if(showMealPanel===false){
        showMeals = 
        <Stack>
             <Button color='secondary' variant="contained" onClick={()=> setShowMealPanel(true)}> Show Meals</Button>
        </Stack>
       
    }

    if(showMealPanel===true){
        const filteredIngredientsArray= ingredients.filter((i)=> i.macro_type.includes(filterOption) && i.name.includes(searchFilter))
        showMeals = <div> 
        <Stack>
            <Button color='secondary' variant="contained" onClick={()=> setShowMealPanel(false)}>Hide Meals </Button>
        </Stack>
                <Container style={{
        textAlign:'center' 
    }}>
                <br/>
                <br/>
                <h3 type='search ingredient'>Search Ingredient:  </h3>
                <TextField color='secondary'  type='search ingredient' variant="standard" value={searchFilter} onChange={(e)=> setSearchFilter(e.target.value)}></TextField>
                
                     <Select   color='secondary'  label="Pick a macro to search by" onChange={(e)=>setFilterOption(e.target.value)}name="Macro Search Filter" id='macrosearchfilter' >
                        <MenuItem value="">Pick a Macro To Search By</MenuItem>
                        <MenuItem value="protein">Protein</MenuItem>
                        <MenuItem value="carb">Carb</MenuItem>
                        <MenuItem value="fat">Fat</MenuItem>
                    </Select>
                   
                <br/>
                <br />
                <br/>
                <br/>
                </Container>
                <Grid container>
        {filteredIngredientsArray.map((i)=>{
            return <MealSelectorCard 
            key={`Meal Selector Card: ${i.id}`}
            i={i} 
            mealCheckedObj={mealCheckedObj} 
            setMealCheckedObj={setMealCheckedObj} 
            mealObj={mealObj}
            setMealObj={setMealObj}
            />
        })}

                </Grid>
        
        
        
        </div>
    }

  
    return(
        <div className='meal-background'> 
        <NavBar user={user}/>
        <br />
        <br />
        <br />

        <Box>
            <Container>
                <Paper elevation={15} className='create-meal-main-paper'>
                    <Box p={4}>


        <Box m={4}>
        <Container  style={{
        textAlign:'center' 
    }}>
            <Paper elevation={10}>
        <br />
        <br />
        <h1> Create A New Meal</h1>
        <ErrorsCard errors={errors}/>
        <br />
        <form onSubmit={handleSubmit}>
            <h3 name='mealname'>New Meal Name</h3>
            <TextField value={name} onChange={(e)=> setName(e.target.value)} name='mealname'  variant="standard"></TextField>
            <br />
            <br />
            <h3 name='mealdescription'>New Meal Description</h3>
            <TextField value={description} onChange={(e)=> setDescription(e.target.value)} name='mealdescription' variant="standard"></TextField>
            <br />
            <br />
            <h3 name='mealimage'>Image Link For Your New Meal</h3>
            <br />
            <img src={image} 
            className='createRoutineImage'
            ></img>
            <br />
            <br />
            <TextField value={image} onChange={(e)=> setImage(e.target.value)} name='mealimage' variant="filled" placeholder="Image Link Here"></TextField>
            <br />
            <br />
            <Button color='secondary' type='submit' variant="contained">Create Meal</Button>
        </form>
        <br />
        <br />

            </Paper>

        </Container>
        </Box>

        <br />
        <br />
        <Container>
            <Paper elevation={10}>
            {showMeals}
            </Paper>
        </Container>


    </Box>
    </Paper>
    </Container>
        </Box>
        
        </div>
    )
}

export default CreateMeal