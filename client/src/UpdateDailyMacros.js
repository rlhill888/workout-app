import React, {useState} from "react";


function UpdateDailyMacros({user}){
    const [calories, setCalories]= useState(user.calories)
    const [carbs, setCarbs]= useState(user.carb_macros)
    const [protein, setProtein]= useState(user.protein_macros)
    const [fats, setFats]= useState(user.fat_macros)
    console.log(calories)
    return(
        <div>
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
                <label name='calories'>Calories: </label>
                <input onChange={(e)=> setCalories(e.target.value)}value={calories} name='calories'type='number'></input>
                <br />
                <br />
                <label name='fats'>Grams of fat: </label>
                <input onChange={(e)=> setFats(e.target.value)} value={fats} name='fats' type='number'></input>
                <br />
                <br />
                <label name='proteins'>Grams of protein: </label>
                <input onChange={(e)=> setProtein(e.target.value)} value={protein} name='proteins' type='number'></input>
                <br />
                <br />
                <label name='carbs'>Grams of carbs: </label>
                <input onChange={(e)=> setCarbs(e.target.value)} value={carbs} name='carbs' type='number'></input>
                <br />
                <br />
                <input type='submit' value='Update Your Daily Macro Goals'></input>
            </form>
        </div>
    )
}

export default UpdateDailyMacros