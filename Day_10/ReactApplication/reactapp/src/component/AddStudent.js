import React, { Component } from 'react'
import { validator } from 'validator'

class AddStudent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            stdname: '',
            stdemail: '',
            stdage: '',
            stdaddress: ''
        }
    }
    validate() {
        let nameError = ""
        let emailError = ""

        if (!this.state.stdname) {
            nameError = "Name is Required"
        }
        if (!this.state.stdemail) {
            emailError = "Email is Required"
        }
        else if (!validator.isEmail(this.state.stdemail)) {
            emailError = "Inavalid Email"
        }
        if (nameError || emailError) {
            this.setState({ nameError, emailError });
            return false;
        }
        return true;
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if (this.validate()) {
            let std = { stdname: this.state.stdname, stdage: this.state.stdage, stdemail: this.state.stdemail, stdaddress: this.state.stdaddress }
            console.log(std)
            alert(JSON.stringify(std))
            this.state({
                stdname: '',
                stdemail: '',
                stdage: '',
                stdaddress: ''
            })
            this.state({
                nameError: '',
                emailError: ''
            })
        }
    }
    render() {
        return (
            // <form onSubmit={this.handleSubmit}>
            //     <label>Student Name</label>
            //     <input type='text' onChange={()=>this.setState({stdname:this.state.stdname})}></input><br /><br />
            //     <label>Student Email</label>
            //     <input type='text' onChange={()=>this.setState({stdemail:this.state.stdemail})}></input><br /><br />
            //     <label>Student Age</label>
            //     <input type='text' onChange={()=>this.setState({stdage:this.state.stdage})}></input><br /><br />
            //     <label>Student Address</label>
            //     <input type='text' onChange={()=>this.setState({stdaddress:this.state.stdaddress})}></input><br /><br />
            //     <button type='submit' className='btn btn-primary'>SUBMIT</button>
            // </form>
            <form onSubmit={this.handleSubmit}>
                <label>Student Name</label>
                <input type='text' value={this.state.stdname} onChange={(event) => this.setState({ stdname: event.target.value })}></input><br />
                <div className='text-danger'>{this.state.nameError}</div>
                <label>Student Email</label>
                <input type='text' value={this.state.stdemail} onChange={(event) => this.setState({ stdemail: event.target.value })}></input><br />
                <div className='text-danger'>{this.state.emailError}</div>
                <label>Student Age</label>
                <input type='text' value={this.state.stdage} onChange={(event) => this.setState({ stdage: event.target.value })}></input><br />
                <label>Student Address</label>
                <input type='text' value={this.state.stdaddress} onChange={(event) => this.setState({ stdaddress: event.target.value })}></input><br />
                <button type='submit' className='btn btn-primary'>SUBMIT</button>
            </form>
        )
    }
}

export default AddStudent