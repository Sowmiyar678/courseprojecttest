import  { Component } from 'react'
import axios from 'axios';


const viewAllEnroll="http://localhost:8088/GetAllEnroll";
const DeleteEnroll="http://localhost:8088/DeleteEnroll/";
const AddEnroll="http://localhost:8088/CreateEnroll";
const IdUser="http://localhost:8088/GetUserId";
const IdCourse="http://localhost:8088/GetCourseId";

const AutoId="http://localhost:8088/AutoPop";
const AutocourseId="http://localhost:8088/courseAutoPop";
class EnrollService extends Component {
 
             


           EnrollList=()=>{
                return axios.get(viewAllEnroll)
             }
             AddEnrollment = (Enrollment)=>{
                return axios.post(AddEnroll,Enrollment);
            };
             DeleteEnroll =(id)=>{
                return axios.delete(DeleteEnroll+id);
            }

            
            //id populate
            UserId=()=>{
                return axios.get(IdUser);
            }
            CourseId=()=>{
                return axios.get(IdCourse);
            }

            FindAllId=()=>{
                return axios.get(AutoId);
            }

            FindAllcourseId=()=>{
                return axios.get(AutocourseId);
            }

    }

    
  
export default EnrollService(); 