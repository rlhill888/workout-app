import React, {useState, useEffect} from "react";
import MealSelectorCard from "./MealSelectorCard";
import { useHistory } from "react-router-dom";
import ErrorsCard from "./ErrorsCard";


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

    const history = useHistory()

    useEffect(()=>{
        ingredients.map((i)=> setMealCheckedObj((p)=> [...p, { [`${i.name} checked`] : false}]))
        
    }, [])

    function handleSubmit(e){
        e.preventDefault()
        let mealId 

        const meal={
            name: name, 
            description: description,
            image: image,
        }

        fetch('meals', {
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
            fetch('user_meals', {
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
        <h1> Create Meal</h1>
        <ErrorsCard errors={errors}/>
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
            <input type='submit' value='Create Meal'></input>
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

export default CreateMeal