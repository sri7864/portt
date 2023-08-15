import "./HeroImg.css"
import React from 'react'
import IntroImg from "../assets/intro-bg.jpg"
import { Link } from "react-router-dom"
const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg" />
        </div>

        <div className="content">
        <div className="sri">If You Can Change Your Mind You Can Change Your Life</div> 

            <p>Hi,I'M A FREELANCER.</p>
            <h1>Full-Stack DEVELOPER</h1>

            <div className="rapper">

            <Link to="/project"
            className="btn">projects</Link>
             <Link to="/contact"
            className="btn btn-light">contact</Link>
            </div>
        
        </div>
    </div>
  )
}

export default HeroImg