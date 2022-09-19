import { TableBody, TableHead, TableRow, TableCell, Table } from '@material-ui/core'
import React, { useEffect, useState } from 'react';
import ApiService from './ApiService';
import JsonService from './JsonService';
import {useNavigate} from 'react-router';

function FetchUsers() {
    const [user, setUser] = useState([]);   //State Variable
    let navigate=useNavigate();
    useEffect(() => {   //Constructor
        getUsers();
    }, [])
    const getUsers = async () => {
        const response = await JsonService.getAllUsers();
        // console.log(response.data);
        setUser(response.data);
    }
    const editUser = (id) => {
        window.localStorage.setItem("id", id);
        navigate(`/edit-user/${id}`);
    }
    const deleteUser = (id) => {
        ApiService.deleteUser(id).then((res) => {
            setUser(user.filter((user) => user.id !== id));
            //toast.success("Delete Successfully!!");
            navigate("/fetchUser")
        })
    }
    return (
        <Table className='table table-stripped table-boarded'>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell>Email</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    user.map((data) => {
                        <TableRow>
                            <TableCell>{data.id}</TableCell>
                            <TableCell>{data.username}</TableCell>
                            <TableCell>{data.age}</TableCell>
                            <TableCell>{data.email}</TableCell>
                            <td>
                                <button className="btn btn-success" onClick={() => deleteUser(user.id)}> Delete</button>
                                <button className="btn btn-success" onClick={() => editUser(user.id)}> Edit</button>
                            </td>

                        </TableRow>
                    })
                }
            </TableBody>
        </Table>
    )
}

export default FetchUsers