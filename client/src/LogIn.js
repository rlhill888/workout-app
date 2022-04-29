import React, {useState} from 'react';
import {Link} from  "react-router-dom";
import { useHistory } from "react-router-dom";

function LogIn({setUser}){

    const history = useHistory();

    const [password, setPassword]= useState('')
    const [userName, setUserName]= useState('')
    const [age, setAge]= useState(null)
    const [errors, setErrors]= useState([])

    function handleSubmit(e){
        e.preventDefault()

        const body ={
            email: userName,
            password: password

        }

        fetch('login', {
            method: 'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(body)
        })
        .then(res=>{
            if(res.ok){
                res.json().then((res)=> {
                    console.log(res)
                    setUser(res)
                    history.push('/')
                })
            }
            else{
                res.json()
                .then(data=> {
                    let copyArray= []
                    data.errors.map(e=> copyArray.push(e))
                    setErrors(copyArray)
                })
            }
        })
        // .then(res =>{
        //     setUser(res)
        //     console.log(res)
        // })
    }

    return(

        <> 
         <h1>WORK OUT 4 ME</h1>

         <h3>Log In</h3>
        

         <form>

        <label name='User Name'>User Name</label>
        <br></br>
        <input name='User Name' onChange={(e)=> setUserName(e.target.value)}></input>
        <br></br>
        <br></br>
        <label name='Password'> Password</label>
        <br></br>
        <input name= 'Password' type="password" onChange={(e)=> setPassword(e.target.value)}></input>
        <br></br>
        <br></br>
        <input type='submit' onClick={handleSubmit} value='log in'></input>
        
         </form>
         <br />
        {errors.map((error=>{
                    return <h3>{error}</h3>
                }))}
         <br/>
         <Link to="/signup" exact>  Sign Up</Link>

        

        
         

        </>
    )


}

export default LogIn;