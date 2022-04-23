import React, {useState} from "react";
import ServingsTab from "./ServingsTab";

function MealSelectorCard({i, mealCheckedObj, setMealCheckedObj, mealObj, setMealObj}){
    const [showServingsBoolean, setShowServingsBoolean]= useState(false)
    let showServings
    checkServingsAreBeingShown()
    function checkBoxes(i){
        let value
       
        mealCheckedObj.map((obj)=>{
            if(Object.keys(obj)[0]===`${i.name} checked`){
                return value = ((Object.values(obj)[0]))
            }
        })
        return value
    }
    function checkServingsAreBeingShown(){
        let showServingsTab

        mealCheckedObj.forEach((o)=>{
            if(Object.keys(o)[0]===`${i.name} checked`){
                return showServingsTab= Object.values(o)[0]
            }

        })

        if(showServingsTab=== false){
            return showServings= <> </>
        }

        if(showServingsTab=== true){
            return showServings= <ServingsTab mealObj={mealObj} i={i} setMealObj={setMealObj}/>
        }
    }

    return(
        <> 
         <div key={`ingredientdiv${i.id}`}>
                    <br />
                    <h2>{i.name} 
                    <input name={`${i.name} checked`}
                    type='checkbox' 
                    key={`mealcheckbox${i.id}`} 
                    id={`mealcheckbox${i.name}`} 
                    value={i.id}
                    checked={checkBoxes(i)}
                    onChange={(e)=> {
                        let index= mealCheckedObj.findIndex((element)=> Object.keys(element)[0]===`${i.name} checked`)
                        let copyState= [...mealCheckedObj]
                        copyState[index]= {...copyState[index], [`${i.name} checked`]:  !Object.values(copyState[index])[0]}
                        setMealCheckedObj(copyState)
                            if(e.target.checked){
                             
                                 console.log('checked')
                                
                                setMealObj((p)=> [...p, i])
                                setShowServingsBoolean(true)
                                
                            }
                            if(!e.target.checked){
                                setShowServingsBoolean(false)
                                mealObj.map((o)=>{
                                    
                                    if(o.id.toString()=== e.target.value){
                                        const index= mealObj.indexOf(o)
                                        mealObj.splice(index, 1)
                                    }
                                })
                            }

                    }}
                    name={i.name}
                    ></input>
                    </h2> 
                    
                    <h3>Main Macro: {i.macro_type}</h3>
                    <br />
                    <h3>Serving Size:</h3>
                    <h3>{i.serving_size} {i.serving_measurement_type}</h3>
                    <br />
                    {showServings}
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
}

export default MealSelectorCard