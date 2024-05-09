
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import UserService from '../../Service/UserService';

const AddUser = () => {

    let navigate=useNavigate();
    const[user, setUser] = useState({
              
              name:"",
              city:"",
              email:"",
              phoneno:""

    })

    
const{name,city,email,phoneno}=user;

const handleInputChange=(e)=>{
    setUser({...user,[e.target.name]: e.target.value});
};


const saveuser=async(e)=>{
    e.preventDefault();
    await UserService.AddUser(user).then((response)=>{
      setUser(response.data)
      alert("success")
      navigate("/view-user");
    })
  }





  return (

    
    <div className="col-5 py-2 px-5 offset-3 shadow">
      <h2 className="mt-5 offset-3"> Add User</h2>
      <form onSubmit={(e) => saveuser(e)}>
          

        <div className="input-group mb-5">
            <label
            className="input-group-text" htmlFor="name" >Name:</label>
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
            className="input-group-text" htmlFor="description" >city:</label>
            <input
            className="form-control col-sm-6"
             type="text" 
             name="city"
             id="city"
             required
             value={city}
             onChange={(e)=>handleInputChange(e)}
            />
        </div>

        <div className="input-group mb-5">
            <label
            className="input-group-text" htmlFor="description" >email:</label>
            <input
            className="form-control col-sm-6"
             type="text" 
             name="email"
             id="email"
             required
             value={email}
             onChange={(e)=>handleInputChange(e)}
            />
        </div>

        <div className="input-group mb-5">
            <label
            className="input-group-text" htmlFor="description" >Phone number:</label>
            <input
            className="form-control col-sm-6"
             type="text" 
             name="phoneno"
             id="phoneno"
             required
             value={phoneno}
             onChange={(e)=>handleInputChange(e)}
            />
        </div>
 
        <div className="row mb-5">
        <div className="col-sm-2">
          <div   data-testid="Adduserbtn"> 
            <button
            type="submit"
            name="save"
            className="btn btn-outline-success btn-lg" >Add</button> </div>
        </div> 

        <div className="col-sm-2">
        <div   data-testid="cancelbtn">
            <Link to="/view-user"
            type="submit"
            className="btn btn-outline-warning btn-lg">Cancel</Link></div>s
        </div>
        </div>


        


 
      </form>
    </div>
  )
}

export default AddUser
