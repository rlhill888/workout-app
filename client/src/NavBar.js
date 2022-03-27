import React from 'react'
import {Link} from  "react-router-dom";


function NavBar(){
    return (
    <> 
    <div>
    <Link to='/mealplan'> Meal plan </Link>
    <br />
    <br />
    <Link to='/workoutplan'> Work Out plan </Link>
    <br />
    <br />
    <Link to='/settings'> Settings </Link>
    <br />
    <br />
    <Link to='/'> Home </Link>
    </div>
    
    </>
    )
}


export default NavBar