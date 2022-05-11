import React, { useState } from "react";
import { useNavigate} from "react-router-dom";
import axios from 'axios'

let Addsection = () => {
  let navigate = useNavigate();
  const [section, setSection] = useState({
    sectionId :"",
    sectionName:"",
  });

  let { sectionId,sectionName } =section;
  let onInputChange = e => {
    setSection({ ...section, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:8080/students/9/section" ,section);
    navigate.push("/home");
  };
  

    return (
        <div className="container">
          <div className="w-75 mx-auto shadow p-5">
            <h2 className="text-center mb-4">Add section-details</h2>
            <form onSubmit={e => onSubmit(e)}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Your id"
                  name="sectionId"
                  value={sectionId}
                  onChange={e => onInputChange(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Your sec-name"
                  name="sectionName"
                  value={sectionName}
                  onChange={e => onInputChange(e)}
                />
              </div>
              
              <button className="btn btn-primary btn-block">Add section</button>
            </form>
          </div>
        </div>
      );
}
export default Addsection;