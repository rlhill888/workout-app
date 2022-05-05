import React from "react";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import CardMedia from '@mui/material/CardMedia';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';


function PostCardTemplate({user, title, description, image}){


    return(
        <> 
       
       <Box p={3}> 
       <Container>
           <Paper elevation={15}>
               <Box p={4}>
       <div>
           <Avatar src={user.profile_pic}></Avatar>
           <h3>{user.user_name} </h3>
            <h1>{title}</h1>
            <br />
            <br />
            <CardMedia component="img" image={image} height='400' width='500'></CardMedia>
            <br />
            <br />
            <h2>{description}</h2>
            <br />
            <br />
        </div>
        <Accordion>
            <AccordionSummary>
                <h3>Comments</h3>
            </AccordionSummary>
            <AccordionDetails>
            <div>
            <form >
                <Stack>
                <TextField variant="standard" placeholder='comment'  value=""></TextField> 
                <Button type='submit' disabled>Post comment</Button>
                </Stack>
            </form>
            <br />
            <br />
        </div>

     
                <>
                <h3>Post Comments :)</h3>
                <br />
                </>
   
    
            </AccordionDetails>

        </Accordion>
        <br />
        <hr />
        </Box>
        </Paper>
        </Container>
        </Box>
        
        </>
    )
}


export default PostCardTemplate