import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Edituser = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [Students, setStudents] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const { name, email ,phone } = Students;
  const onInputChange = e => {
    setStudents({ ...Students, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/students/${id}`, Students);
    navigate.push("/home");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/students/${id}`);
    setStudents(result.data);
  };
  return (
    <div className="container">
      <div className="w-45 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Update student</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control"
              placeholder="Bookid"
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
          <button className="btn btn-warning btn-block">Update student</button>
        </form>
      </div>
    </div>
  );
};

export default Edituser;