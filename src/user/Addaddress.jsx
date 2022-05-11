import React, { useState } from "react";
import { useNavigate} from "react-router-dom";
import axios from 'axios'

let Addaddress = () => {
  let navigate = useNavigate();
  const [address, setAddress] = useState({
    addressId: "",
    city: "",
    country: "",
    street: "",
  });

  let { addressId,city, country,street } = address;
  let onInputChange = e => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:8080/students/18/address" ,address);
    navigate.push("/home");
  };
  

    return (
        <div className="container">
          <div className="w-75 mx-auto shadow p-5">
            <h2 className="text-center mb-4">Add Address</h2>
            <form onSubmit={e => onSubmit(e)}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Your id"
                  name="addressId"
                  value={addressId}
                  onChange={e => onInputChange(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Your city"
                  name="city"
                  value={city}
                  onChange={e => onInputChange(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Your country"
                  name="country"
                  value={country}
                  onChange={e => onInputChange(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter steet"
                  name="street"
                  value={street}
                  onChange={e => onInputChange(e)}
                />
              </div>
              <button className="btn btn-success btn-block">Add User</button>
            </form>
          </div>
        </div>
      );
}
export default Addaddress;