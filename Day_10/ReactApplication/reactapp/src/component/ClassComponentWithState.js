import { Button } from "bootstrap";
import React, { Component } from "react";

export class ClassComponentWithState extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
        // this.increment = this.increment.bind(this);
    }
    // increment = () => {
    //     this.setState({ count: this.state.count + 1 });
    // }
    render() {
        return (
            <center>
                <div>
                    <b>{this.state.count}</b>
                    <button onClick={() => this.setState({ count: this.state.count + 1 })}>Click</button>
                </div>
            </center>
        )
    }
}

export default ClassComponentWithState