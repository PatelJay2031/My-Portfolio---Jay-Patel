import React from 'react';
import "./App.css";

 export const ContactUs = () => {
  return (
<div className='contact'>
  
      <h1>Contact Us</h1>
       <div className="detail">
         Name : Jay Patel.<br/>
         Email : 
  12345@gmail.com<br/>
        Mob :   5412365478<br/>
        Location :  Ahemedabad,Gujarat.
  <br/><br/>
       </div>
      
  <br/>
<form className="form">
<div className="box">  <h3>IF YOU WANT'S TO GIVE US A PROJECT THEN FILL THE BELOW FORM...</h3></div>
      <label>Enter your name:<br/>
        <input type="text" className="box1" />
      </label><br/><br/> 
  <label>Email:<br/>
        <input type="text" className="box2"/>
      </label><br/><br/>
  <label>Phone No:
    <br/>
        <input type="text" className="box3"/>
      </label> <br/> <br/>
  <label>Which Information You Need From Us:</label>
    <br/>
        <textarea rows="4" cols="50" className="box4"/>
       <br/><br/>
  <button className="submit">Submit</button>
</form>
      </div>
  );
}
