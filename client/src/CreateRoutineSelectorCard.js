import React from "react";
import {  useHistory } from "react-router-dom";
import SetsAndRepsTab from "./SetsAndRepsTab";

function CreateRoutineSelectorCard({w, worokoutInfoObject, workOutSearchCheckBox, setWorkOutSearchCheckBox, setworokoutInfoObject, setWorkoutBeingShown}){

                const history = useHistory();
                let index
                let showSetsAndReps

                findIndex()
                checkSetsAndRepsAreBeingShown()
                
                function findIndex(){
                    let indexNumber
                    
                    worokoutInfoObject.map(o=>{
                        if((Object.values(o)[0]).toString()=== w.id.toString()){
                           return indexNumber =worokoutInfoObject.indexOf(o)
                        }
                    })
                    console.log(indexNumber)
                    return index = indexNumber
                }

                function checkSetsAndRepsAreBeingShown(){
                    let showSetsAndRepsTab
                    workOutSearchCheckBox.forEach((o)=>{
                        if(Object.keys(o)[0]===`${w.name} checked`){
                            return showSetsAndRepsTab= Object.values(o)[0]
                        }
    
                    })
                    
                    if(showSetsAndRepsTab===false){
                        return <> </>
                    }
                    if(showSetsAndRepsTab===true){
                        return showSetsAndReps= <div> 
                            <SetsAndRepsTab w={w} worokoutInfoObject={worokoutInfoObject} index={index}/>
                        </div>
                    }
                }

                function checkBoxes(w){
                    let checkboxValue
                    workOutSearchCheckBox.map((o)=>{
                        if(Object.keys(o)[0]===`${w.name} checked`){
                         checkboxValue= ((Object.values(o)[0]))
                           return checkboxValue
                        }
                    })
                    return checkboxValue
                    
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
}

export default CreateRoutineSelectorCard