
import React, {  useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import CourseService from '../../Service/CourseService';

const AddCourse = () => {

    let navigate=useNavigate();
    const[course, setCourse] = useState({
              
              name:"",
              type:""

    }) 

    
const{name,type}=course;

const handleInputChange=(e)=>{
    setCourse({...course,[e.target.name]: e.target.value});
};

 
const savecourse=async(e)=>{
    e.preventDefault();
    await CourseService.AddCourse(course).then((response)=>{
      setCourse(response.data)
      alert("success")
      navigate("/view-course");
    })
  }


 


  return (

    
    <div className="col-5 py-2 px-5 offset-3 shadow">
      <h2 className="mt-5 offset-3"> Add Course Details</h2>
      <form onSubmit={(e) => savecourse(e)}>
          

        <div className="input-group mb-5">
            <label
            className="input-group-text" htmlFor="name">Name:</label>
            <input
            className="form-control col-sm-6"
             type="text" 
             name="name"
             id="name"
             required
             value={name}
             onChange={(e)=>handleInputChange(e)}
            />
        </div>

        <div className="input-group mb-5">
            <label
            className="input-group-text" htmlFor="description">Type:</label>
            <input
            className="form-control col-sm-6"
             type="text" 
             name="type"
             id="type"
             required
             value={type}
             onChange={(e)=>handleInputChange(e)}
            />
        </div>


        <div className="row mb-5">
        <div className="col-sm-2">
            <button
            type="submit"
            name="save"
            className="btn btn-outline-success btn-lg">Add</button>
        </div> 

        <div className="col-sm-2">
            <Link to="/view-course"
            type="submit"
            className="btn btn-outline-warning btn-lg">Cancel</Link>
        </div>
        </div>


        



      </form>
    </div>
  )
}

export default AddCourse
