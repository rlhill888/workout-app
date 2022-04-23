import React, {useState} from "react";

import { useHistory } from "react-router-dom";

function ChangeStats({user}){
    const [age, setAge]= useState(user.age)
    const [weight, setWeight]= useState(user.weight)
    const [height, setHeight]= useState(user.height)
    const [profilePic, setProfilePic]= useState(user.profile_pic) 
    const [goalType, setGoalType]= useState(user.goal_type)
    const [privacySetting, setPrivacySetting]= useState(user.public_user)

    const history= useHistory()

    function handleSubmit(e){
        e.preventDefault()
        fetch(`http://localhost:4000/users/${user.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                age: age,
                height: height,
                weight: weight,
                profile_pic: profilePic,
                public_user: privacySetting
            })
        })
        .then(res=> res.json())
        .then(res=> console.log(res))
    }

    return(
        <div>
         <button onClick={history.goBack}>Back</button>
            <h1>{user.user_name}</h1>
            <br />
            <form onSubmit={handleSubmit}>
                <label name='age'>Age: </label>
                <input name='age' value={age} onChange={(e)=> setAge(e.target.value)}></input>
                <br />
                <br />
                <label name='weight'>Weight: </label>
                <input name='weight' value={weight} onChange={(e)=> setWeight(e.target.value)}></input>
                <br />
                <br />
                <label>Account Privacy: </label>
                <select onChange={(e)=> setPrivacySetting(e.target.value)} value={privacySetting}>
                <option value={true}>Public</option>
                <option value={false}>Private</option>
                </select>
                <br />
                <br />
                <label name='profilepic'>Profile Pic Url:</label>
                <input name='profilepic' value={profilePic} onChange={(e)=> setProfilePic(e.target.value)}></input>
                <br />
                <br />
                <img src={profilePic}height='250' width='250'></img>
                <br />
                <br />
                <input type='submit' value='Update Profile'></input>
                </form>
        </div>
    )
}


export default ChangeStats