import React from "react";
import NavBar from "./NavBar";
import {  useHistory } from "react-router-dom";
import {Map, GoogleApiWrapper} from 'google-maps-react'



function Settings({user}){
    console.log(user)
    const history= useHistory()
    const height = user.height/12
    return(
        <> 
        <h1>Profile</h1>
        <NavBar />
        <img src={user.profile_pic} height='200' width='200'></img>
        <br />
        <h2>{user.user_name}</h2>
        <br />
        <div>
            <h2>Stats</h2>
            <br />
            <h3>{`First Name: ${user.first_name}`}</h3>
            <h3>{`Last Name: ${user.last_name}`}</h3>
            <br />
            <h3>{`BMI: ${user.bmi}`}</h3>
            <h3>{`BMR: ${user.bmr}`}</h3>
            <h3>{`age: ${user.age}`}</h3>
            <h3>{`weight: ${user.weight}`}</h3>
            <h3>{`height: ${height /12} ft`}</h3>
        </div>
        <div >
        </div>
        <button onClick={()=> history.push(`/changestats/${user.id}`)}>Change Stats</button>
        <button onClick={()=> history.push('/map')}>Look At Gyms inside Philadelphia</button>
        </>
    )
}

export default Settings