import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom';
import Search from '../Common/Search';
import UserService from '../../Service/UserService';

const UserView = () => {
   const[User,setUser]=useState([]);
   const[search,setSearch]=useState("");
 
    useEffect(() =>{
        loadUser();
    },[])

   const loadUser=async()=>{
    await UserService.UserList().then((response)=>{
      setUser(response.data)
    })
  }

  


   


  return (
    <section>
      <div style={{position:"fixed",bottom:430,width:"100%"}}>
        <Search search={search}setSearch={setSearch}></Search>
      </div>
      <br/> 
      <table className="table table-striped  table-hover shadow">
        <thead>        
		         
        <Link
								className="btn btn-primary mx-2"
								to={"/add-user"}>
								Add User 
							</Link> 
             
            <tr className="text-center">

             <th >User Id</th>
             <th  >User name</th>
             <th  >User city</th>
             <th  >User email</th>
             <th  >User phoneno</th>

            </tr>
        </thead>
        <tbody className="text-center">
           
            {User
            .filter((st=>st.name.toLowerCase().includes(search.toLowerCase())))
            .map((Users)=>(
            <tr key={Users.id}>
                
                   <td>{Users.id}</td>
                
             
              <td>{Users.name}</td>
              <td>{Users.city}</td>
              <td>{Users.email}</td>
              <td>{Users.phoneno}</td>
             
              
           </tr> 
            ))}
           


        </tbody>
        
        </table> 
    </section>
  )
}

export default UserView
