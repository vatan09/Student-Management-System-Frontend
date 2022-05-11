import React from "react";
import axios from "axios";
import {useEffect,useState} from "react";

import {getAddress} from "../Server/Addressservice";
import {Link} from "react-router-dom";


let Address = () => {
  let[address,setAddress]=useState([])

  useEffect(()=>{
    loadUser();
  },[]);
 
  let loadUser = async () =>{
    let result =await axios.get(" http://localhost:8080/students/18/address");
    setAddress(result.data);  
  }
  useEffect(()=>{
    getAddress().then((data)=>{
      setAddress(data)
      console.log(data)
    }).catch(error =>{
      console.log(error);
    })
  },[])
  return (
    <div className="container">
    <div className="py-4">
      
      <h1><img src="./images/address.jpeg" alt=''/></h1>
      <table className="table table-dark">
        <thead className="thead-success">
          <tr>
            <th scope="col">addressId</th>
            <th scope="col">city</th>
            <th scope="col">country</th>
            <th scope="col">street</th>
            <td>
                 <Link className="btn btn-info" to="/Address/Add">Add Address</Link>
                 </td>
          </tr>
        </thead> 
         <tbody>
         
            {address.map((Address ,index) => (
              <tr>
                <th >{Address.addressId}</th>
                <td>{Address.city}</td>
                 <td>{Address.country}</td>
                 <td>{Address.street}</td> 
              </tr>                         
            ))}
          </tbody>  
      </table>
      
    </div>
  </div>       
    
  )
};
export default Address;