
import './App.css'; 
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import NavBar from './Component/Common/NavBar';
import { Home } from './Home';
import EnrollmentView from './Component/System/EnrollmentView';
import CourseView from './Component/System/CourseView';
import UserView from './Component/System/UserView';
import AddEnrollment from './Component/System/AddEnrollment';
import AddUser from './Component/System/AddUser';
import AddCourse from './Component/System/AddCourse';


function App() {
  return (
    <main className="contanier-fluid">
      
    <Router>
    <NavBar/>
       <Routes>

         <Route exact path="/" element={<Home />}></Route>
         <Route exact path="/view-enroll" element={<EnrollmentView/>}></Route>
         <Route exact path="/add-enrollment" element={<AddEnrollment/>}></Route>

         <Route exact path="/view-Course" element={<CourseView />}></Route>
         <Route exact path="/add-Course" element={<AddCourse />}></Route>
         <Route exact path="/view-course/:id" element={<CourseView/>}></Route>

         <Route exact path="/view-User" element={<UserView/>}></Route>
         <Route exact path="/add-user" element={<AddUser/>}></Route> 
          
       </Routes>



    </Router>

</main>
  );
}

export default App;
