import logo from './logo.svg';
import './App.css';
import LogIn from './LogIn';
import Home from './Home';
import { Route, Switch, useHistory } from "react-router-dom";
import React, {useEffect, useState} from 'react';
import SignUp from './SignUp';
import {Link} from  "react-router-dom";
import WelcomeLogIn from './WelcomeLogIn';
import WorkOutPlan from './WorkOutPlan';
import MealPlan from './MealPlan';
import Settings from './Settings';
import CreateRoutine from './CreateRoutine';
import WorkoutCard from './WorkoutCard';
import UpdateRoutine from './UpdateRoutine';
import CreatePost from './CreatePost';
import RoutineCard from './RoutineCard';
import CreateMeal from './CreateMeal';
import ChangeStats from './ChangeStats';
import IndivisualMealBeingShownCard from './IndivisualMealBeingShownCard';
import UpdateMeal from './UpdateMeal';
import * as gymData from "./data/open-gym.json"


import {GoogleMap, withScriptjs, withGoogleMap, Marker} from 'react-google-maps'


function Map(){

    return(
        <GoogleMap 
        defaultZoom={10} 
        defaultCenter={{lat: 39.952583, lng: -75.165222}}
        >
          {/* {gymData.map((a)=>{
            <Marker key={`${a.postalcode1}${a.address11}`}/>
          })} */}
          </GoogleMap>

    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

function App() {

  const history = useHistory();

  const [user, setUser]= useState(null)
  const [updateData, setUpdateData]= useState(0)
  const [workoutBeingShown, setWorkoutBeingShown]= useState(null)
  const [routineBeingShown, setRoutineBeingShown]= useState(null)
  const [mealBeingShown, setMealBeingShown]= useState(null)
  const [workouts, setWorkouts]= useState(null)

  const [ingredients, setIngredients]= useState([])



  useEffect(()=>{
    fetch('me')
    .then(res=>{
      if(res.ok){
        res.json()
        .then((res)=> setUser(res))
      }
    })
    fetch('workouts')
    .then(res=> res.json())
    .then(data=> setWorkouts(data))

    fetch('/ingredients')
        .then(res=> res.json())
        .then(res=> setIngredients(res))
    


  },[updateData])

  

  function CheckedLoggedIn(){
    if(!user){
      return history.push('/login')
    }
  }

  
  if(user){
    console.log(user)
    return(
      <>
      <Switch>
        <Route exact path="/">
          <Home user={user} setRoutineBeingShown={setRoutineBeingShown}/>
        </Route>
        <Route exact path="/login">
          <LogIn setUser={setUser}/>
        </Route>
        <Route exact path="/signup">
          <SignUp setUser={setUser}/>
        </Route>
        <Route exact path="/welcome">
          <WelcomeLogIn setUser={setUser}/>
        </Route>
        <Route exact path="/mealplan">
          <MealPlan setMealBeingShown={setMealBeingShown} user={user}/>
        </Route>
        <Route exact path="/workoutplan">
          <WorkOutPlan user={user} routines={user.routines} setRoutineBeingShown={setRoutineBeingShown}/>
        </Route>
        <Route exact path="/profile">
          <Settings user={user}/>
        </Route>
        <Route exact path="/createroutine">
          <CreateRoutine updateData={updateData} user={user} workouts={workouts} setWorkoutBeingShown={setWorkoutBeingShown} setUpdateData={setUpdateData}/>
        </Route>
        <Route exact path="/workouts/:id">
          <WorkoutCard workout={workoutBeingShown}/>
        </Route>
        <Route exact path="/updateroutine/:id">
          <UpdateRoutine workouts={workouts} setUpdateData={setUpdateData} user={user} routine={routineBeingShown} setWorkoutBeingShown={setWorkoutBeingShown}/>
        </Route>
        <Route exact path="/createpost">
          <CreatePost user={user} />
        </Route>
        <Route exact path="/routine/:id">
          <RoutineCard setRoutineBeingShown={setRoutineBeingShown} routine={routineBeingShown} setWorkoutBeingShown={setWorkoutBeingShown} user={user}/>
        </Route>
        <Route exact path="/meal/:id">
          <IndivisualMealBeingShownCard meal={mealBeingShown}/>
        </Route>
        <Route exact path="/routine/updateroutine/:id">
          <UpdateRoutine workouts={workouts} setUpdateData={setUpdateData} user={user} routine={routineBeingShown} setWorkoutBeingShown={setWorkoutBeingShown}/>
        </Route>
        <Route exact path="/createmeal">
          <CreateMeal ingredients={ingredients} user={user}/>
        </Route>
        <Route exact path="/updatemeal/:id">
          <UpdateMeal ingredients={ingredients} meal={mealBeingShown}/>
        </Route>
        <Route exact path="/changestats/:id">
          <ChangeStats user={user}/>
        </Route>
        <Route exact path="/map">
          <div style={{width: "100vw", height: "100vh"}}> 
          <WrappedMap 
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCfcLd8NSm0bUbI3zKOTDOPxrWFw-L92LQ`}
          loadingElement={<div style={{height: "100%"}}/>} 
          containerElement={<div style={{height: "100%"}}/>} 
          mapElement={<div style={{height: "100%"}}/>} 
          />

          </div>
        </Route>
        {/* <Route  exact path ="/createroutine/workout">
             <WorkoutCard />
        </Route> */}
      </Switch>
      </>
    )
  }
  return (
    <> 
    <Switch>
    <Route   exact path="/">
          <LogIn setUser={setUser}/>
        </Route>
        <Route   exact path="/login">
          <LogIn setUser={setUser}/>
        </Route>
        <Route exact path="/signup">
          <SignUp setUser={setUser}/>
        </Route>
        <Route exact path="/welcome">
          <WelcomeLogIn setUser={setUser}/>
        </Route>
    </Switch>
    {/* <LogIn />
    <h2>New User?</h2>
    <br />
    <Link to="/signup" exact>  Sign Up</Link> */}
    </>
  );
}

export default App;
