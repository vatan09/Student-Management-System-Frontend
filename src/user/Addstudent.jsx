import React, { useState } from "react";
import { useNavigate} from "react-router-dom";
import axios from 'axios'

let Addstudent = () => {
  let navigate = useNavigate();
  const [Students, setStudents] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
  });

  let { id ,name, email,phone } = Students;
  let onInputChange = e => {
    setStudents({ ...Students, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:8080/students/" ,Students);
    navigate.push("/home");
  };
  

    return (
        <div className="container">
          <div className="p-3 mb-2 bg-dark text-white">
            <h2 className="text-danger mb-4">Add student</h2>
            <form onSubmit={e => onSubmit(e)}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control"
                  placeholder="id"
                  name="id"
                  value={id}
                  onChange={e => onInputChange(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control"
                  placeholder="Name"
                  name="name"
                  value={name}
                  onChange={e => onInputChange(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={e => onInputChange(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control"
                  placeholder="Mobile no"
                  name="phone"
                  value={phone}
                  onChange={e => onInputChange(e)}
                />
              </div>
              <button className="btn btn-warning btn-block">Add Student</button>
            </form>
          </div>
        </div>
      );
}
export default Addstudent;