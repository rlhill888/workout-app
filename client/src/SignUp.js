import React, {useState} from "react";
import {Link} from  "react-router-dom";
import { useHistory } from "react-router-dom";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import ErrorsCard from "./ErrorsCard";
import './signup.css'


function SignUp({setUser, setTempUser }){

    const [formPage, setformPage]= useState(0)
    const [email, setEmail]= useState('')
    const [firstName, setFirstName]= useState('')
    const [lastName, setLastName]= useState('')
    const [userName, setUserName]= useState('')
    const [password1, setPassword1]= useState('')
    const [password2, setPassword2]= useState('')
    const [age, setAge]= useState('')
    const [weight, setWeight]= useState('')
    const [heightFeet, setHeightFeet]= useState('')
    const [heightInches, setHeightInches]= useState('')
    const [activityLevel, setActivityLevel]= useState('')
    const [goal, setGoal]= useState('')
    const [errorMessage, setErrorMessage]= useState([])

    const signUpDiv = document.querySelector('#mainSignUpDiv')

    let formdata
    let errorMessages
    let stepper

    const history = useHistory();

    if(window.innerWidth<425){
        stepper =<></>
    }
    if(window.innerWidth>=567){
        stepper=<>

    <Stepper color='secondary' activeStep={formPage}>
            <Step>
                <StepLabel color='secondary'>Basic Account information</StepLabel>
            </Step>
            <Step>
                <StepLabel>Workout 4 Me Calculation Disclosure</StepLabel>
            </Step>
            <Step>
                <StepLabel>Personal Stat information</StepLabel>
            </Step>
        </Stepper>
        
        </>
    }
  
    function handleSubmit(e){
        e.preventDefault()

        const height = (parseInt(heightFeet)*12) +parseInt(heightInches)
       

        if(password1 !== password2){
             return setErrorMessage(['passwords do not match'])
        }
     
       
        fetch('users', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                user_name: userName,
                email: email.toLowerCase(),
                goal_type: goal,
                age: age,
                weight: weight,
                height: height,
                initial_form_activity_level: activityLevel,
                password: password1
            })
        })
        // .then(res => res.json())
        // .then(data => console.log(data))
        .then(res=>{
            if(res.ok){
                res.json().then((res)=> {

                    history.push('/welcome')
                })
            }
            else{
                
                res.json().then((res)=> {
                    let errorsArray = []
                    res.errors.map((error)=>{
                        errorsArray.push(error)
                    })
                     setErrorMessage(errorsArray)
                })
                

            }
        })
    }
  
    console.log(errorMessage)
    if(errorMessage.length===0){
        errorMessages= <> </>

    }
    if(errorMessage.length>0){
        errorMessages= <div>
            <h2> Error </h2>
            <ul>{errorMessage.map((e)=> <li key={`${e} error message`}>{e}</li>)}</ul>
        </div>
    }

    if (formPage=== 0) {
        formdata =  <div>
        <h1
        style={{
            textAlign: 'center'
        }}
        >Create a new account</h1>
        <br />
        <div>

        <h3  name="Email">Plese select an email to create your account</h3>
        <TextField color='secondary' value={email} variant='standard' onChange={(e)=> setEmail(e.target.value)} name="Email"></TextField>
        <br />
        <br />
        <h3 name="user name">Create a user name</h3>
        
        <TextField color='secondary' variant='standard' value={userName} onChange={(e)=> setUserName(e.target.value)} name="user name"></TextField>
        

        </div>


        <br />
        <br />
        

        <div> <h3 name= "first name">First Name </h3>
       
        <TextField color='secondary' variant='standard' value={firstName} onChange={(e)=> setFirstName(e.target.value)} name= "first name"></TextField>
        <br />
        <h3 name= "last name">Last Name </h3>
        <TextField color='secondary' variant='standard' value={lastName} onChange={(e)=> setLastName(e.target.value)} name= "last name"></TextField>
        </div>
        
        <br />
        <br />

        <div>
        <h3 name="Password">Create a password</h3>
        
        <TextField color='secondary' variant='standard' value={password1} onChange={(e)=> setPassword1(e.target.value)} type="password" name="Password"></TextField>
        <br />
        <h3 name="Confirm Password">Confirm Password</h3>
        <TextField color='secondary' variant='standard' value={password2} onChange={(e)=> setPassword2(e.target.value)} type="password" name="Confirm Password"></TextField>
        </div>

        <br/>
        <br />
        <Button color='secondary' onClick={()=>{
           
               window.scrollTo(0,0) 
            
            setformPage(1)
        }
    
    }>Next</Button>
        </div>
    }

    if(formPage===1){
        formdata = <> 
        <Button color='secondary' onClick={()=> setformPage(0)}><ArrowBackIosIcon /></Button>
        <h1
        className="workOut4DisclaimerMeFontSize2"
        >Workout 4 me uses your information to calculate a custom work out and meal plan catered towards you</h1>
        <br />
        <br />
        <h3
         className="workOut4DisclaimerMeFontSize2"
        >Workout 4 me uses data such as your age, weight, and height to caculate stats that are needed in order to make this custom plan.</h3>
        <h3
        className="workOut4DisclaimerMeFontSize2"
        >These stats include:</h3>
        <br />
        <br />
        <h3>Your BMI</h3>
        <p>Body mass index is a value derived from the mass and height of a person. The BMI is defined as the body mass divided by the square of the body height, and is expressed in units of kg/m², resulting from mass in kilograms and height in metres.</p>
        <br />
        <br />
        <h3>And your BMR</h3>
        <p>Basal metabolic rate is the rate of energy expenditure per unit time by endothermic animals at rest. It is reported in energy units per unit time ranging from watt to ml O₂/min or joule per hour per kg body mass J/. Proper measurement requires a strict set of criteria to be met.</p>
        <br/>
        <br />
        <Button  color='secondary' onClick={()=>{ 
            
            window.scrollTo(0,0)
            setformPage(2)}}>
                
                Continue Creating Account</Button>
        </>

    }

    if(formPage=== 2) {
        formdata = <> 
         <div >
         <Button color='secondary' onClick={()=> setformPage(1)}><ArrowBackIosIcon /></Button>
         <br />
            <h1>Stats</h1>
            <br />
            <h3 name= "Age" > How old are you? </h3>
            
            <TextField color='secondary' variant='standard' name="Age" type="number" placeholder="Age in years" value={age} onChange={(e)=> setAge(e.target.value)}/>
            <br/>
            
            <h3 name= "Weight Question" > How much do you weigh? </h3>
            
            <TextField color='secondary' variant='standard' value={weight} onChange={(e)=> setWeight(e.target.value)} name = "Weight Question" type="number" placeholder="Weight in pounds" className="inputbox"/>
            <br />
            
            <h3 name= "Height Question" > What is your height? </h3>
            
            <TextField color='secondary' variant='standard' name= "Height Question feet" type="number" value={heightFeet} onChange={(e)=> setHeightFeet(e.target.value)} placeholder="5" min="0" className="inputbox2"/> ft {'                 '}
            <TextField color='secondary' variant='standard' name= "Height Question inches" type="number" value={heightInches} onChange={(e)=> setHeightInches(e.target.value)} placeholder="6" min ="0" max="11" className="inputbox2"/> in
            <br />
            <br />
            <h3 name= "Activity Level Question" > What is your activity level? </h3>
            
            <input  name= "Activity Level Question" type="radio" onChange={(e)=> setActivityLevel(e.target.value)} value="Little or no exercise" className= "radio" /> Little or no exercise
            <br />
            <input  name= "Activity Level Question" type="radio" onChange={(e)=> setActivityLevel(e.target.value)} value="Light exercise a few times a week" className= "radio" /> Light exercise a few times a week
            <br />
            <input  name= "Activity Level Question" type="radio" onChange={(e)=> setActivityLevel(e.target.value)} value="Moderate exercise 3-5 times a week" className= "radio" /> Moderate exercise 3-5 times a week
            <br />
            <input  name= "Activity Level Question"  onChange={(e)=> setActivityLevel(e.target.value)} type="radio" value="Heavy exercise 6-7 times per week" className= "radio" /> Heavy exercise 6-7 times per week
            <br />
            <br/>
            <h3 name ="goals" > What is your main goal for working out? </h3>
            <input  name ="goals"  onChange={(e)=> setGoal(e.target.value)} type="radio" value= "To Gain Overall Weight" className="radio" /> To gain overall weight
            <br/>
            <input  name ="goals"  onChange={(e)=> setGoal(e.target.value)} type="radio" value= "To Loose Overall Weight" className="radio" /> To lose overall weight
            <br />
            <input  name ="goals"  onChange={(e)=> setGoal(e.target.value)} type="radio" value="To gain muscle mass" className="radio" /> To gain muscle mass
            <br/>

            <input  name ="goals"  onChange={(e)=> setGoal(e.target.value)} type="radio" value="To Tone muscles and get muscle definition" className="radio" /> To tone muscles and get muscle definition 
            <h2>Continue to Workout 4 Me!</h2>
            <br/>
            </div>
            <div >
            <Button color='secondary'  name= "create account form" type="submit" variant='contained'>Submit</Button>
            </div>
        </>

    }




    return (

        <div 
        className='Signup'
        >
        <Box m={1}>

            <Container>
                <Paper className='mainCard' elevation={15}>
                    <Box 
                    className='background'
                    p={2}>
                        <Paper elevation={15}>
                            <Box 
                            className="mainSignUpDiv"
                            id= 'mainSignUpDiv'
                            p={4}> 
        <Button 
        className="backToLoginButton"
        color='secondary' variant='contained' onClick={()=> history.push('/login')}>Back To Login</Button>
        <br />
        <br />
        <ErrorsCard errors={errorMessage}/>
        <br />
        
        <form onSubmit={handleSubmit} name= "create account form">
            
            {formdata}
        </form>
        <br />
        <br />


        {stepper}
        </Box>
        </Paper>
        </Box>
        </Paper>
        </Container>
        </Box>
        </div>
    )
}

export default SignUp