import React, { useEffect, useState } from 'react';

import {Table} from "react-bootstrap"

function User() {
 
  const [data,setData]=useState();
  const [mode,setMode]=useState("online");

 

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((val) => {
      setData(val);
      localStorage.setItem("FetchData",JSON.stringify(val))  // show data on offline mode 
    })
    .catch((error) => {
       console.log(error);
       let output=localStorage.getItem("FetchData")
       setData(JSON.parse(output));
       setMode("offline");
    });
  }
  ,[])
  return (
    <div>
      {
        (mode==="offline") && (<div>You are Offline </div>)
      }
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>EMAIL</th>
          <th>ADDRESS</th>
        </tr>
      </thead>
      <tbody>
        {
          data && data.map((val)=>(
            <tr key={val.id}>
            <td>{val.id}</td>
            <td>{val.name}</td>
            <td>{val.email}</td>
            <td>{val.address.street}</td>
          </tr>
          ))
        }
        
      </tbody>
    </Table>
    </div>
  )
}

export default User
