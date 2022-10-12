import React from 'react';
import './landing_page.css';
import {Link} from 'react-router-dom';
const LandingPage = ()=>{
    return(
        <>
        <div class="landing">
            <div className='image'>
                <img src={require("../../picture.jpg")} alt="img"/>
            </div>
            <div className='head'><b>10x Team 04</b>
            <Link to="/post-view">
            <div class="btn">             
            <button><b>Enter</b></button></div></Link>
            </div>
        </div>
        </>
    )
}
export default LandingPage;