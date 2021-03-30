import React from 'react';
import './Logo.css';
import badbunny from '../../pics/badbunny.jpg';


function Logo (){
    return(
        //created Bad Bunny logo
        <div>
            <img src= {badbunny} className= "Logo" alt= "logo"/>
        </div>
    )
}

export default Logo;

