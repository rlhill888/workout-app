import React, {useState, useEffect} from "react";
import MealSelectorCard from "./MealSelectorCard";
import { useParams, useHistory } from "react-router-dom";
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
import NavBar from "./NavBar";
import './updatemeal.css'


function UpdateMeal({user}){
    const [filterOption, setFilterOption]= useState('')
    const [searchFilter, setSearchFilter]= useState('')
    const [name, setName]= useState('')
    const [description, setDescription]= useState('')
    const [image, setImage]= useState('')
    const [mealObj, setMealObj]= useState([])
    const [mealCheckedObj, setMealCheckedObj]= useState([])
    const [showMealPanel, setShowMealPanel]= useState(false)
    const [originalMealObj, setOriginalMealObj]= useState([])
    const [meal, setMeal]= useState({})
    const [ingredients, setIngredients]= useState([])
    const [errors, setErrors]= useState([])
    const params = useParams()
    const history = useHistory()

  


  

    useEffect(()=>{
        let mealCheckedObj = []
        let ingredientsArray =[]
        let ingredients
        let meal
        fetch('http://localhost:4000/ingredients')
        .then(res=> res.json())
        .then(res=> {
            ingredients = res
            setIngredients(res)

        fetch(`http://localhost:4000/meals/${params.id}`)
        .then(res=> res.json())
        .then(res=> {
            setMeal(res)
            meal = res

        ingredients.map((i)=>{
            mealCheckedObj.push({ [`${i.name} checked`] : false})
        })
        mealCheckedObj.map((object)=>{

            meal.ingredients.map((ingredient)=>{
                 if(Object.keys(object)[0]===`${ingredient.name} checked`){
                    const index = mealCheckedObj.indexOf(object)
                    mealCheckedObj[index] = {[`${ingredient.name} checked`] : true}
            }
        })
           
        })

        meal.meal_ingredients.map((mealIngredient)=>{
            console.log(mealIngredient)
            meal.ingredients.map((ingredient)=>{
        
                if(mealIngredient.ingredient_id===ingredient.id){
                    return ingredientsArray.push({...ingredient, servings: mealIngredient.servings, mealIngredientId: mealIngredient.id})

                }
                console.log(ingredientsArray)
                return ingredientsArray
            })
        })
        setMealObj([...ingredientsArray])
        setOriginalMealObj([...ingredientsArray])
        setMealCheckedObj([...mealCheckedObj])
        setImage(meal.image)
        setName(meal.name)
        setDescription(meal.description)
        })
        })
        
    }, [])
    console.log(meal)

    console.log(mealObj)


    function handleSubmit(e){
        const jsonMealObj={
            name: name, 
            description: description,
            image: image,
        }
        e.preventDefault()
        fetch(`http://localhost:4000/meals/${meal.id}`, {
            method: 'PATCH',
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(jsonMealObj)
        })
        .then(res=> {
            
            if(res.ok){
                res.json()

                .then(data=> console.log(data))

       

        let ingredientsBeingAddedArray = []
        let ingredientsBeingsDeletedArray= []
        let updateServingsarray= []

        mealObj.map((updatedIngredient)=>{
            ingredientsBeingAddedArray.push(updatedIngredient)
            originalMealObj.map((originalIngredient)=>{
                if(updatedIngredient.id === originalIngredient.id){
                    
                    const index = ingredientsBeingAddedArray.indexOf(originalIngredient)
                    
                    return ingredientsBeingAddedArray.splice(index, 1)
                } 
            })
            return ingredientsBeingAddedArray
        })
        
        originalMealObj.map((originalIngredient)=>{
            ingredientsBeingsDeletedArray.push(originalIngredient)
            
            mealObj.map((ingredient)=>{
               
                
                if(ingredient.id===originalIngredient.id){
                    const index = ingredientsBeingsDeletedArray.indexOf(originalIngredient)
                    console.log('equal')
                    return ingredientsBeingsDeletedArray.splice(index, 1)
                    
                }
            })
            return ingredientsBeingsDeletedArray
        })

        mealObj.map((updatedIngredient)=>{
            originalMealObj.map((originalIngredient)=>{
                if(updatedIngredient.id===originalIngredient.id&&updatedIngredient.servings!==originalIngredient.servings){
                    return updateServingsarray.push(updatedIngredient)
                }
            })
            return updateServingsarray
        })

        console.log('Ingredients being added: ', ingredientsBeingAddedArray)
        console.log('Ingredients being deleted: ', ingredientsBeingsDeletedArray)
        console.log('Servings being updated: ', updateServingsarray)
        
        ingredientsBeingAddedArray.map((ingredient)=>{
            fetch('http://localhost:4000/meal_ingredients', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({
                    ingredient_id: ingredient.id,
                    meal_id: meal.id,
                    servings: ingredient.servings
                })
            })
            .then(res=> res.json())
            .then(data=> console.log(data))
        })

        ingredientsBeingsDeletedArray.map((ingredient)=>{
            fetch(`http://localhost:4000/meal_ingredients/${ingredient.mealIngredientId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type' : 'application/json'
                }
            })
            console.log(ingredient)
            
        })

        updateServingsarray.map((ingredient)=>{
            fetch(`http://localhost:4000/meal_ingredients/${ingredient.mealIngredientId}`, {
                method: 'PATCH',
                headers: {
                    'Content-type' : 'application/json'
                },
                body: JSON.stringify({
                    servings: ingredient.servings
                })
            })
            .then(res=> res.json())
            .then(data=> console.log(data))
        })
        history.push(`/meal/${meal.id}`)
        window.location.reload(false)
            }
            else{
                res.json()
                .then(res=> setErrors(res.errors))
            }
            
            })
        
    }

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
        <Container
        style={{
            textAlign:'center' 
        }}
        >
                <br/>
                <br/>
                <h3 type='search ingredient'>Search Ingredient: </h3>
                <TextField color='secondary' variant='standard' type='search ingredient' value={searchFilter} onChange={(e)=> setSearchFilter(e.target.value)}></TextField>
                <Select color='secondary'  label="Pick a macro to search by" onChange={(e)=>setFilterOption(e.target.value)}name="Macro Search Filter" id='macrosearchfilter' >
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
        <br />

        <Box>
            <Container>
                <Paper className='update-meal-main-paper' elevation={15}>
                    <Box p={4}>






        <Box>
            <Container
            style={{
                textAlign:'center' 
            }}
            >
                <Paper elevation={10}>
        <br />
        <h1> Update {meal.name}</h1>
        <ErrorsCard errors={errors}/>
        <br />
        <form onSubmit={handleSubmit}>
            <h3 name='mealname'>New Meal Name</h3>
            <br />
            <TextField value={name} onChange={(e)=> setName(e.target.value)} name='mealname' variant="standard"></TextField>
            <br />
            <br />
            <h3 name='mealdescription'>New Meal Description</h3>
            <TextField value={description} onChange={(e)=> setDescription(e.target.value)} name='mealdescription' variant="standard"></TextField>
            <br />
             <br />
            <h3 name='mealimage'>Image Link For Your New Meal</h3>
            <br />
            <img src={image} height='300' width='300'></img>
            <br />
            <br />
            <TextField value={image} onChange={(e)=> setImage(e.target.value)} variant="filled" name='mealimage'></TextField>
            <br />
            <br />
            <Button color='secondary' type='submit' variant="contained">Update {meal.name}</Button>
        </form>
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

export default UpdateMeal