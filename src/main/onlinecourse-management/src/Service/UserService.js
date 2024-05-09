import { Component } from 'react'
import axios from 'axios';

 

const viewAllUser="http://localhost:8088/GetAllUser";
const DeleteUser="http://localhost:8088/DeleteUser/";
const adduser="http://localhost:8088/CreateUser";

class UserService extends Component {
 
    AddUser = (user)=>{
        return axios.post(adduser,user);
    };


           UserList=()=>{
                return axios.get(viewAllUser)
             }
             Deleteuser =(id)=>{
                return axios.delete(DeleteUser+id);
            }


    }

    
  
export default UserService(); 