import React,{useState,useEffect} from 'react'
import axios from "axios";
import "../App.css"

export default function Topartists() {
  const [data,setData]=useState()
  useEffect(()=>{
    axios.get("http://localhost:3000/artists").then((response) => {
      setData(response.data);
      console.log(response.data);

    });
  },[])
  return (
    <div>
       <tbody>
                <tr>
                    <th>Artists</th>
                    <th>Date of birth</th>
                    <th>Songs</th>
                    
                </tr>
                {/* {data.map((item, i) => (
                    <tr key={i}>
                        <td>{item.artist}</td>
                        <td>{item.dob}</td>
                        <td>{item.songs}</td>
                    </tr>
                ))} */}
            </tbody>
    </div>
  )
}
