import React from "react";
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';


function ErrorsCard({errors}){

    if(errors.length === 0){
        return <> </>
    }
    return(
        <Box>
            <Container>
                
                <Paper elevation={4}>
                    <Alert severity="error">
                        <AlertTitle>
                            <h2>ERROR</h2>
                        </AlertTitle>
                    <Box >
           
            <ol>
                {errors.map(error=>{
                    return <li key={`${error} error`}> 
                    <h3>
                    {error}
                    </h3>
                    </li>
                })}
            </ol>
            <br />
                    </Box>
                    </Alert>
                </Paper>
                
            </Container>
        </Box>
    )
}

export default ErrorsCard