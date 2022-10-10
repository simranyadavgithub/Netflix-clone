import React,{useState,useEffect} from 'react';
import axios from './axios';
import requests from './requests';
import './Banner.css';

function Banner() {
    const [movie,setMovie]=useState([]);
    useEffect(()=>{
      //if [] ,runs when the row loads, and dont run again
      async function fetchData() {
        const request = await axios.get(requests.fetchNetflixOriginal);
        setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length)]);
        return request;
      }
      fetchData();
    },[]);
    function truncateString(str, num) {
      if (str?.length > num) {
        return str.substr(0, num-1) + "...";
      } else {
        return str;
      }
   }
    return (
        <header className="banner"
        style={
          {
            backgroundSize:"cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition:"centre centre",
          }
        }>
          <div className="banner__contents">
          <h1 className="banner_title">{movie?.title||movie?.name||movie?.original_name}</h1>
            <div className="banner__buttons">
              <button className="banner__buttton">Play</button>
              <button className="banner__buttton">My List</button>
            </div>
            <h1 className="banner_description">{truncateString(movie?.overview,150)}</h1>
          </div>
          <div className="banner__fadeBottom"/>
        </header>
    )
}

export default Banner
