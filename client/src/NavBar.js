import React, {useReducer, useState} from 'react'
import {Link} from  "react-router-dom";
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import {useHistory } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import LogOutButton from './LogOutButton';
import HomeIcon from '@mui/icons-material/Home';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import './navBar.css'




function NavBar({user}){
    const history = useHistory()
    const [openMenu, setOpenMenu]= useState(false)
    const [anchorEl, setAnchorEl] =useState(null)

    function closeMenu(){
        setOpenMenu(false)
        setAnchorEl(null)
    }
    return (
   <div
   className='navbar'
   >
    <AppBar elevation={15}>
         <Box 
         s={{ justifyContent: 'space-between' }}
         p={1}
         className='navbar'
         > 
        <Stack direction="row" spacing={2}>
            <Button 
            className='navBarButton'
            color='secondary'
            variant='contained' onClick={()=> history.push('/')}>
            <HomeIcon />
            </Button>
            <Button 
             className='navBarButton'
            color='secondary' variant='contained' onClick={()=> history.push('/mealPlan')}>Meal Plan</Button>
            <Button  className='navBarButton' color='secondary' variant='contained' onClick={()=> history.push('/workoutplan')}>Work Out Plan</Button>
            <Button  className='navBarButton' color='secondary' variant='contained' onClick={()=> history.push('/social')}>Social</Button>
            <Button  className='navBarButton' color='secondary' variant='contained'
            onClick={(e)=> {
                setOpenMenu(previousState=> !previousState)
                setAnchorEl(e.currentTarget)
                } }
            >
                {window.innerWidth  <= 556 ?  <Avatar src={user.profile_pic} ></Avatar> :

                <>
                <Avatar src={user.profile_pic} ></Avatar>
                     <p>

                       { `   ${user.user_name}`}
                     </p>
                </>
                    
                }
            </Button>
            
        </Stack>
        <Menu 
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(openMenu)}
        onClose={closeMenu}
        >
            <MenuItem onClick={()=> history.push('/profile')}>Profile</MenuItem>
            <MenuItem onClick={()=>{
                fetch('logout', {
                    method: 'DELETE',
                    headers: {'Content-Type' : 'application/json'}
                })
                return history.push('/login')
            }}>Log Out</MenuItem>
        </Menu>
     </Box>
    {/* <Link to='/profile'> Profile </Link> */}
    </AppBar>
    </div>
    
   
    )
}


export default NavBar