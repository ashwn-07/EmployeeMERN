import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box, Button, Container, Typography } from "@mui/material";
import axios from "axios";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const ViewEmployee = () => {
    const navx = useNavigate();
    const [Data, setData] = useState([]);
    const [Token] = useState(sessionStorage.getItem("usertoken"));

    useEffect(() => {
        axios.get(`http://localhost:5627/emp/employeelist/${Token}`)
            .then((response) => {
                setData(response.data.empdetails);
            })

            .catch((error) => {
                console.log(error.message);
                navx("/unoth");
            });
    }, []);

    return (
        <>
            <Header />
            <Container
                maxWidth="lg"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    paddingBottom: "10px",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: { sm: "100px", xs: "175px" },
                }}
            >
                <TableContainer sx={{ width: "80%", borderRadius: "1rem" }}>
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
                                    Designation&nbsp;
                                </TableCell>
                                <TableCell sx={{ color: "white" }} align="right">
                                    Salary&nbsp;
                                </TableCell>
                                <TableCell sx={{ color: "white" }} align="right">
                                    Location
                                </TableCell>
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
                                        {value.Designation}
                                    </TableCell>
                                    <TableCell sx={{ color: "white" }} align="right">
                                        {value.Salary}
                                    </TableCell>
                                    <TableCell sx={{ color: "white" }} align="right">
                                        {value.Location}&nbsp;&nbsp;&nbsp;&nbsp;
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </>
    );
};

export default ViewEmployee;
