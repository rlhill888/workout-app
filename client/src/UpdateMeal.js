import React, {useState, useEffect} from "react";
import MealSelectorCard from "./MealSelectorCard";
import { useParams, useHistory } from "react-router-dom";


function UpdateMeal(){
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
        .then(res=> res.json())
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
        history.push('/mealplan')
    }

    let showMeals


    if(showMealPanel===false){
        showMeals = <button onClick={()=> setShowMealPanel(true)}> Show Meals</button>
    }

    if(showMealPanel===true){
        const filteredIngredientsArray= ingredients.filter((i)=> i.macro_type.includes(filterOption) && i.name.includes(searchFilter))
        showMeals = <div> 

        <button onClick={()=> setShowMealPanel(false)}>Hide Meals </button>
                <br/>
                <br/>
                <label type='search ingredient'>Search Ingredient: </label>
                <input type='search ingredient' value={searchFilter} onChange={(e)=> setSearchFilter(e.target.value)}></input>
                     <select onChange={(e)=>setFilterOption(e.target.value)}name="Macro Search Filter" id='macrosearchfilter' >
                        <option value="">--- Pick a macro to search by ---</option>
                        <option value="protein">Protein</option>
                        <option value="carb">Carb</option>
                        <option value="fat">Fat</option>
                    </select>
                <br/>
                <br />
                <br/>
                <br/>
        
        
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
        </div>
    }

  
    return(
        <> 
        <h1> Update {meal.name}</h1>
        <br />
        <form onSubmit={handleSubmit}>
            <label name='mealname'>New Meal Name</label>
            <br />
            <input value={name} onChange={(e)=> setName(e.target.value)} name='mealname'></input>
            <br />
            <br />
            <label name='mealdescription'>New Meal Description</label>
            <br />
            <input value={description} onChange={(e)=> setDescription(e.target.value)} name='mealdescription'></input>
            <br />
             <br />
            <label name='mealimage'>Image Link For Your New Meal</label>
            <br />
            <img src={image} height='300' width='300'></img>
            <br />
            <br />
            <input value={image} onChange={(e)=> setImage(e.target.value)} name='mealimage'></input>
            <br />
            <br />
            <input type='submit' value='Update Meal'></input>
        </form>
        <br />
        <br />
        {/* <label type='search ingredient'>Search Ingredient: </label>
        <select onChange={(e)=>setFilterOption(e.target.value)}name="Macro Search Filter" id='macrosearchfilter' >
            <option value="">--- Pick a macro to search by ---</option>
            <option value="protein">Protein</option>
            <option value="carb">Carb</option>
            <option value="fat">Fat</option>
        </select>
        <input type='search ingredient' value={searchFilter} onChange={(e)=> setSearchFilter(e.target.value)}></input>
        <br/>
        <br /> */}
        {showMeals}
        </>
    )
}

export default UpdateMeal