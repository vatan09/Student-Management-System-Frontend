import React, { useState } from "react";
import { useNavigate} from "react-router-dom";
import axios from 'axios'

let Addfee = () => {
  let navigate = useNavigate();
  const [fee, setfee] = useState({
    feeId: "",
    totalfee: "",
    intialpaid: "",
    totalpaid: "",
    remfee: "",
  });

  let { feeId,totalfee, intialpaid,totalpaid,remfee } = fee;
  let onInputChange = e => {
    setfee({ ...fee, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:8080/students/18/fee" ,fee);
    navigate.push("/home");
  };
  

    return (
        <div className="container">
          <div className="w-75 mx-auto shadow p-5">
            <h2 className="text-center mb-4">Add fee</h2>
            <form onSubmit={e => onSubmit(e)}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Your feeId"
                  name="feeId"
                  value={feeId}
                  onChange={e => onInputChange(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Your totalfee"
                  name="totalfee"
                  value={totalfee}
                  onChange={e => onInputChange(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Your intialpaid"
                  name="intialpaid"
                  value={intialpaid}
                  onChange={e => onInputChange(e)}
                />
              {/* </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter totalpaid"
                  name="totalpaid"
                  value={totalpaid}
                  onChange={e => onInputChange(e)}
                /> */}
              </div>
              {/* <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter remfee"
                  name="remfee"
                  value={remfee}
                  onChange={e => onInputChange(e)}
                />
              </div> */}
              <button className="btn btn-danger btn-block">Add Fee</button>
            </form>
          </div>
        </div>
      );
}
export default Addfee;