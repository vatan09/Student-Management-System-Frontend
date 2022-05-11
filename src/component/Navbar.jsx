import { toBeRequired } from "@testing-library/jest-dom/dist/matchers";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
      <div className="container">
        <img style={{ borderRadius: '50%', marginRight: '10px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd-5dYEvBFrixeT2i_rhqinIvVlGzpQ4erYw&usqp=CAU" width="90" height="90" alt="" />

        <Link to="/" className="navbar-brand">Student Management</Link>
        
        <div >
          <ul class="navbar-nav">
            <li className="nav-item ">
              <Link to="/student" className="nav-link active" > Student</Link>
            </li>
            <hr />
            <li className="nav-item ">
              <Link to="/address" className="nav-link active">Address</Link>
            </li>
            <li className="nav-item">
              <Link to="/project" className="nav-link active">Project</Link>
            </li>

            <li className="nav-item">
              <Link to="/section" className="nav-link active">Section</Link>
            </li>
            <li className="nav-item">
              <Link to="/fee" className="nav-link active">Fee</Link>
            </li>
            
          </ul>
        </div>
        
        
      </div>
    </nav>
  )
};

export default Navbar;