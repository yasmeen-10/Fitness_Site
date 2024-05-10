import React, { useState } from 'react'
import './Bmi.css'

const Bmi = () => {
    const[height,setHeight]=useState();
    const[weight,setWeight]=useState();
    const[calhw,setCalhw]=useState();
    const Cal=()=>{
        let h=height/100;
        let w=weight;
        console.log(height)
        console.log(weight)
        setCalhw(w/(h*h))
        console.log(calhw)
    }
  return (
    <>
    <h1>BMI Calculator</h1>
    <form action="">
        <label htmlFor="age">Age </label>
        <input type="number" name="" id="age" /> <br /> <br />

        <label htmlFor="gender">Gender </label>
        <input type="radio" name="" id="" />Male
        <input type="radio" name="" id="" />Female <br /> <br />

        <label htmlFor="ht">Height (in cm) </label>
        <input type="number" name="" id="ht" onChange={(e)=>setHeight(e.target.value)}  /> <br /> <br />

        <label htmlFor="wt">Weight (in kg) </label>
        <input type="number" name="" id="wt" onChange={(e)=>setWeight(e.target.value)}  /> <br /> <br />

        <button type="button" className='btn' onClick={Cal} >
            {
                calhw?calhw:"Calculate"
            }
        </button>
    </form>
    </>
  )
}

export default Bmi
