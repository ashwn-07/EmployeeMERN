import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const Addemployee = (props) => {
    const nav = useNavigate();
    const [Data, SetData] = useState(props.data);

    useEffect(() => {
        if (!(sessionStorage.getItem("role") == "admin")) {
            nav("/unoth");
        }
    }, []);

    const HandleInput = (e) => {
        const { name, value } = e.target;

        SetData({ ...Data, [name]: value });
    };

    const HandleSubmit = (e) => {
        if (props.method === "post") {
            axios.post("http://localhost:5627/emp/addemployee/", Data)

            .then((response)=>{
              if(response.data.message==='Employee Added')
              {
                     alert(response.data.message)
                     nav('/adminview')
                     
              }
              else{
                alert('Employee was not Added')
                window.location.reload(false);
              }
            })

            .catch((error)=>{
              console.log(error)  
            })
        }

        if (props.method === "put") {
            axios.put(`http://localhost:5627/emp/editemployee/${Data._id}`, Data)
                .then((response) => {
                    console.log(response.data.message);
                    console.log("hiiiiii");
                    if (response.data.message === "Data Updated") {
                        alert("Data Updated");

                        window.location.reload(false);
                    } else {
                        alert(response.data.message);
                    }
                })

                .catch((error) => {
                    console.log("Error Updating", error);
                });
        }
    };
    return (
        <>
            <Header />

            <Grid
                container
                justifyContent="center"
                alignItems="center"
                marginTop={{ lg: "100px", md: "100px", sm: "100px", xs: "180px" }}
                spacing={4}
            >
                {/* <Container  maxWidth sx={{backgroundColor:"skyblue"}} > */}
                <Grid
                    item
                    lg={12}
                    xs={12}
                    sm={12}
                    md={12}
                    alignItems="center"
                    display={{ xs: "block", sm: "flex", md: "flex", lg: "flex" }}
                >
                    <Box fontSize={{ lg: "25px", xs: "20px" }} paddingLeft={{ xs: "20px" }}>
                        Employee Name
                    </Box>
                    <Container maxWidth="sm" sx={{ margin: "0" }}>
                        <TextField
                            id="outlined-basic"
                            name="EmployeeName"
                            value={Data.EmployeeName}
                            variant="outlined"
                            fullWidth
                            onChange={HandleInput}
                        />
                    </Container>
                </Grid>
                <Grid
                    item
                    lg={12}
                    xs={12}
                    sm={12}
                    md={12}
                    alignItems="center"
                    display={{ xs: "block", sm: "flex", md: "flex", lg: "flex" }}
                >
                    <Box
                        fontSize={{ lg: "25px", xs: "20px" }}
                        paddingLeft={{ xs: "20px" }}
                        marginRight={{ lg: "93px", md: "75px" }}
                    >
                        Email Id
                    </Box>
                    <Container maxWidth="sm" sx={{ margin: "0" }}>
                        <TextField
                            id="outlined-basic"
                            name="EmailId"
                            variant="outlined"
                            value={Data.EmailId}
                            fullWidth
                            onChange={HandleInput}
                        />
                    </Container>
                </Grid>
                <Grid
                    item
                    lg={12}
                    xs={12}
                    sm={12}
                    md={12}
                    alignItems="center"
                    display={{ xs: "block", sm: "flex", md: "flex", lg: "flex" }}
                >
                    <Box
                        fontSize={{ lg: "25px", xs: "20px" }}
                        paddingLeft={{ xs: "20px" }}
                        marginRight={{ lg: "76px", md: "40px" }}
                    >
                        Password
                    </Box>
                    <Container maxWidth="sm" sx={{ margin: "0" }}>
                        <TextField
                            id="outlined-basic"
                            name="password"
                            value={Data.password}
                            variant="outlined"
                            fullWidth
                            onChange={HandleInput}
                        />
                    </Container>
                </Grid>
                <Grid
                    item
                    lg={12}
                    xs={12}
                    sm={12}
                    md={12}
                    display={{ xs: "block", sm: "flex", md: "flex", lg: "flex" }}
                >
                    <Box
                        fontSize={{ lg: "25px", xs: "20px" }}
                        paddingLeft={{ xs: "20px" }}
                        marginRight={{ lg: "48px", md: "93px" }}
                    >
                        Designation
                    </Box>
                    <Container maxWidth="sm" sx={{ margin: "0" }}>
                        <TextField
                            id="outlined-basic"
                            name="Designation"
                            variant="outlined"
                            value={Data.Designation}
                            fullWidth
                            onChange={HandleInput}
                        />
                    </Container>
                </Grid>
                <Grid
                    item
                    lg={12}
                    xs={12}
                    sm={12}
                    md={12}
                    display={{ xs: "block", sm: "flex", md: "flex", lg: "flex" }}
                >
                    <Box
                        fontSize={{ lg: "25px", xs: "20px" }}
                        paddingLeft={{ xs: "20px" }}
                        marginRight={{ lg: "114px", md: "70px" }}
                    >
                        Salary
                    </Box>
                    <Container maxWidth="sm" sx={{ margin: "0" }}>
                        <TextField
                            id="outlined-basic"
                            name="Salary"
                            variant="outlined"
                            value={Data.Salary}
                            fullWidth
                            onChange={HandleInput}
                        />
                    </Container>
                </Grid>
                <Grid
                    item
                    lg={12}
                    xs={12}
                    sm={12}
                    md={12}
                    display={{ xs: "block", sm: "flex", md: "flex", lg: "flex" }}
                >
                    <Box
                        fontSize={{ lg: "25px", xs: "20px" }}
                        paddingLeft={{ xs: "20px" }}
                        marginRight={{ lg: "84px", md: "70px" }}
                    >
                        Location
                    </Box>
                    <Container maxWidth="sm" sx={{ margin: "0" }}>
                        <TextField
                            id="outlined-basic"
                            name="Location"
                            variant="outlined"
                            value={Data.Location}
                            fullWidth
                            onChange={HandleInput}
                        />
                    </Container>
                </Grid>
                <Grid item lg={12} xs={12} sm={12} md={12}>
                    <Box
                        display="flex"
                        justifyContent={{
                            lg: "flex-end",
                            xs: "center",
                            sm: "flex-end",
                            md: "flex-end",
                        }}
                        width={{ xs: "100%", lg: "50%", md: "50%", sm: "50%" }}
                    >
                        <Button variant="contained" color="success" onClick={HandleSubmit}>
                            Submit
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};

export default Addemployee;
