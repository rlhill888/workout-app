import React from "react";
import { useHistory } from "react-router-dom";


function LogOutButton(){
    const history = useHistory();
    function handleClick(){
        fetch('logout', {
            method: 'DELETE',
            headers: {'Content-Type' : 'application/json'}
        })
        return history.push('/login')
    }

    return(
        <button onClick={handleClick} >Log Out</button>
    )

    
}

export default LogOutButton