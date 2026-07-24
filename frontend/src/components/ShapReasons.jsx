import {
  Card,
  CardContent,
  Typography,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip
} from "@mui/material";


function ShapReasons({ reasons }) {


if(!reasons || reasons.length === 0){

return null;

}



return (

<Card

elevation={3}

sx={{

mt:3,

borderRadius:3

}}

>


<CardContent>


<Typography

variant="h5"

fontWeight="bold"

gutterBottom

>

Why This Prediction?

</Typography>



<Typography

color="text.secondary"

sx={{
mb:3
}}

>

Top factors that influenced the Machine Learning model prediction.

</Typography>



<Divider sx={{mb:3}} />




<TableContainer

component={Paper}

>


<Table>


<TableHead>

<TableRow>


<TableCell>

<strong>Feature</strong>

</TableCell>


<TableCell>

<strong>Impact</strong>

</TableCell>


<TableCell>

<strong>SHAP Value</strong>

</TableCell>


</TableRow>

</TableHead>



<TableBody>


{

reasons.map((reason,index)=>(


<TableRow

key={index}

>


<TableCell>

{reason.feature}

</TableCell>



<TableCell>


<Chip

label={reason.impact}

color={
reason.impact.toLowerCase()
.includes("high")
?
"error"
:
"success"
}

size="small"

/>


</TableCell>



<TableCell>


{

reason.shap_value > 0

?

`+${reason.shap_value.toFixed(3)}`

:

reason.shap_value.toFixed(3)

}


</TableCell>



</TableRow>


))


}



</TableBody>


</Table>


</TableContainer>



</CardContent>


</Card>


);


}


export default ShapReasons;