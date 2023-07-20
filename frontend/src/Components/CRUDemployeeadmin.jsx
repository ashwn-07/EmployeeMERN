import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import { Box, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Header from "./Header";
import Addemployee from "./Addemployee";

const CRUDemployeeadmin = () => {
    const navg = useNavigate();

    const [Data, setData] = useState([]);
    const [Update, SetUpdate] = useState(false);
    const [SingleVal, SetSingleVal] = useState({});
    const [Token] = useState(sessionStorage.getItem('admintoken'));

    useEffect(() => {
        console.log(Token)
      
        axios.get(`http://localhost:5627/emp/employeelistadmin/${Token}`).then((response) => {

        console.log(response)
            // {
            //     "_id": "64b781eaf3866690c71ff649",
            //     "EmployeeName": "Aswin S",
            //     "EmailId": "asw123@gmail.com",
           //       "password":*********
            //     "Designation": "SDE1",
            //     "Salary": 28000,
            //     "Location": "Kochi",
            //     "__v": 0
            // },
            setData(response.data.empdetails);
        })

        
            .catch((error) => {
                console.log(error.message);
                navg("/unoth");
            });
        
    }, []);

    const handleclick = () => {

        
        navg("/addemployee");
    };

    const deleteemployee = (id) => {
        axios
            .delete(`http://localhost:5627/emp/deleteemp/${id}`)

            .then((response) => {
                if (response.data.message === "Deleted Successfully") {
                    alert("Employee Deleted");
                    window.location.reload(false);
                } else {
                    console.log(response.data.message);
                }
            })

            .catch((error) => {
                console.log(`Cannot perform Deletion ${error}`);
            });
    };

    const updateemp = (val) => {
        try {
            SetUpdate(true);
            console.log(val)
          
            SetSingleVal(val);
        } catch (error) {
            console.log(error);
        }
    };

    let ogview = (
        <>
        <Header/>
        <Container
            maxWidth="lg"
            sx={{
                display: "flex",
                flexDirection: "column",
                paddingBottom: "10px",
                marginTop: { sm: "100px", xs: "175px" },
            }}
        >
            <Box display="flex" width="95%" padding="10px">
                <Box display="flex" width justifyContent="flex-end">
                    <Button variant="contained" color="success" onClick={handleclick}>
                        <PersonAdd /> Employee
                    </Button>
                </Box>
            </Box>

            <TableContainer sx={{ width: "100%", borderRadius: "1rem" }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{ backgroundColor: "#162043" }}>
                            <TableCell sx={{ color: "white" }} align="center">
                                Employee Name
                            </TableCell>
                            <TableCell sx={{ color: "white" }} align="right">
                                &nbsp;Email id
                            </TableCell>
                            <TableCell sx={{ color: "white" }} align="right">
                                &nbsp;Password
                            </TableCell>
                            <TableCell sx={{ color: "white" }} align="right">
                                Designation&nbsp;
                            </TableCell>
                            <TableCell sx={{ color: "white" }} align="right">
                                Salary&nbsp;
                            </TableCell>
                            <TableCell sx={{ color: "white" }} align="right">
                                Location
                            </TableCell>
                            <TableCell sx={{ color: "white" }} align="right"></TableCell>
                            <TableCell sx={{ color: "white" }} align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody sx={{ background: "linear-gradient(180deg, #c813a0, #5b2188)" }}>
                        {Data.map((value, index) => (
                            <TableRow
                                key={index}
                                sx={{
                                    "&:last-child td, &:last-child th": { border: 0 },
                                    color: "white",
                                }}
                            >
                                <TableCell sx={{ color: "white" }} component="th" scope="row">
                                    {value.EmployeeName}
                                </TableCell>
                                <TableCell sx={{ color: "white" }} align="right">
                                    {value.EmailId}
                                </TableCell>
                                <TableCell sx={{ color: "white" }} align="right">
                                    {value.password}
                                </TableCell>
                                <TableCell sx={{ color: "white" }} align="right">
                                    {value.Designation}
                                </TableCell>
                                <TableCell sx={{ color: "white" }} align="right">
                                    {value.Salary}
                                </TableCell>
                                <TableCell sx={{ color: "white" }} align="right">
                                    {value.Location}&nbsp;&nbsp;&nbsp;&nbsp;
                                </TableCell>
                                <TableCell sx={{ color: "white" }} align="right">
                                    <Button
                                        variant="contained"
                                        sx={{
                                            backgroundColor: "#1B6B93",
                                            boxShadow: "0px 2px 12px 3px rgba(0, 0, 0, 0.2);",
                                        }}
                                        onClick={() => updateemp(value)}
                                    >
                                        Update
                                    </Button>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                </TableCell>
                                <TableCell sx={{ color: "white" }} align="left">
                                    <Button
                                        variant="contained"
                                        color="error"
                                        sx={{
                                            boxShadow: "0px 2px 12px 3px rgba(0, 0, 0, 0.2);",
                                        }}
                                        onClick={() => deleteemployee(value._id)}
                                    >
                                        Delete
                                    </Button>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
        </>
    )

    if(Update)ogview= <Addemployee method= 'put' data={SingleVal}/>;

    return (
        ogview
    );
};

export default CRUDemployeeadmin;
