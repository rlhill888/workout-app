import React from "react";
import NavBar from "./NavBar";

import { useHistory } from "react-router-dom";

function WorkOutPlan(){

    const history= useHistory()

    return(
    <>
    <h1>Work Plan</h1>
    <NavBar />
    <br/>
    <br/>
    <button onClick={()=> history.push('/createRoutine')} >Create Routine</button>
    </>
    )
}


export default WorkOutPlan