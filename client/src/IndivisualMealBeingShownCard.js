import React, {useState, useEffect} from "react";
import IngredientCard from "./IngredientCard";
import { useHistory, useParams } from "react-router-dom";
import NavBar from "./NavBar";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { CardActionArea, CardMedia, CardContent, Card } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './indivisualmealbeingshown.css';
import Modal from '@mui/material/Modal';


function IndivisualMealBeingShownCard({user}){
    const history = useHistory()
    const params= useParams()
    const [meal, setMeal]= useState([])
    const [openDeleteTab, setOpenDeleteTab]= useState(false)
    const handleOpen = () => setOpenDeleteTab(true);
    const handleClose = () => setOpenDeleteTab(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
    let ingredientsArray = []
    let carbs
    let protein 
    let fat

    useEffect(()=>{
        fetch(`/meals/${params.id}`)
        .then(res=> res.json())
        .then(res=> {
            console.log(res)
            setMeal(res)
            return makeIngredientsArray(res)

        })
    }, [])
    

    console.log(meal)
    makeIngredientsArray(meal)

    function makeIngredientsArray(meal){
        if(meal.meal_ingredients===undefined){
            return console.log('undefined')
        }
        let carbCalculation = 0
        let proteinCalculation = 0
        let fatCalculation = 0

        let ingredients= []
        meal.meal_ingredients.map((mealIngredient)=>{
            meal.ingredients.map((ingredient)=>{
                if(ingredient.id === mealIngredient.ingredient_id){
                    ingredients.push({...ingredient, servings: mealIngredient.servings})
                    return ingredients 
                }
            })
        })
        ingredients.map((ingredient)=>{
            let carbs 
            let protein
            let fats
            carbs = ingredient.carb * ingredient.servings
            protein = ingredient.protein * ingredient.servings
            fats = ingredient.fat * ingredient.servings

            carbCalculation = carbCalculation + carbs
            proteinCalculation = proteinCalculation + protein
            fatCalculation = fatCalculation + fats
            
            return(carbCalculation, proteinCalculation, fatCalculation)
        })

        carbs = carbCalculation
        protein= proteinCalculation
        fat = fatCalculation

        console.log(ingredients)

        return(carbs, protein, fat, ingredientsArray = ingredients)
    }

    return(
        <div className='meal-background'> 
        <NavBar user={user}/>
        <br />
        <br />
        <br />
        <br />
        <br />


        <Box>

            <Container>
            <Paper className='main-indivisual-meal-paper' elevation={15}>
                <Box p={4}>


        <Container  style={{
        textAlign:'center' 
    }}> 
            <Paper elevation={3}>
                <Container>
                    <Paper>
                         <h1>{meal.name}</h1>
                    </Paper>  
                </Container>
        
        <CardMedia component="img" image={meal.image} height={'500px'} width={'500px'}></CardMedia>
        <br />
        <br />

        <Paper >
                <h3>{meal.description}</h3>
            </Paper>
         <ButtonGroup color='secondary' variant='contained' aria-label="outlined primary button group">
            <Button  onClick={()=> history.push(`/updatemeal/${meal.id}`)}>Update Meal</Button>
            <Button onClick={()=>{
            setOpenDeleteTab(true)
        }}>
            <DeleteIcon />
            Delete Meal</Button>
        </ButtonGroup>
        <br />
        <br />
        
            </Paper>
        </Container>
        <Container style={{
        textAlign:'center'
    }}>
            <Paper elevation={3}>
        <h2>Meal Macros:</h2>
        <h2>Carbs: {carbs} grams</h2>
        <h2>Protein: {protein} grams</h2>
        <h2>Fat: {fat} grams</h2>
            </Paper>
        </Container>
       
        <br />
        <br />
        <Container>
            <Paper elevation={3}>
                <Paper
                style={{
                    textAlign:'center'
                }}
                >
                    <h2>Ingredients: </h2> 
                </Paper>
                <br />
                <Grid container>
        {ingredientsArray.map((ingredient)=>{
            return( 
            <Grid item> 
            <br />
             <IngredientCard ingredient={ingredient}/>
             <br />
            </Grid> )
        })}
            </Grid>
                </Paper>
            
        
        </Container>

        </Box>

        </Paper>
        </Container>

        </Box>
        

        <Modal
        open={openDeleteTab}
        onClose={handleClose}
        >
            <Box
            sx={style}
            >
                <h3>
                    Are You Sure You Want To Delete This Meal?
                </h3>
                <ButtonGroup>
                <Button color='secondary' variant='contained'
                onClick={()=>{
                    fetch(`/meals/${meal.id}`,{
                        method: 'DELETE',
                        headers: {
                            'Content-Type' : 'application/json'
                        }
                    })
                    history.push('/mealplan')
                    window.location.reload(false)
                }}
                
                >Yes</Button>
                <Button onClick={()=> handleClose()} variant='contained'>Cancel</Button>
                </ButtonGroup>

            </Box>
        </Modal>

        </div>
    )


}

export default IndivisualMealBeingShownCard
