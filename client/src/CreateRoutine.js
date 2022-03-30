import React, {useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import { Route, useRouteMatch, Switch } from "react-router-dom";
import WorkoutCard from "./WorkoutCard";

function CreateRoutine({user, workouts, setWorkoutBeingShown, setUpdateData, updateData}){

    const history= useHistory()

    const [worokoutInfoObject, setworokoutInfoObject]= useState([])
    const [showWorkouts, setShowworkouts]= useState(false)
    const [workoutSearchFilter, setWorkoutSearchFilter]= useState('')
    const [routineName, setRoutineName]= useState('')
    const [routineDescription, setRoutineDescription]= useState('')
    const [imageLink, setImageLink]= useState('')
    const [workOutSearchCheckBox, setWorkOutSearchCheckBox]= useState([])
    
    let workoutsearch;

    useEffect(()=>{
        workouts.map((w)=> setWorkOutSearchCheckBox((p)=> [...p, { [`${w.name} checked`]: false }]))
    }, [])
    
    console.log(worokoutInfoObject)
   
    

    function handleSubmit(e){
        e.preventDefault()
        let routineid
        const routine ={
            name: routineName,
            description: routineDescription,
            image: imageLink,
            created_by_id: user.id
        }

        fetch('routines', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(routine)
        })
        .then(res=>res.json())
        .then(data=> {
            console.log(data)
            routineid= data.id
            const userRoutineObj = {
                user_id: user.id,
                routine_id: routineid,
                currently_using: true
            }
            console.log(routineid)
            fetch('user_routines', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(userRoutineObj)
            }) 
            .then(res => res.json())
            .then(data =>console.log(data))
            // .then(data=> console.log(data))
    
            worokoutInfoObject.forEach((o)=>{
                
                 fetch('workout_routines', {
                    method: 'POST',
                    headers: {
                        'Content-Type' : 'application/json'
                    },
                    body: JSON.stringify({
                        workout_id: o.id,
                        routine_id: routineid,
                        reps: o.reps,
                        sets: o.sets
                    })
                })
            .then(res=> res.json())
            .then(data => console.log(data))
            })
        })

        setUpdateData((p) => {
            
            return p +1})


        // history.push('/')
    }



    if(showWorkouts===false){
        workoutsearch= <button onClick={()=> setShowworkouts(true)}>Select Workouts For Routine</button>
    }
    if(showWorkouts===true){

        let filteredWorkoutSearch = workouts.filter((w)=> w.name.includes(workoutSearchFilter)) 


        workoutsearch= <div>
            
            <button onClick={()=> setShowworkouts(false)}> Hide Workouts</button>
            <br/>
            <br />
            {/* <select id='workout filter selector'>
                <option>--- Select Search Filter ---</option>
                <option value='name'>Name</option>
                <option value='name'>Targeted muscle</option>
            </select> */}


            <label name='workout search'> Search Work Outs:</label>
            <input value={workoutSearchFilter} onChange={(e)=> setWorkoutSearchFilter(e.target.value)} name='workout search'></input>

            
            {filteredWorkoutSearch.map((w)=>{
                let index
                
                let showSetsAndReps

                function findIndex(){
                    let id
                    worokoutInfoObject.map(o=>{
                        console.log(Object.values(o))
                        
                        if((Object.values(o)[0]).toString()=== w.id.toString()){
                           return id =worokoutInfoObject.indexOf(o)
                        }
                       
                    })
                    return index = id
                }
                findIndex()

                function checkSetsAndReps(){
                    let boolean
                    workOutSearchCheckBox.forEach((o)=>{
                        if(Object.keys(o)[0]===`${w.name} checked`){
                            return boolean= Object.values(o)[0]
                        }
    
                    })
                    if(boolean===false){
                        return <> </>
                    }
                    if(boolean===true){
                        return showSetsAndReps= <div> 
                            <br />
                            <h3>{`How many sets of ${w.name} would you like to add to this workout?`} </h3>
                            <input name={`sets for ${w.name}`} 
                            value={worokoutInfoObject[index] === undefined ? '' :worokoutInfoObject[index].sets} 
                            onChange={(e)=>{
        
                                    worokoutInfoObject[index] = {...worokoutInfoObject[index], sets: e.target.value}
                                   
                            }}
                            >
                                
                            </input>
                            <br />
                            <br />
                            <h3>{`How many reps of ${w.name} would you like to add to this workout?`} </h3>
                            <input 
                            onChange={(e)=>{
                                worokoutInfoObject[index] = {...worokoutInfoObject[index], reps: e.target.value}
                             }}
                             value={worokoutInfoObject[index] === undefined ? '' :worokoutInfoObject[index].reps} 
                            
                            name= {`reps for ${w.name}`}></input>
                            <br />
                        </div>
                    }
                }

                checkSetsAndReps()
                


                

                function checkBoxes(w){
                    let statement
                    workOutSearchCheckBox.map((o)=>{
                        if(Object.keys(o)[0]===`${w.name} checked`){
                         statement= ((Object.values(o)[0]))
                           return statement
                        }
                    })
                    return statement
                    
                }
                
                return (
                    
                    
                    <div key={`workoutsearch${w.id}`} > <> 
                    <br />
                    <h2>{w.name}
                    <input  
                    checked={checkBoxes(w)}
                    key={`workoutcheckbox${w.id}`} 
                    id={`workoutcheckbox${w.name}`} 
                    onChange={(e)=>{ 

                        workOutSearchCheckBox.map((o)=>{
                            let index = workOutSearchCheckBox.indexOf(o)
                            
                           if(Object.keys(o)[0]===`${w.name} checked`){
                               let copyState = [...workOutSearchCheckBox]
                               copyState[index]= {...copyState[index],  [`${w.name} checked`]:  !Object.values(o)[0] }

                              setWorkOutSearchCheckBox(copyState)
                           }
                        })

    
                        if(e.target.checked){
                            setworokoutInfoObject((p)=> [...p, { id: e.target.value}])
                        }
                        if(!e.target.checked){
                            worokoutInfoObject.map((o)=>{
                                if(o.id=== e.target.value){
                                    const workoutindex= worokoutInfoObject.indexOf(o.id)
                                    worokoutInfoObject.splice(index, 1)
                                    
                                }
                            })
                        }
                    }}
                        type='checkbox'  
                        name={w.name}
                        value={w.id}>
                    </input>
                    </h2>
                    <br />
                    <img src={w.gif} width="300" height="300"></img>
                    <br />
                    <br />
                    {showSetsAndReps}
                    </>
                    <h2 onClick={()=> {
                        setWorkoutBeingShown(w)
                        history.push(`workouts/${w.id}`)
                        }}>{`Click to see more information about ${w.name}`}</h2>
                        <br />
                    </div>
                
                )
            })}
        </div>
    }
  
    return(
       <> 
       <button onClick={()=> history.push('/workoutplan')}>Back To Workout Plan</button>
       <h1>Create Routine</h1>
       <form>

           <div>  
            <label name='name'>Routine Name</label>
           <br></br>
           <input value={routineName} onChange={(e)=> setRoutineName(e.target.value)} name='name'></input>
           <br />
           <br />
           <label name= 'description'>Description </label>
           <br />
           <input value={routineDescription} onChange={(e)=> setRoutineDescription(e.target.value)} name='description'></input>
           <br />
           <br />
           <label name= 'image'>Image Link</label>
           <br />
            <img src={imageLink} height='300' width='400'></img>
            <br />
           <input value={imageLink} onChange={(e)=> setImageLink(e.target.value)} name= 'image'></input>
           </div>
           <br />
           <input value='Create Routine' onClick={handleSubmit} type='submit'></input>

           <br />
           <br />
           <br />
           {workoutsearch}

       </form>
       
       </>
    )
}

export default CreateRoutine