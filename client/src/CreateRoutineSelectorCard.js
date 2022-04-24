import React from "react";
import {  useHistory } from "react-router-dom";
import SetsAndRepsTab from "./SetsAndRepsTab";

function CreateRoutineSelectorCard({w, worokoutInfoObject, workOutSearchCheckBox, setWorkOutSearchCheckBox, setworokoutInfoObject, setWorkoutBeingShown}){

                const history = useHistory();
              
                let showSetsAndReps
                checkSetsAndRepsAreBeingShown()

                function checkSetsAndRepsAreBeingShown(){
                    const index =workOutSearchCheckBox.findIndex((element)=> Object.keys(element)[0]===`${w.name} checked`)
                    if(workOutSearchCheckBox[index][`${w.name} checked`]===false){
                        return showSetsAndReps= <> </>
                    }
                    if(workOutSearchCheckBox[index][`${w.name} checked`]===true){
                        return showSetsAndReps= <div> 
                            <SetsAndRepsTab w={w} worokoutInfoObject={worokoutInfoObject} setworokoutInfoObject={setworokoutInfoObject}/>
                        </div>
                    }
                }

                function checkBoxes(w){
                    const index =workOutSearchCheckBox.findIndex((element)=> Object.keys(element)[0]===`${w.name} checked`)
                    return workOutSearchCheckBox[index][`${w.name} checked`]
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
                        const index =workOutSearchCheckBox.findIndex((element)=> Object.keys(element)[0]===`${w.name} checked`)
                        let copyOfWorkoutSearchCheckObj = [...workOutSearchCheckBox]
                        copyOfWorkoutSearchCheckObj[index]= {...copyOfWorkoutSearchCheckObj[index], [`${w.name} checked`] : !Object.values(copyOfWorkoutSearchCheckObj[index])[0]}
                        setWorkOutSearchCheckBox(copyOfWorkoutSearchCheckObj)
                        if(e.target.checked){
                            setworokoutInfoObject((p)=> [...p, w])
                        }
                        if(!e.target.checked){
                            worokoutInfoObject.map((o)=>{
                                if(o.id.toString()=== e.target.value){
                                    const index= worokoutInfoObject.indexOf(o)
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