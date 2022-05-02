import React, {useState} from "react";
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import DeleteIcon from '@mui/icons-material/Delete';
import SettingsIcon from '@mui/icons-material/Settings';

function PostSettings({post}){

    


    return(
        <Accordion>
            <AccordionSummary expandIcon={<SettingsIcon />}>
            Post Settings
            </AccordionSummary>
            <AccordionDetails>
            <> 
        <Button onClick={()=>{
            fetch(`http://localhost:4000/posts/${post.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-type' : 'applicaton/json'
                }
            })
        }}> 
        <DeleteIcon />
        Delete Post</Button>
        </>
            </AccordionDetails>
        </Accordion>
    )
}

export default PostSettings