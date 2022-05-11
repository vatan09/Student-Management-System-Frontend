import React from "react";
import axios from "axios";
import {useEffect,useState} from "react";
import {useParams} from "react-router-dom";
import {getStudents} from "../Server/Studentserver";
import {Link} from "react-router-dom";

let Student = () => {

  let[Students,setStudents]=useState([])

  useEffect(()=>{
    loadUser();
  },[]);
 
  let loadUser = async () =>{
    let result =await axios.get(" http://localhost:8080/students/");
    setStudents(result.data);  
  }
  const deleteUser = async id => {
   await axios.delete(`http://localhost:8080/students/${id}`);
   loadUser();
 };

  useEffect(()=>{
    getStudents().then((data)=>{
      setStudents(data)
      console.log(data)
    }).catch(error =>{
      console.log(error);
    })
  },[])

  return (
    <div className="container">
      <div className="py-2">
        <h1>Student information</h1>
        <table className="table table-dark">
          <thead className="thead-white">
            <tr>
              <th scope="col">id</th>
              <th scope="col">name</th>
              <th scope="col">email</th>
              <th scope="col">phone</th>
              <th scope="col">action</th>
              <Link className="btn btn-warning" to="/Student/add">Add Student</Link>
            </tr>
          </thead> 
          { <tbody>
            {Students.map((Student ,index) => (
              <tr>
                <th >{Student.id}</th>
                <td>{Student.name}</td>
                 <td>{Student.email}</td>
                 <td>{Student.phone}</td>
                 <td>
                 <Link className="btn btn-success ps-2 " to={`/Student/edit/${Student.id}`}>edit</Link>
                 <Link className="btn btn-danger ps-2 " to="/Student" onClick={() => deleteUser(Student.id)}>del</Link>
                 </td>
                  
              </tr>                         
            ))}
          </tbody>  }
        </table>
        <img src="./images/student1.jpeg" alt=''/>
        <img src="./images/student.jpeg" alt=''/>
        
        <img src="./images/student2.jpeg" alt=''/>
      </div>
    </div>       
  )
};
export default Student;