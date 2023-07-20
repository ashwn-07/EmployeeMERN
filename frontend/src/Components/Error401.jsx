import { Box, Typography } from '@mui/material'
import React from 'react'

const Error401 = () => {
  return (
    <Box display={{xs:"block", lg:"flex"}} alignItems="center" justifyContent="center"  width="100%" height="100vh" >
        <Box fontSize={{lg:"150px"}} color="grey"> Error 401</Box><Box fontSize="28px">Unauthorised:<Typography variant="h4">Access Denied!</Typography></Box>
        </Box>
  )
}

export default Error401