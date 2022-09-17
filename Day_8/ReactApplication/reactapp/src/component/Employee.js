import React, { Component } from 'react'
import Skill from './Skill'

export class Employee extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <b>{this.props.id}</b><br />
                <b>{this.props.name}</b><br />
                <b>{this.props.age}</b><br />
                <b><Skill technology="Java" /></b>
            </div>
        )
    }
}

export default Employee