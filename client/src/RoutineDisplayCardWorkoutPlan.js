import React, {useState} from "react";
import { useHistory } from "react-router-dom";



function RoutineDisplayCardWorkoutPlan({r, setRoutineBeingShown, user}){
    let settings
    const history = useHistory();
    console.log(r)
    console.log(user)

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
    if(user.id !== r.created_by_id&&showSettings===false){
        settings= <> 
        <button onClick={()=> setShowSettings((previousState)=> true)}>Settings</button>
        </>
    }
    if(user.id !== r.created_by_id&&showSettings===true){
        settings= <> 
        <button onClick={()=> setShowSettings((previousState)=> false)}>CloseSettings</button>
        <button onClick={()=>{
            const filteredArray = user.user_routines.filter((userRoutine)=>{
                return userRoutine.user_id === user.id && userRoutine.routine_id === r.id
            })
            const selectedUserRoutine= filteredArray[0]

            fetch(`/user_routines/${selectedUserRoutine.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type' : 'application/json'
                }
            })
        }}>Remove Routine</button>
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