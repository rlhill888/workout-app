import React from "react";
import {  useHistory } from "react-router-dom";
import SetsAndRepsTab from "./SetsAndRepsTab";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import './CreateRoutineSelectorCard.css'

function CreateRoutineSelectorCard({w, worokoutInfoObject, setworokoutInfoObject, workoutList, setWorkoutList}){
                
                const history = useHistory();
              
                let showSetsAndReps
                checkSetsAndRepsAreBeingShown()

                function checkSetsAndRepsAreBeingShown(){
                    if(workoutList[w.name].checked===false){
                        return showSetsAndReps= <> </>
                    }
                    if(workoutList[w.name].checked===true){
                        return showSetsAndReps= <div> 
                            <SetsAndRepsTab w={w} worokoutInfoObject={worokoutInfoObject} setworokoutInfoObject={setworokoutInfoObject}/>
                        </div>
                    }
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
                    checked={workoutList[w.name].checked}
                    key={`workoutcheckbox${w.id}`} 
                    id={`workoutcheckbox${w.name}`} 
                    onChange={(e)=>{ 
                       
                        let copyOfWorkoutList ={...workoutList}
                        copyOfWorkoutList[w.name].checked = !copyOfWorkoutList[w.name].checked
                        setWorkoutList(copyOfWorkoutList)
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
                    <img src={w.gif} 
                    className='createRoutineImageIndivisual'
                    ></img>
                    <br />
                    <br />
                    {showSetsAndReps}
                    </>
                    <br />
                    <Button
                    onClick={()=> {
                        history.push(`/workouts/${w.id}`)
                        }}
                        variant='contained'
                        color="secondary"
                    >
                        Click to see more information about {w.name}
                    </Button>
                        <br />
                        <br />
                    </div>
                        </Box>
                    </Paper>

                    </Box>



                    </>
                
                )
}

export default CreateRoutineSelectorCard