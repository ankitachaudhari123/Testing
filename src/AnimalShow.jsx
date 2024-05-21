import React, { useState } from 'react'
import "./AnimalShow.css"
import Bird from "./imges/bird.svg";
import Cat from "./imges/cat.svg";
import Cow from "./imges/cow.svg";
import Dog from "./imges/dog.svg";
import Aligator from "./imges/gator.svg";
import Horse from "./imges/horse.svg";
import Heart from "./imges/heart.svg";

const svgMap = {
    Bird:Bird,
    Cat:Cat,
    Cow:Cow,
    Dog:Dog,
    Aligator:Aligator,
    Horse:Horse
}

const AnimalShow = ({type}) => {

    const [click, SetClick]= useState(0)
    const handleClick = () =>{
        SetClick(click+1)
    }
  return (
    <div  className='animalContainer' onClick={handleClick}>
        <img className='animal' src={svgMap[type]} alt='' style={{width:"15rem", height:"15rem"}}/>
        <img className='heart' src={Heart} alt='' style={{width:10 + 10 *click + "px"}} />
    </div>
  )
}

export default AnimalShow;