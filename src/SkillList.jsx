import SkillListItem from "./SkillListItem"


export default function SkillList({skills}) {
    const skillListItem = skills.map((skill, idx) => <SkillListItem skill={skill} key={idx}/>)
    return (
        <ul className="padding-0">
            {skillListItem}
        </ul>
    )
}