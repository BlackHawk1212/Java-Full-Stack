import { useState } from "react"

export default function AddStudentFunctionComponent() {
    const [stdname, setName] = useState('');
    const [stdage, setAge] = useState('');
    const [stdemail, setEmail] = useState('');
    const [stdaddress, setAddress] = useState('');

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log("Name: ", stdname, "Email: ", stdemail, "Age: ", stdage, "Address: ", stdaddress);
        // alert(JSON.stringify(stdname))  //stdname:"Nimesh"
    }
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
        <form onSubmit={handleSubmit}>
            <label>Student Name</label>
            <input type='text' onChange={(event) => setName({ stdname: event.target.value })}></input><br /><br />
            <label>Student Email</label>
            <input type='text' onChange={(event) => setEmail({ stdemail: event.target.value })}></input><br /><br />
            <label>Student Age</label>
            <input type='text' onChange={(event) => setAge({ stdage: event.target.value })}></input><br /><br />
            <label>Student Address</label>
            <input type='text' onChange={(event) => setAddress({ stdaddress: event.target.value })}></input><br /><br />
            <button type='submit' className='btn btn-primary'>SUBMIT</button>
        </form>
    )
}