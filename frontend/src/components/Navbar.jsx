import {

  AppBar,

  Toolbar,

  Typography,

  Button,

  Box

} from "@mui/material";


import {

  Link

} from "react-router-dom";



function Navbar() {


return (

<AppBar

position="static"

elevation={2}

>


<Toolbar>


<Typography

variant="h6"

sx={{

flexGrow:1,

fontWeight:"bold"

}}

>

AI Employee Attrition

</Typography>



<Box>


<Button

color="inherit"

component={Link}

to="/"

>

Home

</Button>



<Button

color="inherit"

component={Link}

to="/prediction"

>

Prediction

</Button>



</Box>


</Toolbar>


</AppBar>


);


}


export default Navbar;