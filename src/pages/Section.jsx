import React from "react";
import axios from "axios";
import {useEffect,useState} from "react";
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";
import {getSection} from "../Server/Addsection";



let Section = () => {
  let[section,setSection]=useState([])

  useEffect(()=>{
    loadUser();
  },[]);
 
  let loadUser = async () =>{
    let result =await axios.get(" http://localhost:8080/students/18/section/get");
    setSection(result.data);  
  }
  useEffect(()=>{
    getSection().then((data)=>{
      setSection(data)
      console.log(data)
    }).catch(error =>{
      console.log(error);
    })
  },[])


  return (
    <div className="container">
    <div className="py-4">
      <h1>Student details</h1>
      <table className="table table-dark">
        <thead className="thead-light">
          <tr>
            
            <th scope="col">sectionId</th>
            <th scope="col">sectionName</th>
            
            <td>
                 <Link className="btn btn-info" to="/Section/Add">Add section</Link>
                 </td>
          </tr>
        </thead> 
         <tbody>
            {section.map((Section ,Student) => (
              <tr>
                 <td>{Section.sectionId}</td>
                 <td>{Section.sectionName}</td>  
                 <td>{Student.studentName}</td>  
                  
              </tr>                         
            ))}
           
          </tbody>  
      </table>
    </div>
  </div>       
    
  )
};
export default Section;