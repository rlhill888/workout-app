import React from "react";
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';


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
        <Button variant='contained' onClick={handleClick} >Log Out</Button>
    )

    
}

export default LogOutButton