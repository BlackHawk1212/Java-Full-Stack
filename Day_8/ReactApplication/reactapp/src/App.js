import logo from './logo.svg';
import './App.css';
// import Employee from './component/Employee';
import EmployeeFunctionComponent from './component/EmployeeFunctionComponent';
import ClassComponentWithState from './component/ClassComponentWithState';
// import FunctionComponent from './component/FunctionComponent';
// import ClassComponent from './component/ClassComponent';
import FunctionComponentWithState from './component/FunctionComponentWithState';

function App() {
  return (
    <div>
      {/* <FunctionComponent />
      <ClassComponent /> */}
      {/* <EmployeeFunctionComponent id="1001" name="Nimesh" age="25" technology="Java" /> */}
      {/* <ClassComponentWithState/> */}
      <FunctionComponentWithState />
    </div>
  )
}

export default App;