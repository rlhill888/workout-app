import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import './welcomelogin.css'
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ErrorsCard from "./ErrorsCard";


function WelcomeLogIn({setUser}){
    const history = useHistory();

    const [password, setPassword]= useState('')
    const [userName, setUserName]= useState('')

    const [showLogIn, setShowLogIn]= useState(false)
    const [errors, setErrors]= useState([])

    let logIn

    if(showLogIn===true){
        logIn=  <form>

        <h3>Enter Your New Account Information To Log In</h3>
        <br />
        <br />
        <ErrorsCard errors={errors}/>

        <h3 name='Email'>Email</h3>
        <TextField color='secondary' variant='standard' name='User Name' value={userName} onChange={(e)=> setUserName(e.target.value)}></TextField>
        <br></br>
        <br></br>
        <h3 name='Password'> Password</h3>
        <TextField type='password' color='secondary' variant='standard' name= 'Password' value={password} onChange={(e)=> setPassword(e.target.value)}></TextField>
        <br></br>
        <br></br>
        <Button color='secondary' variant='contained'  onClick={handleSubmit} value='log in'>Submit</Button>
        
         </form>
    }
    if(showLogIn===false){
        logIn=
        <Button color='secondary' onClick={()=>setShowLogIn(true) } >Get Started</Button>
      
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
        else{ res.json()
        .then(res=> {
            let copyArray = []
            res.errors.map(e => copyArray.push(e))
            setErrors(copyArray)
        })
        }
    })
}
   
    return(
        <div className='main-welcome-background'> 

            <Box>
                <Container>
                    <Paper>
                        <Box p={4}>

        <h1>Congrats On Your Start To Your New Work Out Journey</h1>
        <br />
        {logIn}

        </Box>
        </Paper>

        </Container>
        </Box>

       </div>
    )

}

export default WelcomeLogIn