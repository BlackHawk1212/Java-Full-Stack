import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
// import HomeComponent from './HomeComponent'
// import AboutComponent from './AboutComponent'
// import ContactComponent from './ContactComponent'
import NotFound from './NotFound'
import AddStudent from './AddStudent'
import StudentList from './StudentList'

function RouterDemo() {
    return (
        // <Router>
        //     <Link to="/home">Home</Link><br/>
        //     <Link to="/about">About</Link><br/>
        //     <Link to="/contact">contact Us</Link><br/>
        //     <Routes>
        //         <Route path="/home" element={<HomeComponent />}></Route>
        //         <Route path="/about" element={<AboutComponent />}></Route>
        //         <Route path="/contact" element={<ContactComponent />}></Route>
        //         <Route path="*" element={<NotFound />}></Route>
        //     </Routes>
        // </Router>
        <Router>
        <Link to="/addStudent">Add Student</Link><br/>
        <Link to="/fetchAllStudent">Student List</Link><br/>
        <Routes>
            <Route path="/addStudent" element={<AddStudent />}></Route>
            <Route path="/fetchAllStudent" element={<StudentList />}></Route>
            <Route path="*" element={<NotFound />}></Route>
        </Routes>
    </Router>
    )
}

export default RouterDemo