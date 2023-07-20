import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import ima from "./../Images/online-staff-management-software.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
    const [user, setuser] = useState({});

    const navigate = useNavigate();

    const inputchange = (e) => {
        setuser({ ...user, [e.target.name]: e.target.value });
       
    }
    const handleSubmit = () => {
        axios.post("http://localhost:5627/emp/login", user)
            .then((response) => {
                if (response.data.message === "Logged in as USER") {
                   
                    const token = response.data.token;
                    sessionStorage.setItem('usertoken',  token)
               

                    alert("login Sucessfull");
                    navigate("/employeelist");

                } else if (response.data.message === "Logged in as ADMIN") {

                    const token = response.data.token;
                    const role = response.data.user.role;
                    console.log(role)
                    console.log(token)
                    sessionStorage.setItem('admintoken',  token)
                    sessionStorage.setItem('role', role  )
                    alert("Logged in as Admin");
                    navigate("/adminview");
                }
                else
                {
                    alert('Invalid Credentials')
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }
    return (
        <>
            <Box display={{ lg: "flex", sm: "flex", xs: "block" }}>
                <Box
                    bgcolor="#6868AA"
                    height={{ lg: "100vh", xs: "50vh" }}
                    width={{ lg: "50%", xs: "100%" }}
                >
                    <Grid container>
                        <Grid item lg={12}>
                            <img src={ima} width="100%" alt="employee background" />
                        </Grid>
                    </Grid>
                </Box>
                <Box
                    bgcolor=""
                    display="flex"
                    alignItems="center"
                    width={{ lg: "50%", sx: "100%" }}
                    sx={{}}
                >
                    <Grid container spacing={2} textAlign="center" bgcolor="">
                        <Grid item lg={12} xs={12}>
                            <Typography
                                variant="h3"
                                fontFamily="'Russo One', sans-serif;"
                                sx={{
                                    backgroundcolor: "primary",
                                    backgroundImage: `linear-gradient(180deg, #020202, #1D3DB0)`,
                                    backgroundSize: "100%",
                                    backgroundRepeat: "repeat",
                                    backgroundClip: "text",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                Log in
                            </Typography>
                        </Grid>
                        <Grid item lg={12} xs={12}>
                            <Container bgcolor="grey" maxWidth="xs">
                                <TextField
                                    fullWidth
                                    id="outlined-basic"
                                    type="email"
                                    label="Email"
                                    name="email"
                                    variant="outlined"
                                    onChange={inputchange}
                                    sx={{ marginBottom: "35px" }}
                                />
                            </Container>
                        </Grid>
                        <Grid item lg={12} xs={12}>
                            <Container bgcolor="grey" maxWidth="xs">
                                <TextField
                                    fullWidth
                                    id="outlined"
                                    type="password"
                                    label="Password"
                                    name="password"
                                    variant="outlined"
                                    sx={{ marginBottom: "35px" }}
                                    onChange={inputchange}
                                />
                            </Container>
                        </Grid>
                        <Grid item lg={12} xs={12}>
                            <Button
                                sx={{
                                    backgroundColor: "#272751",
                                    width: "160px",
                                    borderRadius: "8px",
                                }}
                                variant="contained"
                                onClick={handleSubmit}
                            >
                                Log In
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    );
};

export default Login;
