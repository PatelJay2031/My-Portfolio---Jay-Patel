import React from 'react'
import "./App.css";
export const Homepage = () => {
  return (
    <>
      <div className="mainHomePage1">
      <h1>Hey, This is<span className='name'> Jay Patel</span></h1></div>
      <div className='mainHomePage'>
        
      <div className='line'> <h2 className='name1' >A Front End Web Developer</h2></div>
        
        <p className='desc'></p>
        <div className="image">
          <br/><br/>
          <span className="projectLink">
                        <a className="im" href="https://github.com/PatelJay2031">
                            <img className='icon' src="https://cdn-icons-png.flaticon.com/128/733/733553.png"></img>
                        </a>
                    </span>
                    <span>
                        <a className="im" href="https://www.linkedin.com/in/patel-jay-mukeshkumar-218b5b238">
                            <img className='icon' src='https://cdn-icons-png.flaticon.com/128/145/145807.png'></img>
                        </a>
                    </span>
        </div>
      </div>   
    </>
  );
}