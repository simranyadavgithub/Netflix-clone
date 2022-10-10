import React,{useState,useEffect} from 'react'
import './Nav.css'

function Nav() {
      const [show,handleShow]=useState(false);
      useEffect (() => {
        document.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
         handleShow (true);
        } else handleShow(false);
        });
        return () => {
        document.removeEventListener("scroll");
        };
    }, []);
    return (
        <div className={`nav ${show&&"nav_black"}`}>
         <img className="nav_logo" src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="Netflix_logo"/>
          <img className="nav_avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Netflix_avatar"/>

        </div>
    )
}

export default Nav;
