import React from 'react'
import AddSong from './AddSong'
import Topartists from './Topartists'
import Topsongs from './Topsongs'
import {Link} from 'react-router-dom';
import "../App.css"
import SearchAppBar from './SearchAppBar';
import Button from '@mui/material/Button';


export default function Home() {
  return (
    <div id="container">
    
    <SearchAppBar></SearchAppBar>
    <br></br>
    <div id="addsong">
    <Link  to='/addsong'>
    <Button variant="contained">+ Add Song</Button>
          
        </Link>
    </div>
    
    <h2>Top 10 Songs</h2>
    
  
    
<Topsongs/>
<br></br>
<h2>Top 10 Artists</h2>
<Topartists/>
    </div>
  )
}

