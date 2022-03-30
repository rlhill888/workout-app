import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";

function UpdateRoutine({routine, user, workouts, setWorkoutBeingShown, setUpdateData}){
    console.log(routine)
    const history= useHistory()

    const [worokoutInfoObject, setworokoutInfoObject]= useState([])
    const [showWorkouts, setShowworkouts]= useState(false)
    const [workoutSearchFilter, setWorkoutSearchFilter]= useState('')
    const [routineName, setRoutineName]= useState(routine.name)
    const [routineDescription, setRoutineDescription]= useState(routine.description)
    const [imageLink, setImageLink]= useState(routine.image)
    const [workOutSearchCheckBox, setWorkOutSearchCheckBox]= useState([])
   

    console.log(routine.workouts)
    console.log(workOutSearchCheckBox)

    useEffect(()=>{
        workouts.map((w)=> {
            setWorkOutSearchCheckBox((p)=> [...p, { [`${w.name} checked`]: false }])
            
        })
        routine.workouts.map((rw)=>{

            
            setWorkOutSearchCheckBox((p)=> [...p, { [`${rw.name} checked`]: true }])
            setworokoutInfoObject((p)=> {
                let reps
                let sets
                routine.workout_routines.map((wr)=>{
                    if(wr.workout_id === rw.id){
                        return reps = wr.reps, sets = wr.sets
                    }
                })

                return [...p, { 
                    id: rw.id.toString(),
                    reps: reps.toString(),
                    sets: sets.toString(),
                    workout_id: rw.id
                }]})
            
        })
    }, [])
    

    let workoutsearch;
    

    function handleSubmit(e){
        e.preventDefault()
        let routineid
        const updatedRoutine ={
            name: routineName,
            description: routineDescription,
            image: imageLink,
        }

        fetch(`http://localhost:4000/routines/${routine.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(updatedRoutine)
        })
        .then(res=>res.json())
        .then(data=> {
            let additionalWorkoutsArray= []
            routineid= data.id
            routine.workout_routines.map((wr)=>{
                let itterationNumber
                const workoutObjectLegnth = worokoutInfoObject.length
                console.log(workoutObjectLegnth)
                worokoutInfoObject.forEach((o)=>{
                    
                    if(o.workout_id===wr.workout_id){

                        additionalWorkoutsArray.map((a)=>{
                            if(a === o){
                                return additionalWorkoutsArray.splice(additionalWorkoutsArray.indexOf(a), 1)
                            }
                        })
                        
                        fetch(`http://localhost:4000/workout_routines/${wr.id}`, {
                            method: 'PATCH',
                            headers: {
                                'Content-Type' : 'application/json'
                            },
                            body: JSON.stringify({
                                reps: o.reps,
                                sets: o.sets
                            })
                        })
                        .then(res=>res.json())



                        // .then(data=>console.log(data, 'complete'))
                    }
                    
                    if(o.workout_id!==wr.workout_id){
                        return additionalWorkoutsArray = [...additionalWorkoutsArray, o]
                    }
                    
                    
               })
               
            })
            if(additionalWorkoutsArray.length >= 1){
                console.log(additionalWorkoutsArray)
                additionalWorkoutsArray.map((a)=>{
                    console.log(a)
                    fetch('http://localhost:4000/workout_routines', {
                        method: 'POST',
                        headers: {
                            'Content-Type' : 'application/json'
                        },
                        body: JSON.stringify({
                            workout_id: a.id,
                            sets: a.sets,
                            reps: a.reps,
                            routine_id: routineid
                        })
                    })
                    .then(res=> res.json())
                    .then(data => console.log(data))
                })
                console.log('done')
            }
            // .then(data=> console.log(data))
    
            // worokoutInfoObject.forEach((o)=>{
                
            //      fetch('workout_routines', {
            //         method: 'POST',
            //         headers: {
            //             'Content-Type' : 'application/json'
            //         },
            //         body: JSON.stringify({
            //             workout_id: o.id,
            //             routine_id: routineid,
            //             reps: o.reps,
            //             sets: o.sets
            //         })
            //     })
            // .then(res=> res.json())
            // .then(data => console.log(data))
            // })
        })
        setUpdateData((p) => {
            console.log(p)
            return p +1})
        history.push('/workoutplan')
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
                        
                        if((Object.values(o)[0]).toString()=== w.id.toString()){
                           return id =worokoutInfoObject.indexOf(o)
                        }
                       
                    })
                    return index = id
                }
                findIndex()

                function handleChecked(e){
                    workOutSearchCheckBox.map((o)=>{
                        let index = workOutSearchCheckBox.indexOf(o)
                        if(Object.keys(o)[0]===`${w.name} checked`){
                            let copyState= [...workOutSearchCheckBox]
                            copyState[index]= {...copyState[index], [`${w.name} checked`]:  !Object.values(o)[0]}
                           setWorkOutSearchCheckBox(copyState)
                        }
                     })

 
                     if(e.target.checked){
                         setworokoutInfoObject((p)=> [...p, {
                             id: e.target.value
                         }])
                         
                     }
                     if(!e.target.checked){
                         worokoutInfoObject.map((o)=>{
                             if(o.id=== e.target.value){
                                 const index= worokoutInfoObject.indexOf(o.id)
                                 worokoutInfoObject.splice(index, 1)
                                 
                             }
                         })
                     }
                }

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
                            placeholder={worokoutInfoObject[index] === undefined ? '' :worokoutInfoObject[index].sets}
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
                             placeholder={worokoutInfoObject[index] === undefined ? '' :worokoutInfoObject[index].reps} 
                            
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
                const checkbox= document.getElementById(`workoutcheckbox${w.id}`)
                console.log(worokoutInfoObject)
                return (
                    
                    
                    <div key={`workoutsearch${w.id}`} > <> 
                    <br />
                    <h2>{w.name}
                    <input  
                    checked={checkBoxes(w)}
                    key={`workoutcheckbox${w.id}`} 
                    id={`workoutcheckbox${w.name}`} 
                    onChange={handleChecked}
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
       <br />
       <br />
       <img src={routine.image}  width="300" height="300"></img>
       <br />
       <br />
       <h1>{`Update ${routine.name}`}</h1>
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
           <input value={imageLink} onChange={(e)=> setImageLink(e.target.value)} name= 'image'></input>
           </div>
           <br />
           <input value='Update Routine' onClick={handleSubmit} type='submit'></input>

           <br />
           <br />
           <br />
           {workoutsearch}

       </form>
       
       </>
    )

}

export default UpdateRoutine