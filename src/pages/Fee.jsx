import React from "react";
import axios from "axios";
import {useEffect,useState} from "react";
import {useParams} from "react-router-dom";
import {getfee} from "../Server/FeeServer";
import {Link} from "react-router-dom";


let Fee = () => {

  let[fee,setFee]=useState([])

  useEffect(()=>{
    loadUser();
  },[]);
 
  let loadUser = async () =>{
    let result =await axios.get("http://localhost:8080/students/18/fee/get");
    setFee(result.data);  
  }
  const deleteFee = async feeId => {
    await axios.delete(`http://localhost:8080/students/fee/${feeId}`);
    loadUser();
  };

  useEffect(()=>{
    getfee().then((data)=>{
      setFee(data)
      console.log(data)
    }).catch(error =>{
      console.log(error);
    })
  },[])

  return (
    <div className="container">
      <div className="py-2">
        <h1>Fee information</h1>
        <table className="table table-dark">
          <thead className="thead-white">
            <tr>
              <th scope="col">feeId</th>
              <th scope="col">totalfee</th>
              <th scope="col">intialpaid</th>
              <th scope="col">totalpaid</th>
              <th scope="col">remfee</th>
              <th scope="col">action</th>
              <Link className="btn btn-warning" to="/Fee/add">Add Fee</Link>
            </tr>
          </thead> 
          { <tbody>
            {fee.map((Fee ,index) => (
              <tr>
                <th >{Fee.feeId}</th>
                <td>{Fee.totalfee}</td>
                <td>{Fee.intialpaid}</td>
                 <td>{Fee.totalpaid}</td>
                 <td>{Fee.remfee}</td>
                 <td>
                 <Link className="btn btn-success ps-2 " to={`/Fee/edit/${Fee.feeId}`}>edit</Link>
                 <Link className="btn btn-danger ps-2 " to="/Fee" onClick={() => deleteFee(Fee.feeId)}>del</Link>
                 </td>
                  
              </tr>                         
            ))}
          </tbody>  }
        </table>
       
      </div>
    </div>       
  )
};
export default Fee;