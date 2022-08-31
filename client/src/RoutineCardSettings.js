import React, {useState} from "react";
import { useHistory, useParams } from "react-router-dom";

function RoutineCardSettings({routine, user}){
     let settings
    const history= useHistory()

    const [showSettings, setShowSettings]= useState(false)

    function deleteRoutine(id){
        console.log(id)
        fetch(`routines/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type' : 'application/json'
            }
        })
    }


    
    if(showSettings===false){
        settings= <button onClick={()=>{
            setShowSettings((v)=> !v)
        }}>Show Settings</button>
    }
    if(showSettings===true){
        let deletebutton

        settings= <> 
            <button onClick={()=>{
                history.push(`/updateroutine/${routine.id}`)
            }}> Change Routine</button>
            <button onClick={()=> deleteRoutine(routine.id)}>Delete Routine</button>
            <button onClick={()=>{
                const body= {
                    user_id: user.id,
                    title: routine.name,
                    image: routine.image,
                    description: routine.description,
                    meal_post: false,
                    routine_post: true,
                    share_routine_id: routine.id
                }
                
                 fetch('/posts',{
                    method: 'POST',
                    headers: {
                        'Content-Type' : 'application/json'
                    },
                    body: JSON.stringify({
                        user_id: user.id,
                        title: routine.name,
                        image: routine.image,
                        description: routine.description,
                        meal_post: false,
                        routine_post: true,
                        share_routine_id: routine.id
                    })
                })
                .then(res=> res.json())
                .then(res=> console.log(res))
            }}>Share Routine</button>
            <button onClick={()=> setShowSettings((p)=> !p)}>Close Settings</button>
        
        </>
    }
    if(user.id !== routine.created_by_id&&showSettings===false){
        settings= <> 
        <button onClick={()=> setShowSettings((previousState)=> true)}>Settings</button>
        </>
    }
    if(user.id !== routine.created_by_id&&showSettings===true){
        settings= <> 
        <button onClick={()=> setShowSettings((previousState)=> false)}>CloseSettings</button>
        <button onClick={()=>{
            const filteredArray = user.user_routines.filter((userRoutine)=>{
                return userRoutine.user_id === user.id && userRoutine.routine_id === routine.id
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

return(<>
    {settings}
</>)
}

export default RoutineCardSettings