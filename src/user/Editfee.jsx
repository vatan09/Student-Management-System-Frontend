import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Edituser = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [Fee, set] = useState({
    totalfee: "",
    initalpaid: "",
    totalpaid: "",
    remfee: "",
  });

  const { totalfee, initalpaid ,totalpaid, remfee } = Fee;
  const onInputChange = e => {
    set({ ...Fee, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/students/18/fee/${id}`, Fee);
    navigate.push("/home");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/students/18/fee/${id}`);
    set(result.data);
  };
  return (
    <div className="container">
      <div className="w-45 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Update fee</h2>
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
          {/* {/* {/* <div className="form-group">
            <input
              type="text"
              className="form-control form-control"
              placeholder="totalfee"
              name="totalfee"
              value={totalfee}
              onChange={e => onInputChange(e)}
            /> */}
          {/* </div>  */}
          {/* <div className="form-group">
            <input
              type="text"
              className="form-control form-control"
              placeholder="initalFee"
              name="initalpaid"
              value={initalpaid}
              onChange={e => onInputChange(e)}
            />
          </div>  */}
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control"
              placeholder="totalpaid"
              name="totalpaid"
              value={totalpaid}
              onChange={e => onInputChange(e)}
            />
          </div>
          {/* <div className="form-group">
            <input
              type="text"
              className="form-control form-control"
              placeholder="remfee"
              name="remfee"
              value={remfee}
              onChange={e => onInputChange(e)}
            />
          </div> */}
          <button className="btn btn-warning btn-block">Update fee</button>
        </form>
      </div>
    </div>
  );
};

export default Edituser;