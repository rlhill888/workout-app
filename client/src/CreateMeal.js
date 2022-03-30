import React, {useState, useEffect} from "react";


function CreateMeal({user, ingredients}){
    const [filterOption, setFilterOption]= useState('')
    const [searchFilter, setSearchFilter]= useState('')
    const [name, setName]= useState('')
    const [description, setDescription]= useState('')
    const [image, setImage]= useState('')
    const [mealObj, setMealObj]= useState([])
    const [mealCheckedObj, setMealCheckedObj]= useState([])

   const filteredIngredientsArray= ingredients.filter((i)=> i.macro_type.includes(filterOption) && i.name.includes(searchFilter))



   

    useEffect(()=>{
        ingredients.map((i)=> setMealCheckedObj((p)=> [...p, { [`${i.name} checked`] : false}]))
        
    }, [])
   
    console.log(mealObj)
    const macrosearchfilter = document.querySelector('#macrosearchfilter')

    

    function checkBoxes(i){
        let value
        mealCheckedObj.map((obj)=>{
            if(Object.keys(obj)[0]===`${i.name} checked`){
                return value = ((Object.values(obj)[0]))
            }
        })
        return value
    }

    
    console.log(mealObj)
  
    return(
        <> 
        <h1> Create Meal</h1>
        <br />
        <form>
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
        </form>
        <br />
        <br />
        <label type='search ingredient'>Search Ingredient: </label>
        <select onChange={(e)=>setFilterOption(e.target.value)}name="Macro Search Filter" id='macrosearchfilter' >
            <option value="">--- Pick a macro to search by ---</option>
            <option value="protein">Protein</option>
            <option value="carb">Carb</option>
            <option value="fat">Fat</option>
        </select>
        <input type='search ingredient' value={searchFilter} onChange={(e)=> setSearchFilter(e.target.value)}></input>
        {filteredIngredientsArray.map((i)=>{
            
        function handleChecked(e){
            
        mealCheckedObj.map((o)=>{
            let index = mealCheckedObj.indexOf(o)
            
            if(Object.keys(o)[0]===`${i.name} checked`){
                let copyState= [...mealCheckedObj]
                copyState[index]= {...copyState[index], [`${i.name} checked`]:  !Object.values(o)[0]}
                setMealCheckedObj(copyState)
            }
            if(e.target.checked){
                setMealObj((p)=> [...p, i])
            }
            if(!e.target.checked){
                mealObj.map((o)=>{
                    
                    
                    if(o.ingredient.id=== i.id){
                        const index= mealObj.indexOf(o)
                        mealObj.splice(index, 1)
                        
                        
                    }
                })
            }
            
         })
    }
            return(
                <> 
                <div>
                    <br />
                    <h1>{i.name} 
                    <input name={`${i.name} checked`}
                    type='checkbox' 
                    key={`workoutcheckbox${i.id}`} 
                    id={`workoutcheckbox${i.name}`} 
                    value={i}
                    checked={checkBoxes(i)}
                    onChange={handleChecked}
                    ></input>
                    </h1> 
                    
                    <h3>Main Macro: {i.macro_type}</h3>
                    <br />
                    <h3>Serving Size:</h3>
                    <h3>{i.serving_size} {i.serving_measurement_type}</h3>
                    <br />
                    <h2>Macros:</h2>
                    <ul>
                        <li>Protein: {i.protein} g</li>
                        <li>Carbs: {i.carb} g</li>
                        <li>Fats: {i.fat} g</li>
                    </ul>
                    <br />
                </div>
                </>
            )
        })}
        </>
    )
}

export default CreateMeal