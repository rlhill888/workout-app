import React from "react";
import TextField from '@mui/material/TextField';


function ServingsTab({i, mealObj, setMealObj}){
    const index= mealObj.findIndex((element)=>{
        return(element.id=== i.id)
    })
    

    return(

        <div> 
        <h3>Servings of {i.name}:</h3>
        <TextField onChange={(e)=>{
            let copyMealObj = [...mealObj]
            copyMealObj[index] = {...copyMealObj[index], servings: e.target.value}
            
            setMealObj(copyMealObj)

        }}type='number'
        value={mealObj[index].servings === undefined ? '' :mealObj[index].servings}></TextField>
        </div>
    )
}

export default ServingsTab