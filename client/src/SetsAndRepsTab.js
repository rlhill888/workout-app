import React from "react";

function SetsAndRepsTab({w, worokoutInfoObject, setworokoutInfoObject}){
    const index= worokoutInfoObject.findIndex((element)=>{
        return(element.id=== w.id)
    })

    return(
        <div key={`Stes and reps tab workout: ${w.id}`}> 
                            <br />
                            <h3>{`How many sets of ${w.name} would you like to add to this workout?`} </h3>
                            <input name={`sets for ${w.name}`} 
                            value={worokoutInfoObject[index].sets === undefined ? '' :worokoutInfoObject[index].sets} 
                            onChange={(e)=>{
                                let copyWorkoutObj = [...worokoutInfoObject]
                                copyWorkoutObj[index]= {...copyWorkoutObj[index], sets: e.target.value}
                                setworokoutInfoObject(copyWorkoutObj)
                            }}
                            >
                                
                            </input>
                            <br />
                            <br />
                            <h3>{`How many reps of ${w.name} would you like to add to this workout?`} </h3>
                            <input 
                            onChange={(e)=>{
                                let copyWorkoutObj = [...worokoutInfoObject]
                                copyWorkoutObj[index]= {...copyWorkoutObj[index], reps: e.target.value}
                                setworokoutInfoObject(copyWorkoutObj)
                             }}
                             value={worokoutInfoObject[index].reps === undefined ? '' :worokoutInfoObject[index].reps} 
                            
                            name= {`reps for ${w.name}`}></input>
                            <br />
        </div>
    )
}

export default SetsAndRepsTab