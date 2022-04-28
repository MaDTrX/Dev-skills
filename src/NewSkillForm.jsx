import "./NewSkillForm.css"
import React from 'react'

export default function NewSkillForm({addSkill}) {
    const [formData, setNewForm] = React.useState({
        name: "", 
        level: 3
    })
    function handleChange(evt) {

        setNewForm(fields => {
           return { 
            ...fields,
            [evt.target.name]: evt.target.value,
            [evt.target.level]: evt.target.value
           }
        })
    }
    function setSkill(evt) {
        evt.preventDefault()
        addSkill(skills => [...skills, formData]);
        setNewForm({
            name: "",
            level: 3
        })
        
    }

    return (
        <form className="NewSkillForm" onSubmit={setSkill}>
            <label>Skill
                <input onChange={handleChange} type="text" name="name" value={formData.name}></input>
            </label>
            <label>Level
                <select  onChange={handleChange} name="level" value={formData.level}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </label>
            <button type="submit">ADD SKILL</button>
        </form>
    )
}