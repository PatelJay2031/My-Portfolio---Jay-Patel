import React from 'react';
import Project from './Project';


import "./App.css";
const projectData = [

  {
    hrefer:"https://game-jay-patel.jay2031.repl.co/",
    name:"Project 1",
    description:"This project contains a game in which one or more persons can participate and won the game.",
    skills: ['HTML','CSS','JS'],

},
  
  {
     hrefer:" https://gitapi-jay-patel.jay2031.repl.co/",
    name:"Project 2",
    description:"This is api project in which all details of git users is available with thier image",
    skills:['AI','ML','Reactjs'],
    
},

];

const ProjectContainer = () =>{
  
    return (
        <div className="projectContainer">
            {
                projectData.map(projectItem=>{
                    return <Project projectItem={projectItem}/>
                })
            }
        </div>
    );
 }

export default ProjectContainer;