import {
  CircularProgress,
  Box,
  Typography
} from "@mui/material";


function LoadingSpinner(){

return (

<Box

display="flex"

flexDirection="column"

alignItems="center"

justifyContent="center"

sx={{

mt:3

}}

>


<CircularProgress />


<Typography

variant="body2"

color="text.secondary"

sx={{

mt:2

}}

>

Analyzing employee details...

</Typography>


</Box>

);

}


export default LoadingSpinner;