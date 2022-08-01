import React,{useState,useEffect} from 'react'
import axios from "axios";
import "../App.css"
import Rating from '@mui/material/Rating';

export default function Topsongs() {
  const [songdata,setSongData]=useState()
  
  useEffect(()=>{
    axios.get("http://localhost:3000/songs").then((response) => {
      setSongData(response.data);
      console.log(response.data);

    });
  },[])
  return (
    <div>
       <tbody>
                <tr>
                    <th>Artwork</th>
                    <th>song</th>
                    <th>Date of Release</th>
                    <th>Artist</th>
                    <th>Rating</th>
                    
                </tr>
                {/* {songdata.map((item, i) => (
                    <tr key={i}>
                        <td><img src={item.artwork}/></td>
                        <td>{item.song}</td>
                        <td>{item.dor}</td>
                        <td>{item.artist}</td>
                        <td><Rating name="no-value" value={null} /></td>
                    </tr>
                ))} */}
            </tbody>
    </div>
  )
}
