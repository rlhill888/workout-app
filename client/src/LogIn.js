import React, {useState} from 'react';
import {Link} from  "react-router-dom";
import { useHistory } from "react-router-dom";
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import logo from './workout4melogo.png'
import "./login.css";


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

        <div
        className='Login'
        > 
        <Box 
        style={{
            textAlign:'center' 
        }}
        
        m={15}>
            <Container
            maxWidth='xs'
            >
                <Paper  
                className='paper-background'
                elevation={15}>
                    <Box 
                    
                    p={5}>
                    <img src={logo} alt="mainlogo" width="300" height="300" />

        <Paper 
        elevation={5}>
            <Box p={4}>
         <h2>Log In</h2>
        <br />

         <form>

        <h3 name='User Name'>User Name</h3>
        <TextField variant='outlined' name='User Name' onChange={(e)=> setUserName(e.target.value)}></TextField>
        <br></br>
        <br></br>
        <h3 name='Password'> Password</h3>
        <TextField variant='outlined' name= 'Password' type="password" onChange={(e)=> setPassword(e.target.value)}></TextField>
        <br></br>
        <br></br>
        <Button type='submit' onClick={handleSubmit} variant='contained'>Log In</Button>
        
         </form>
         <br />
        {errors.map((error=>{
                    return <h3>{error}</h3>
                }))}
         <br/>
         <h3>New User?</h3>
         <Button color='secondary' onClick={()=> history.push('/signup')}>Create An Account</Button>
         </Box>
         </Paper>
                        </Box>
                    </Paper>
                </Container>
        </Box>

        
         

        </div>
    )


}

export default LogIn;