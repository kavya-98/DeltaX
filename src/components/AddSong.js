import React,{useState,useEffect} from 'react'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import UploadImage from './UploadImage';
import axios from "axios";
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import OutlinedInput from '@mui/material/OutlinedInput';
import { listItemClasses } from '@mui/material';
import "../App.css"
import Button from '@mui/material/Button';
import Popup from 'reactjs-popup';
import Addartist from './Addartist';



export default function AddSong() {
  const [name, setName] = useState("");
  const [date,setDate]=useState()
  const [img,setImg]=useState()
  
  
  const [personName,setpersonName]=useState([]);
  const list=["Lewis capaldi","post malone","justin bieber quavo"]
  const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const handleChange = (event) => {
  const {
    target: { value },
  } = event;
  setpersonName(
    // On autofill we get a stringified value.
    typeof value === 'string' ? value.split(',') : value,
  );
};
  // useEffect(()=>{
  //   axios.get("http://localhost:3000/artists").then((response) => {
  //     setList(response.data);
  //     console.log(response.data);

  //   });
  // },[])

  return (
    <div id="songadd">
    <h1>Adding New Song</h1>
  
    <form>
    <InputLabel>Song name</InputLabel>
    <TextField
        value={name}
        type="text"
        onChange={(event) => setName(event.target.value)}
        error={name === ""}
        helperText={name === "" ? "All fields are required!" : " "}
      />
      <InputLabel>Date released</InputLabel>
        <TextField
            value={date}
            type="date"
            onChange={(event) => setDate(event.target.value)}
            error={date === ""}
            helperText={date === "" ? "All fields are required!" : " "}
          />
          <InputLabel>Artwork</InputLabel>
        <UploadImage></UploadImage>
        <InputLabel>Artists</InputLabel>
        <div>
        <Select
        sx={{ m: 1, width: 200 }}
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput  />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {list.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
        <Popup trigger={<Button variant="contained">+ Add artist</Button>} 
     position="center">
      <Addartist></Addartist>
    </Popup>
       
        </div>
        <div id="btn"> 
        <Button variant="outlined">cancel</Button>
        <Button variant="contained">save</Button>
    
        </div>
        

    
    </form>
    
    
   

    </div>
  )
}
