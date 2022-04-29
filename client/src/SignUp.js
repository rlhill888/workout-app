import React, {useState} from "react";
import {Link} from  "react-router-dom";
import { useHistory } from "react-router-dom";


function SignUp({setUser }){

    const [formPage, setformPage]= useState(1)


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

    let formdata
    let errorMessages

    const history = useHistory();
  
    function handleSubmit(e){
        e.preventDefault()
        if(errorMessage.length>=1){
            setErrorMessage(errorMessage.length = 0)
        }

        const height = (parseInt(heightFeet)*12) +parseInt(heightInches)
       

        if(password1 !== password2){
            e.preventDefault()
             return setErrorMessage([...errorMessage, 'passwords do not match'])
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
                email: email,
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
                    setUser(res)
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

    if (formPage=== 1) {
        formdata =  <div>
        <h1>Create a new account</h1>
        <br />
        <div>

        <label  name="Email">Plese select an email to create your account</label>
        <br />
        <input value={email} onChange={(e)=> setEmail(e.target.value)} name="Email"></input>
        <br />
        <br />
        <label name="user name">Create a user name</label>
        <br />
        <input value={userName} onChange={(e)=> setUserName(e.target.value)} name="user name"></input>
        

        </div>


        <br />
        <br />
        

        <div> <label name= "first name">First Name </label>
        <br />
        <input value={firstName} onChange={(e)=> setFirstName(e.target.value)} name= "first name"></input>
        <br />
        <br />
        <label name= "last name">Last Name </label>
        <br />
        <input value={lastName} onChange={(e)=> setLastName(e.target.value)} name= "last name"></input>
        </div>
        
        <br />
        <br />

        <div>
        <label name="Password">Create a password</label>
        <br />
        <input  value={password1} onChange={(e)=> setPassword1(e.target.value)} type="password" name="Password"></input>
        <br />
        <br />
        <label name="Confirm Password">Confirm Password</label>
        <br />
        <input value={password2} onChange={(e)=> setPassword2(e.target.value)} type="password" name="Confirm Password"></input>
        </div>

        <br/>
        <br />
        <button onClick={()=> setformPage(2)}>Next</button>
        </div>
    }

    if(formPage===2){
        formdata = <> 
        <button onClick={()=> setformPage(1)}>Back</button>
        <h1>Workout 4 me uses your information to calculate a custom work out and meal plan catered towards you</h1>
        <br />
        <br />
        <h3>Workout 4 me uses data such as your age, weight, and height to caculate stats that are needed in order to make this custom plan.</h3>
        <h3>These stats include:</h3>
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
        <button onClick={()=> setformPage(3)}>Continue Creating Account</button>
        </>

    }

    if(formPage=== 3) {
        formdata = <> 
         <div >
         <button onClick={()=> setformPage(2)}>Back</button>
         <br />
            <h1>Stats</h1>
            <label name= "Age" /> How old are you? <label/>
            <br />
            <input name="Age" type="number" placeholder="Age in years" value={age} onChange={(e)=> setAge(e.target.value)}/>
            <br/>
            <br />
            <label name= "Weight Question" /> How much do you weigh? <label/>
            <br />
            <input  value={weight} onChange={(e)=> setWeight(e.target.value)} name = "Weight Question" type="number" placeholder="Weight in pounds" className="inputbox"/>
            <br />
            <br/>
            <label name= "Height Question" /> What is your height? <label/>
            <br />
            <input  name= "Height Question feet" type="number" value={heightFeet} onChange={(e)=> setHeightFeet(e.target.value)} placeholder="5" min="0" className="inputbox2"/> ft
            <input  name= "Height Question inches" type="number" value={heightInches} onChange={(e)=> setHeightInches(e.target.value)} placeholder="6" min ="0" max="11" className="inputbox2"/> in
            <br />
            <br />
            <label name= "Activity Level Question" /> What is your activity level? <label/>
            <br/>
            <br />
            <input  name= "Activity Level Question" type="radio" onChange={(e)=> setActivityLevel(e.target.value)} value="Little or no exercise" className= "radio" /> Little or no exercise
            <br />
            <input  name= "Activity Level Question" type="radio" onChange={(e)=> setActivityLevel(e.target.value)} value="Light exercise a few times a week" className= "radio" /> Light exercise a few times a week
            <br />
            <input  name= "Activity Level Question" type="radio" onChange={(e)=> setActivityLevel(e.target.value)} value="Moderate exercise 3-5 times a week" className= "radio" /> Moderate exercise 3-5 times a week
            <br />
            <input  name= "Activity Level Question"  onChange={(e)=> setActivityLevel(e.target.value)} type="radio" value="Heavy exercise 6-7 times per week" className= "radio" /> Heavy exercise 6-7 times per week
            <br />
            <br/>
            <label name ="goals" /> What is your main goal for working out? <label/>
            <br/>
            <br />
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
            <input  name= "create account form" type="submit" value="Submit"/>
            </div>
        </>

    }




    return (

        <>
        <Link to="/" exact> Back to Log In</Link>
        <br />
        <br />
        {errorMessages}
        
        <form onSubmit={handleSubmit} name= "create account form">
            
            {formdata}
        </form>
        </>
    )
}

export default SignUp