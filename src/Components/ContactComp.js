import React, { useState } from "react";

import './ContactComp.css';  

const ContactComp = () => {
    const[values, setValues]=useState({
        firstname:'',
        lastname:'',
        email:'',
        contact:'',
        gender:'',
        message:'',
    
    })
    
    const handleChanges=(e)=>{
        setValues({...values,[e.target.name]:[e.target.value]})
    }
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(values)
    }
    
    const ResetFun=()=>{
        setValues({firstname:'',lastname:'',email:'',contact:''})
    }
    
        return(
          
            <div className="body">
            
            <div className="container1">
                <h1>Contact Us</h1>
    
            <form оnSubmit={handleSubmit}>
                <label htmlFor="firstname">First Name:</label>
                <input type="text" placeholder="Enter your first name" name="firstname"
                оnChange={(e) => handleChanges(e)} required value={values.firstname}></input>
                
    
                <label htmlFor="lastname">Last Name:</label>
                <input type="text" placeholder="Enter your Last name" name="lastname"
                оnChange={(e) => handleChanges(e)} required value={values.lastname}></input>
                
    
                <label htmlFor="email">Email:</label>
                <input type="email" placeholder="Enter your email" name="email"
                оnChange={(e) => handleChanges(e)} required value={values.email}></input>
                
    
                <label htmlFor="contact">Contact:</label>
                <input type="text" placeholder="Enter your contact number" name="contact"
                оnChange={(e) => handleChanges(e)} required value={values.contact}></input>
                
    
                <label>Gender:</label>
                    <label>
                        <input type="radio" name="gender" value="male" 
                        оnChange={(e) => handleChanges(e)}/> Male
                   
                        <input type="radio" name="gender" value="female" 
                        оnChange={(e) => handleChanges(e)}/> Female
               
                        <input type="radio" name="gender" value="others" 
                        оnChange={(e) => handleChanges(e)}/> Others
                    </label>
                    
    
                <label htmlFor="message">Message:</label>
                <textarea id="message" placeholder="Enter message" name="message" cols={30} rows={10}
                оnChange={(e) => handleChanges(e)}></textarea>
               
                <button className="b1" type="button" оnClick={ResetFun}>Reset</button>
                <button className="b2" type="submit">Send</button>
    
            </form>
            </div>
            
    
           
            <div className="container">
                <div class="row">
                    <div class="col-4 address">
                        <h4>E-Learning</h4>
    
                        <ul>
                            <li>E-Learning OMR Road</li>
                            <li>Navalur</li>
                            <li>Chennai</li>
                            <li>PinCode-524404</li>
                            
                        </ul>
    
                    </div>
                    <div class="col-8 location">
                <iframe
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    src="https://www.google.com/maps/embed?pb="
                ></iframe>
                    </div>
                </div>
            </div>
            </div>
            
            
        ) ;
 
}

export default ContactComp