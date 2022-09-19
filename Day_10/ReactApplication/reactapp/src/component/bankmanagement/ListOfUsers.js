import React, { Component } from 'react'
import ApiService from './ApiService'

export class ListOfUsers extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
    }
    componentDidMount() {
        ApiService.fetchAllUsers().then((result) => {
            this.setState({ users: result.data })
        })
    }
    render() {
        return (
            <div>
                <table className='table table-stripped table-bordered'>
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                    </thead>
                    <tbody>
                        {this.state.users.map(user =>
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>{user.email}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ListOfUsers