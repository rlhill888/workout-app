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

function App() {

  const history = useHistory();

  const [user, setUser]= useState(null)


  useEffect(()=>{
    fetch('me')
    .then(res=>{
      if(res.ok){
        res.json()
        .then((res)=> setUser(res))
      }
    })
  },[])

  function CheckedLoggedIn(){
    if(!user){
      return history.push('/login')
    }
  }

  fetch('me')
  
  if(user){
    console.log(user)
    return(
      <>
      <Switch>
        <Route exact path="/">
          <Home user={user}/>
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
          <MealPlan />
        </Route>
        <Route exact path="/workoutplan">
          <WorkOutPlan />
        </Route>
        <Route exact path="/settings">
          <Settings />
        </Route>
        <Route exact path="/createroutine">
          <CreateRoutine />
        </Route>
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
