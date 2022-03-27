import React, {useState} from "react";
import { useHistory } from "react-router-dom";


function WelcomeLogIn({setUser}){
    const history = useHistory();

    const [password, setPassword]= useState('')
    const [userName, setUserName]= useState('')

    const [showLogIn, setShowLogIn]= useState(false)

    let logIn

    if(showLogIn===true){
        logIn=  <form>

        <h3>Enter Your New Account Information To Log In</h3>

        <label name='User Name'>User Name</label>
        <br></br>
        <input name='User Name' value={userName} onChange={(e)=> setUserName(e.target.value)}></input>
        <br></br>
        <br></br>
        <label name='Password'> Password</label>
        <br></br>
        <input name= 'Password' value={password} onChange={(e)=> setPassword(e.target.value)}></input>
        <br></br>
        <br></br>
        <input type='submit' onClick={handleSubmit} value='log in'></input>
        
         </form>
    }
    if(showLogIn===false){
        logIn=
        <button onClick={()=>setShowLogIn(true) } >Get Started</button>
      
    }

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
                setUser(res)
                history.push('/')
            })
        }
    })
}
   
    return(
        <> 

        <h1>Congrats On Your Start To Your New Work Out Journey</h1>
        <br />
        {logIn}


        {/* <form>

       <label name='User Name'>User Name</label>
       <br></br>
       <input name='User Name' value={userName} onChange={(e)=> setUserName(e.target.value)}></input>
       <br></br>
       <br></br>
       <label name='Password'> Password</label>
       <br></br>
       <input name= 'Password' value={password} onChange={(e)=> setPassword(e.target.value)}></input>
       <br></br>
       <br></br>
       <input type='submit' onClick={handleSubmit} value='log in'></input>
       
        </form> */}
       </>
    )

}

export default WelcomeLogIn