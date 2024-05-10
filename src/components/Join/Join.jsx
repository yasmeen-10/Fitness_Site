import React, { useState } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'

const Join = () => {

  const [name , setName] = useState();
  const [email , setEmail] = useState();
  const [msg , setMsg] = useState();

    const sendEmail = async (e) => {
        e.preventDefault();
      try {
        const serviceId = "service_jv59kjs"
        const templateId = "template_zzkd529"
        const publicKey = "YfJ8Pek4BIpq_cSm6"

        const templateParams = {
          from_name : `${name}`,
          from_email: `${email}`,
          to_name: "FIT CLUB JOIN US",
          message: `${msg}`,
        }



        await emailjs.send(serviceId , templateId , templateParams , publicKey )
        .then((response) => {
            console.log("Successfully done it",response)
        }).catch((error)=>{
          console.log(error);
        })

        console.log(name , email , msg)
       
    } catch (error) {
        console.log("error generating while sendind to user" , error)
    }
  };

  return (
    <div className="Join" id="join-us">
        <div className="left-j">
            <hr />
            <div>
                <span className='stroke-text'>READY TO</span>
                <span>LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY</span>
                <span className='stroke-text'>WITH US? </span>
            </div>
        </div>
        <div className="right-j">
            <form  className='email-container' onSubmit={sendEmail}>
                <input className='text-box' type="text" name="" id="" onChange={(e)=>setName(e.target.value)} placeholder='Enter Your FullName' />
                <input className='text-box' type="email" name='user_email' onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Your Email' />
                <textarea className='text-area' name="" id="" cols="30" rows="10" onChange={(e)=>setMsg(e.target.value)} placeholder='Enter Your Message'></textarea>
                <button className='btn btn-j' >SEND MESSAGE</button>
            </form>
        </div>
    </div>
  )
}

export default Join
