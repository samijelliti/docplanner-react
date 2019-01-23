import React, { Component } from 'react';
import './Part3.css'





const City=({city})=>{
    return(
<div className="city">
<a href="#">
            <img src={city.image} width="100%" height="80%"/>
            <div class="cityp">
            <p> {city.city}</p>
            <button type="button" class="btn btn-primary">See opening</button>
            </div>
            </a>
</div>)
}
 
export default City;