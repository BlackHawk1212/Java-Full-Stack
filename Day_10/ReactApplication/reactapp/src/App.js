// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Employee from './component/Employee';
import EmployeeFunctionComponent from './component/EmployeeFunctionComponent';
import ClassComponentWithState from './component/ClassComponentWithState';
import FunctionComponent from './component/FunctionComponent';
import ClassComponent from './component/ClassComponent';
import FunctionComponentWithState from './component/FunctionComponentWithState';
import BootstrapDemo from './component/BootstrapDemo';
import ToastifyDemo from './component/ToastifyDemo';
import AddStudent from './component/AddStudent';
import AddStudentFunctionComponent from './component/AddStudentFunctionComponent';
import RouterDemo from './component/RouterDemo';
import FormUsingClassComponent from './component/bankmanagement/FormUsingClassComponent';
import ListOfUsers from './component/bankmanagement/ListOfUsers';
import AddUser from './component/bankmanagement/AddUser';
import FetchUsers from './component/bankmanagement/FetchUsers';

function App() {
  return (
    <React.Fragment>
      {/* <FunctionComponent />
      <ClassComponent /> */}
      {/* <EmployeeFunctionComponent id="1001" name="Nimesh" age="25" technology="Java" /> */}
      {/* <ClassComponentWithState/> */}
      {/* <FunctionComponentWithState /> */}
      {/* <BootstrapDemo /> */}
      {/* <ToastifyDemo /> */}
      {/* <AddStudent /> */}
      {/* <AddStudentFunctionComponent /> */}
      {/* <RouterDemo /> */}
      {/* <FormUsingClassComponent /> */}
      {/* <ListOfUsers /> */}
      {/* <AddUser /> */}
      <FetchUsers />
    </React.Fragment>
  )
}

export default App;