import React, { Component } from 'react'
import { validator } from 'validator'
import ApiService from './ApiService'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class FormUsingClassComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            age: ''
        }
    }
    validate() {
        let nameError = "";
        let ageError = "";
        let emailError = ""

        if (!this.state.name) {
            nameError = "Name is Required";
        }
        if (!this.state.email) {
            emailError = "Email is Required";
        }
        if (!this.state.age) {
            ageError = "Age is Required";
        }
        else if (!validator.isEmail(this.state.email)) {
            emailError = "Inavalid Email";
        }
        if (nameError || emailError || ageError) {
            this.setState({ nameError, emailError, ageError });
            return false;
        }
        return true;
    }
    saveForm = (event) => {
        event.preventDefault();
        if (this.validate()) {
            let user = { name: this.state.name, age: this.state.age, email: this.state.email }
            console.log(user)
            ApiService.saveUser(user);
            this.state({
                name: '',
                email: '',
                age: ''
            })
            this.state({
                nameError: '',
                emailError: '',
                ageError: ''
            })
        }
    }
    render() {
        return (
            <form onSubmit={this.saveForm}>
                <label>Name:</label>
                <input type='text' value={this.state.name} onChange={(event) => this.setState({ name: event.target.value })}></input><br />
                <div className='text-danger'>{this.state.nameError}</div>
                <label>Email:</label>
                <input type='text' value={this.state.email} onChange={(event) => this.setState({ email: event.target.value })}></input><br />
                <div className='text-danger'>{this.state.emailError}</div>
                <label>Age:</label>
                <input type='text' value={this.state.age} onChange={(event) => this.setState({ age: event.target.value })}></input><br />
                <div className='text-danger'>{this.state.ageError}</div>
                <button type='submit' className='btn btn-primary'>SUBMIT</button>
                <ToastContainer />
            </form>
        )
    }
}

export default FormUsingClassComponent