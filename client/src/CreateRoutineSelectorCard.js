import React from "react";
import {  useHistory } from "react-router-dom";
import SetsAndRepsTab from "./SetsAndRepsTab";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';

function CreateRoutineSelectorCard({w, worokoutInfoObject, workOutSearchCheckBox, setWorkOutSearchCheckBox, setworokoutInfoObject}){

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
                    <>
                    <Box style={{
        textAlign:'center' 
    }} m={4}>
                        <Paper  elevation={3}>
                        <Box m={4} >
                    <div key={`workoutsearch${w.id}`} > <> 
                    <br />
                    <h2>{w.name}
                    <Checkbox  
                    color='secondary'
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
                    </Checkbox>
                    </h2>
                    <br />
                    <img src={w.gif} width="300" height="300"></img>
                    <br />
                    <br />
                    {showSetsAndReps}
                    </>
                    <h2 onClick={()=> {
                        history.push(`workouts/${w.id}`)
                        }}>{`Click to see more information about ${w.name}`}</h2>
                        <br />
                    </div>
                        </Box>
                    </Paper>

                    </Box>



                    </>
                
                )
}

export default CreateRoutineSelectorCard