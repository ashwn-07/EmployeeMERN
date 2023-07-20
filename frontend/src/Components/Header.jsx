import React from 'react'
import { Box, Button, Container, Typography} from "@mui/material";
import { useNavigate } from 'react-router-dom';

const Header = () => {
const nav = useNavigate();
    const HandleClick= async ()=>{
       await  sessionStorage.removeItem('usertoken')
       await  sessionStorage.removeItem('admintoken')
       await  sessionStorage.removeItem('role')
       nav('/')
          
    }
  return (
    <Box
    component="div"
    display={{ xs: "block", sm: "flex", md: "flex", lg: "flex" }}
    justifyContent="space-between"
    backgroundColor="#EEEE"
    position="fixed"
    height={{ xs: "165px", lg: "60px", md: "60px", sm: "60px" }}
    width="100%"
    top="0"
    boxShadow="0px 2px 12px 3px rgba(0, 0, 0, 0.2);"
    alignItems="center"
    zIndex="1"
>
    <Box padding="30px">
        <Typography
            variant="h4"
            color="#2B2730"
            fontFamily="sigmar"
            letterSpacing="1.5mm"
        >
            EMPLOYEE
        </Typography>
    </Box>
    <Box
        margin={{ xs: "0px", sm: "20px", md: "30px", lg: "30px" }}
        marginLeft={{ xs: "30px", sm: "30px" }}
        width={{ xs: "35%", sm: "15%", md: "10%", lg: "10%" }}
    >
        <Button fullWidth variant="contained" sx={{ backgroundColor: "#1D5D9B" }} onClick={HandleClick}>
            Log Out
        </Button>
    </Box>
</Box>
  )
}

export default Header