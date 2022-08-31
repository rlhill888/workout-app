import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import { CardActionArea, CardMedia, CardContent, Card } from '@mui/material';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AddBoxTwoToneIcon from '@mui/icons-material/AddBoxTwoTone';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import SettingsIcon from '@mui/icons-material/Settings';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import ButtonGroup from '@mui/material/ButtonGroup';
import PresentToAllIcon from '@mui/icons-material/PresentToAll';
import CallMissedOutgoingIcon from '@mui/icons-material/CallMissedOutgoing';
import Modal from '@mui/material/Modal';
import './RoutineDisplayCard.css'



function RoutineDisplayCardWorkoutPlan({r, user, deleteRoutine}){
    let settings
    const history = useHistory();
    const [openDeleteTab, setOpenDeleteTab]= useState(false)
    const handleOpen = () => setOpenDeleteTab(true);
    const handleClose = () => setOpenDeleteTab(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
    console.log(r)
    console.log(user)

    const [showSettings, setShowSettings]= useState(false)
    if(showSettings===false){
        settings= <button onClick={()=>{
            setShowSettings((v)=> !v)
        }}>Show Settings</button>
    }
    if(user.id===r.created_by_id){
       settings= <>
            <Accordion >
                <AccordionSummary expandIcon={<SettingsIcon />}>
                Settings
                </AccordionSummary>
                <MuiAccordionDetails>
                    <Stack>
                        <Button 
                        color='secondary'
                       onClick={()=> handleOpen()}
                        variant="contained" >
                            <DeleteIcon /> Delete Routine
                        </Button>

                         <Button 
                         onClick={()=>{
                            history.push(`/updateroutine/${r.id}`)
                        }}
                         >
                        <UpgradeIcon />
                        Update Routine
                        </Button>
                        <Button 
                        onClick={()=>{
                            const body= {
                                user_id: user.id,
                                title: r.name,
                                image: r.image,
                                description: r.description,
                                meal_post: false,
                                routine_post: true,
                                share_routine_id: r.id
                            }
                            
                             fetch('/posts',{
                                method: 'POST',
                                headers: {
                                    'Content-Type' : 'application/json'
                                },
                                body: JSON.stringify({
                                    user_id: user.id,
                                    title: r.name,
                                    image: r.image,
                                    description: r.description,
                                    meal_post: false,
                                    routine_post: true,
                                    share_routine_id: r.id
                                })
                            })
                            .then(res=> res.json())
                            .then(res=> console.log(res))
                        }}
                        color='secondary'
                        variant="contained">
                            <PresentToAllIcon />
                            Share Routine
                        </Button>
                        <Button 
                        color='secondary'
                        onClick={()=> history.push(`/routine/${r.id}`)}>
                            <CallMissedOutgoingIcon />
                            Go To Routine
                        </Button>

                    </Stack>
                    <Modal
        open={openDeleteTab}
        onClose={handleClose}
        >
            <Box
            sx={style}
            >
                <h3>
                    Are You Sure You Want To Delete This Workout?
                </h3>
                <ButtonGroup>
                <Button color='secondary' variant='contained'
                onClick={()=>{
                    deleteRoutine(r.id)
                    history.push('/workoutplan')
                    window.location.reload(false)
                }}
                
                >Yes</Button>
                <Button onClick={()=> handleClose()} variant='contained'>Cancel</Button>
                </ButtonGroup>

            </Box>
        </Modal>
                </MuiAccordionDetails>

            </Accordion>
        </>
    }
    if(user.id !== r.created_by_id){
        settings= <> 
         <Accordion >
                <AccordionSummary expandIcon={<SettingsIcon />}>
                Settings
                </AccordionSummary>
                <MuiAccordionDetails>
                   <Stack >
                        <Button 
                        onClick={()=>{
                           handleOpen()
                        }}
                        color='secondary'
                        variant="contained" >
                            <DeleteIcon /> Remove Routine
                        </Button>
                        <Button 
                        color='secondary'
                        onClick={()=> history.push(`/routine/${r.id}`)}>
                            <CallMissedOutgoingIcon />
                            Go To Routine
                        </Button>
                        
                       
                    </Stack>
                    <Modal
        open={openDeleteTab}
        onClose={handleClose}
        >
            <Box
            sx={style}
            >
                <h3>
                    Are You Sure You Want To Remove This Workout?
                </h3>
                <ButtonGroup>
                <Button color='secondary' variant='contained'
                onClick={()=>{
                    const filteredArray = user.user_routines.filter((userRoutine)=>{
                        return userRoutine.user_id === user.id && userRoutine.routine_id === r.id
                    })
                    const selectedUserRoutine= filteredArray[0]
        
                    fetch(`/user_routines/${selectedUserRoutine.id}`, {
                        method: 'DELETE',
                        headers: {
                            'Content-Type' : 'application/json'
                        }
                    })
                    
                    history.push('/workoutplan')
                    window.location.reload(false)
                }}
                
                >Yes</Button>
                <Button onClick={()=> handleClose()} variant='contained'>Cancel</Button>
                </ButtonGroup>

            </Box>
        </Modal>

                    
                </MuiAccordionDetails>

            </Accordion>
        </>
    }
    return(
        <Box  > 
         <Card elevation={15}>  
            <h2>{r.name}</h2>
            <img 
            className="routineDisplayCardDiv"
             src={r.image}></img>
           {settings} 
        </Card>
        </Box>
    )

}

export default RoutineDisplayCardWorkoutPlan