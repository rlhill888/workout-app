import React, {useState} from "react";
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import DeleteIcon from '@mui/icons-material/Delete';
import SettingsIcon from '@mui/icons-material/Settings';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';

function PostSettings({post}){

    const handleOpen = () => setOpenDeleteTab(true);
    const handleClose = () => setOpenDeleteTab(false);
    const [openDeleteTab, setOpenDeleteTab]= useState(false)
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


    return(
        <Accordion>
            <AccordionSummary expandIcon={<SettingsIcon />}>
            Post Settings
            </AccordionSummary>
            <AccordionDetails>
            <> 
        <Button onClick={()=>{
           handleOpen()
        }}> 
        <DeleteIcon />
        Delete Post</Button>
        </>
        <Modal
        open={openDeleteTab}
        onClose={handleClose}
        >
            <Box
            sx={style}
            >
                <h3>
                    Are You Sure You Want To Delete This Post?
                </h3>
                <ButtonGroup>
                <Button color='secondary' variant='contained'
                onClick={()=>{ fetch(`http://localhost:4000/posts/${post.id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-type' : 'applicaton/json'
                    }
                })
                window.location.reload(false)
                }}
                
                >Yes</Button>
                <Button onClick={()=> handleClose()} variant='contained'>Cancel</Button>
                </ButtonGroup>

            </Box>
        </Modal>
            </AccordionDetails>

            
        </Accordion>
    )
}

export default PostSettings