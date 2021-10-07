import React from 'react'
import { useState } from "react";
import axios from "axios";

function Fertilizer() {

    const [nitrogen, setNitrogen] = useState();
  const [phosphorous, setPhosphorous] = useState();
  const [pottasium, setPottasium] = useState();
  const [cropname, setCropname] = useState();

  const predict = (e) =>{

    e.preventDefault();
   
    var sendObj = {
      nitrogen:nitrogen,
      pottasium:pottasium,
     phosphorous:phosphorous,
      cropname:cropname

    }
    console.log(sendObj);
    axios.post('https://farmers-assistant-backend.herokuapp.com/fertilizer-predict',sendObj).then(response=>{
      console.log("add this",response );
    })
    .catch(error=>{
      console.log(error);
    })

   

  }
    return (
        <>
        {/* <Header navPosition="right" className="reveal-from-bottom" /> */}
  
        <div class="form-container">
          <form class="register-form">
            {/* <div class="success-message">Success! Thank you for registering</div> */}
            <input
              id="nitrogen"
              class="form-field"
              type="text"
              placeholder="Nitrogen"
              name="nitrogen"
              onChange={(e) => setNitrogen(e.target.value)}
            />
            <input
              id="phosphorous"
              class="form-field"
              type="text"
              placeholder="Phosphorous"
              name="phosphorous"
              onChange={(e) => setPhosphorous(e.target.value)}
            />
  
            {/* <span id="first-name-error">Please enter a first name</span> */}
            <input
              id="pottasium"
              class="form-field"
              type="text"
              placeholder="Pottasium"
              name="pottasium"
              onChange={(e) => setPottasium(e.target.value)}
            />
  
            {/* <span id="last-name-error">Please enter a last name</span> */}
            <input
              id="cropname"
              class="form-field"
              type="text"
              placeholder="Crop name"
              name="cropname"
              onChange={(e) => setCropname(e.target.value)}
            />
            
  
            {/* <span id="email-error">Please enter an email address</span> */}
            <button class="form-field" type="submit" onClick={predict}>
              Predict 
            </button>
          </form>
        </div>
      </>
    )
}

export default Fertilizer
