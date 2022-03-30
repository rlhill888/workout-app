import React, {useState} from "react";
import { useHistory } from "react-router-dom";



function RoutineDisplayCardWorkoutPlan({r, setRoutineBeingShown}){
    let settings
    const history = useHistory();

    const [showSettings, setShowSettings]= useState(false)
    if(showSettings===false){
        settings= <button onClick={()=>{
            setShowSettings((v)=> !v)
        }}>Show Settings</button>
    }
    if(showSettings===true){
        let deletebutton

        settings= <> 
            <button onClick={()=>{
                setRoutineBeingShown(r)
                history.push(`/updateroutine/${r.id}`)
            }}> Change Routine</button>
            <button onClick={()=>{
                console.log(r.id)
                fetch(`routines/${r.id}`,{
                    method: 'DELETE',
                    headers: {
                        'Content-Type' : 'application/json'
                    }
                })
            }}>Delete Routine</button>
        
        </>
    }
    return(
        <> 
         <div >  
            <h2>{r.name}</h2>
            <img  width="200" height="200" src={r.image}></img>
            {settings}
        </div>
        </>
    )

}

export default RoutineDisplayCardWorkoutPlan