import './App.css';
import Navbar from "./component/Navbar";
import Address from "./pages/Address";
import Project from "./pages/Project";
import Section from "./pages/Section";
import Student from "./pages/Sudent";
import StudentSection from "./pages/StudentSection";
import Addstudent from "./user/Addstudent";
import Editstudent from "./user/Editstudent";
import Addaddress from "./user/Addaddress";
import Addproject from "./user/Addproject";
import Addsection from "./user/Addsection";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Fee from './pages/Fee';
import Addfee from './user/Addfee';
import Editfee from './user/Editfee';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
        
          <Route exact={true} path={'/student'} element={<Student />} />
          <Route exact={true} path={'/address'} element={<Address />} />
          <Route exact={true} path={'/project'} element={<Project />} />
          <Route exact={true} path={'/section'} element={<Section />} />
          <Route exact={true} path={'/fee'} element={<Fee />} />
          <Route exact={true} path={'/studentSection'} element={<StudentSection />} />
          <Route exact={true} path={'/student/add'} element={<Addstudent />} />
          <Route exact={true} path={'/Student/edit/:id'} element={<Editstudent />} />
          <Route exact={true} path={'/fee/add'} element={<Addfee />} />
          <Route exact={true} path={'/fee/edit/:id'} element={<Editfee />} />
          <Route exact={true} path={'/Address/add/'} element={<Addaddress />} />
          <Route exact={true} path={'/project/add/'} element={<Addproject />} />
          <Route exact={true} path={'/section/add/'} element={<Addsection />} />
          {<Route
            path="/"
            element={
              <div className="container">
                <img src="./images/student-management-system-2.jpg" alt=''/>
                <img src="./images/sms.jpeg" alt=''/>
                
              </div>

            }
          />}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
