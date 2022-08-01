import React from 'react'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';

export default function Addartist() {
  return (
    <div>
    
    <form id="artist">
    <InputLabel>Artist Name</InputLabel>
        <TextField></TextField>
        <InputLabel>Date Of Birth</InputLabel>
        <TextField type="date"></TextField>
        <InputLabel>Bio</InputLabel>
        <TextField></TextField>
        <div id="btn"> 
        <Button variant="outlined">cancel</Button>
        <Button variant="contained">save</Button>
    
        </div>
    </form>
        
    </div>
  )
}
