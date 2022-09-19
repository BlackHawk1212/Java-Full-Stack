import React from 'react'
// import Skill from './Skill'
import SkillFunctionComponent from './SkillFunctionComponent'

function EmployeeFunctionComponent(props) {
    return (
        <div>
            <b>{props.id}</b><br />
            <b>{props.name}</b><br />
            <b>{props.age}</b><br />
            <b><SkillFunctionComponent technology={props.technology} /></b>
        </div>
    )
}

export default EmployeeFunctionComponent