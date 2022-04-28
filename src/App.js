import React from 'react'
import SkillList from './SkillList';
import NewSkillForm from "./NewSkillForm"
import "./style.css"


function App() {
  const [skills, addSkill] = React.useState([
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 2 },
  ])
  
  return (
    <div className="App">
    <h1 className="teal-text">React Dev Skills</h1>
    <SkillList skills={skills} />
    <hr></hr>
    <NewSkillForm addSkill={addSkill} />
    </div>
  )
}

export default App;
