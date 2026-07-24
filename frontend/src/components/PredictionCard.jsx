import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  LinearProgress,
  Divider
} from "@mui/material";


function PredictionCard({ result }) {


const isHighRisk =
result.prediction === "Leave";



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

Prediction Result

</Typography>



<Divider sx={{mb:3}} />



<Box

display="flex"

alignItems="center"

gap={2}

mb={3}

>


<Typography

variant="h6"

>

Employee Status:

</Typography>



<Chip

label={
isHighRisk
?
"High Risk - Leave"
:
"Low Risk - Stay"
}

color={
isHighRisk
?
"error"
:
"success"
}

sx={{
fontWeight:"bold"
}}

/>


</Box>




<Typography

variant="h6"

>

Attrition Probability

</Typography>



<Typography

variant="h3"

fontWeight="bold"

sx={{
my:2
}}

>

{

(result.probability * 100)
.toFixed(2)

}%

</Typography>



<LinearProgress

variant="determinate"

value={
result.probability * 100
}

color={
isHighRisk
?
"error"
:
"success"
}

sx={{

height:10,

borderRadius:5

}}

/>



<Box

mt={4}

>


<Typography>

<strong>Risk Level:</strong>{" "}

{result.risk_level}

</Typography>



<Typography

mt={1}

>

<strong>Priority:</strong>{" "}

{result.priority}

</Typography>



</Box>




<Divider

sx={{
my:3
}}

/>



<Typography

variant="h6"

fontWeight="bold"

>

Recommended HR Action

</Typography>



<Typography

color="text.secondary"

mt={1}

>

{result.hr_action}

</Typography>



</CardContent>


</Card>


);

}


export default PredictionCard;