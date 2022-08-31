
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
import UpdateDailyMacros from './UpdateDailyMacros';
import Socail from './Socail';
import logo from './workout4melogo.png'
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';
import * as gymData from "./data/open-gym.json"




import { createTheme, ThemeProvider } from '@mui/material/styles';








function App() {

  const history = useHistory();

  const [user, setUser]= useState(null)
  const [updateData, setUpdateData]= useState(0)
  const [workoutBeingShown, setWorkoutBeingShown]= useState(null)
  const [routineBeingShown, setRoutineBeingShown]= useState(null)
  const [mealBeingShown, setMealBeingShown]= useState(null)
  const [workouts, setWorkouts]= useState(null)

  const [ingredients, setIngredients]= useState()
  const [homescreen, setHomescreen]= useState(
    <div
    className='loadingScreenborder'
    >
      <div >
        <center>
          <img
        className='loadingImgLogo'
        src={logo}></img>
        </center>
        
      </div>
      <div
      className='loadingScreen'
      >
        <LinearProgress 
     color='secondary'
     />
      </div>
     
    </div>
  )



  useEffect(()=>{
    fetch('/me')
    .then(res=>{
      if(res.ok){
        res.json()
        .then((res)=>{ 
          setUser(res)
        
        })
      }
      else{
        res.json()
        .then(data=> console.log(data))
        .then(()=> {
          history.push('/login')
          setHomescreen(
            <div>
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
          </div>
          )
        }
        )
          
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
          <Home user={user} />
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
        <Route exact path="/social">
          <Socail user={user}/>
        </Route>
        <Route exact path="/createroutine">
          <CreateRoutine updateData={updateData} user={user} workouts={workouts} setWorkoutBeingShown={setWorkoutBeingShown} setUpdateData={setUpdateData}/>
        </Route>
        <Route exact path="/workouts/:id">
          <WorkoutCard user={user}/>
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
          <IndivisualMealBeingShownCard user={user} meal={mealBeingShown}/>
        </Route>
        <Route exact path="/routine/updateroutine/:id">
          <UpdateRoutine workouts={workouts} setUpdateData={setUpdateData} user={user} routine={routineBeingShown} setWorkoutBeingShown={setWorkoutBeingShown}/>
        </Route>
        <Route exact path="/createmeal">
          <CreateMeal ingredients={ingredients} user={user}/>
        </Route>
        <Route exact path="/updatemeal/:id">
          <UpdateMeal user={user} ingredients={ingredients} meal={mealBeingShown}/>
        </Route>
        <Route exact path="/changestats/:id">
          <ChangeStats user={user}/>
        </Route>
        <Route exact path="/updatedailymacros">
          <UpdateDailyMacros user={user}/>
        </Route>
      </Switch>
      </>
    )
  }
  return (
    <> 
    {homescreen}
    </>
  );
}

export default App;
