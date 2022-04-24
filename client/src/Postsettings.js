import React, {useState} from "react";

function PostSettings({post}){

    const [showSettings, setShowSettings]= useState(false)

    let settings

    if(showSettings===false){
        settings= <button onClick={()=> setShowSettings(true)}>Settings</button>
    }

    if(showSettings===true){
        settings= <> 
        <button onClick={()=> setShowSettings(false)}>Close Settings</button>
        <button onClick={()=>{
            fetch(`http://localhost:4000/posts/${post.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-type' : 'applicaton/json'
                }
            })
        }}>Delete</button>
        </>
    }


    return(
        <div>
            {settings}
        </div>
    )
}

export default PostSettings