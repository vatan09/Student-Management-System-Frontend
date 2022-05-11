import React from "react";
import axios from "axios";
import {useEffect,useState} from "react";
import {useParams} from "react-router-dom";
import {getproject} from "../Server/ProjectServer";
import {Link} from "react-router-dom";

let Project = () => {

  let[project,setproject]=useState([])

  useEffect(()=>{
    loadUser();
  },[]);
 
  let loadUser = async () =>{
    let result =await axios.get("http://localhost:8080/students/18/project");
    setproject(result.data);  
  };
  /*const deleteUser = async id => {
    await axios.delete('http://localhost:8080/students/${id}/address/');
    loadUser();
  };*/

  useEffect(()=>{
    getproject().then((data)=>{
      setproject(data)
      console.log(data)
    }).catch(error =>{
      console.log(error);
    })
  },[])
  return (
    <div className="container">
      
      <div className="py-4">
        <h1>Project details
        <img src="./images/student1.jpeg" alt=''/>
        </h1>
        <table className="table table-dark">
          <thead className="thead-light">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Title</th>
              <th scope="col">Tech</th>
              <th scope="col">maxMarks</th>
              <th scope="col">mentorName</th>
              <td>
              <Link className="btn btn-warning" to="/project/Add">Add project</Link>
              </td>
            </tr>
            </thead>  
            <tbody>
                {project.map((ProjectDetails ,index) => (  
                  <tr>
                    <img src="./images/project.jpeg" alt=''/>
                    <img src="./images/student1.jpeg" alt=''/>
                      <th >{ProjectDetails.projectId}</th>
                      <th>{ProjectDetails.projectTitle}</th>
                      <th>{ProjectDetails.projectTech}</th>
                      <th>{ProjectDetails.maxMarks}</th>
                      <th>{ProjectDetails.mentorName}</th> 
                      
                  </tr>                         
                ))}
          </tbody>  
        </table>
        
      </div>
    </div>       
  )
};
export default Project;