import React from 'react'
import "./App.css";
const Project = ({projectItem}) => {
    const {name, description, skills, github, linkedIn,hrefer} = projectItem;
    console.log(projectItem.skills);
    
    return (
      <button className='probutton'>
        <a className='prolink' target="_blank" href={hrefer}>
        <div className="card">
            <h2>{name}</h2>
            <p>{description}</p>
            <div className="skillContainer">
                {skills.map(skill=>(
                  <span className="skills">{skill}</span>
                ))}
            </div>
          
           
        </div>
          </a>
        <div>
        <span className="projectLink">
                        <a className="image" href={github}>
                            <img className='icon' src="https://cdn-icons-png.flaticon.com/128/733/733553.png"></img>
                        </a>
                    </span>
                    <span>
                        <a className="image" href={linkedIn}>
                            <img className='icon' src='https://cdn-icons-png.flaticon.com/128/145/145807.png'></img>
                        </a>
                    </span></div>
        </button>
    );
}

export default Project