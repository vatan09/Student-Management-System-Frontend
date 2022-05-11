import React, { useState } from "react";
import { useNavigate} from "react-router-dom";
import axios from 'axios'

let Addproject = () => {
  let navigate = useNavigate();
  const [project, setproject] = useState({
    "Id": "",
    "Title": "",
    "Tech":"",
    "maxMarks": "",
    "mentorName": "",
  });

  let { projectId,projectTitle,projectTech,maxMarks,mentorName } =project;
  let onInputChange = e => {
    setproject({ ...project, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:8080/students/18/project" ,project);
    navigate.push("/home");
  };
  

    return (
        <div className="container">
          <div className="w-75 mx-auto shadow p-5">
            <h2 className="text-center mb-4">Student project</h2>
            <form onSubmit={e => onSubmit(e)}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control"
                  placeholder="id"
                  name="projectId"
                  value={projectId}
                  onChange={e => onInputChange(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control"
                  placeholder="Give title"
                  name="projectTitle"
                  value={projectTitle}
                  onChange={e => onInputChange(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control"
                  placeholder="Mention tech"
                  name="projectTech"
                  value={projectTech}
                  onChange={e => onInputChange(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control"
                  placeholder="Marks"
                  name="maxMarks"
                  value={maxMarks}
                  onChange={e => onInputChange(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control"
                  placeholder="Mentor"
                  name="mentorName"
                  value={mentorName}
                  onChange={e => onInputChange(e)}
                />
              </div>
              <button className="btn btn-warning btn-block">Add project</button>
            </form>
          </div>
        </div>
      );
}
export default Addproject;