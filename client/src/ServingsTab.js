import React from "react";


function ServingsTab({i, mealObj, setMealObj}){
    const index= mealObj.findIndex((element)=>{
        return(element.id=== i.id)
    })
    

    return(

        <div> 
        <label>Servings:</label>
        <input onChange={(e)=>{
            let copyMealObj = [...mealObj]
            copyMealObj[index] = {...copyMealObj[index], servings: e.target.value}
            
            setMealObj(copyMealObj)

        }}type='number'
        value={mealObj[index].servings === undefined ? '' :mealObj[index].servings}></input>
        </div>
    )
}

export default ServingsTab