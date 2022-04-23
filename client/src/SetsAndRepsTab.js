import React from "react";

function SetsAndRepsTab({w, worokoutInfoObject, index}){

    return(
        <div key={`Stes and reps tab workout: ${w.id}`}> 
                            <br />
                            <h3>{`How many sets of ${w.name} would you like to add to this workout?`} </h3>
                            <input name={`sets for ${w.name}`} 
                            value={worokoutInfoObject[index] === undefined ? '' :worokoutInfoObject[index].sets} 
                            onChange={(e)=>{
                                    worokoutInfoObject[index] = {...worokoutInfoObject[index], sets: e.target.value}
                            }}
                            >
                                
                            </input>
                            <br />
                            <br />
                            <h3>{`How many reps of ${w.name} would you like to add to this workout?`} </h3>
                            <input 
                            onChange={(e)=>{
                                worokoutInfoObject[index] = {...worokoutInfoObject[index], reps: e.target.value}
                             }}
                             value={worokoutInfoObject[index] === undefined ? '' :worokoutInfoObject[index].reps} 
                            
                            name= {`reps for ${w.name}`}></input>
                            <br />
        </div>
    )
}

export default SetsAndRepsTab