import React, { Component } from 'react'

export class Skill extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                {this.props.technology}
            </div>
        )
    }
}

export default Skill