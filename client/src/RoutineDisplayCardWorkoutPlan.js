import React, {useState} from "react";
import { useHistory } from "react-router-dom";



function RoutineDisplayCardWorkoutPlan({r, setRoutineBeingShown, user}){
    let settings
    const history = useHistory();
    console.log(r)

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
            <button onClick={()=>{
                const body= {
                    user_id: user.id,
                    title: r.name,
                    image: r.image,
                    description: r.description,
                    meal_post: false,
                    routine_post: true,
                    share_routine_id: r.id
                }
                
                 fetch('http://localhost:4000/posts',{
                    method: 'POST',
                    headers: {
                        'Content-Type' : 'application/json'
                    },
                    body: JSON.stringify({
                        user_id: user.id,
                        title: r.name,
                        image: r.image,
                        description: r.description,
                        meal_post: false,
                        routine_post: true,
                        share_routine_id: r.id
                    })
                })
                .then(res=> res.json())
                .then(res=> console.log(res))
            
            }}>Share Routine</button>
            <button onClick={()=> setShowSettings((p)=> !p)}>Close Settings</button>
        
        </>
    }
    if(user.id !== r.created_by_id){
        settings= <> </>
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