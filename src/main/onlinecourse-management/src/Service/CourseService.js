import  { Component } from 'react'
import axios from 'axios';


const viewAllCourse="http://localhost:8088/GetAllCourse";
const DeleteCourse="http://localhost:8088/DeleteCourse/";
const viewCourses="http://localhost:8088/GetCourse/";
const addcourse="http://localhost:8088/CreateCourse";
class CourseService extends Component {
         
    AddCourse = (user)=>{
        return axios.post(addcourse,user);
    };
        
            CourseList=()=>{
                return axios.get(viewAllCourse)
             }
             DeleteCourse =(id)=>{
                return axios.delete(DeleteCourse+id);
            }
            ViewCourseId=(id)=>{
                return axios.get(viewCourses+id);
            }

    }
 
    export default  CourseService();