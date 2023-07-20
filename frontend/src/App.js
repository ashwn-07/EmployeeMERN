import Addemployee from "./Components/Addemployee";
import CRUDemployeeadmin from "./Components/CRUDemployeeadmin";
import Error401 from "./Components/Error401";
import Login from "./Components/Login";
import ViewEmployee from "./Components/ViewEmployee";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
      
        <Routes>
          
            <Route path="/" element={<Login />} />
            <Route path="/employeelist" element={<ViewEmployee />} />
            <Route path="/adminview" element={<CRUDemployeeadmin />} />
            <Route
                path="/addemployee"
                element={
                    <Addemployee
                        method="post"
                        data={{
                            EmployeeName: "",
                            EmailId: "",
                            password: "",
                            Designation: "",
                            Salary: "",
                            Location: "",
                        }}
                    />
                 
                }
            />
   <Route path="/unoth" element={<Error401/>} />
        </Routes>
    );
}

export default App;
