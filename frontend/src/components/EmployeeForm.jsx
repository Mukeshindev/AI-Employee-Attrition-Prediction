import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Grid,
  Button,
  Typography,
  Box,
  MenuItem
} from "@mui/material";


import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


import { useState } from "react";


import api from "../api/api";


import LoadingSpinner from "./LoadingSpinner";
import PredictionCard from "./PredictionCard";
import ShapReasons from "./ShapReasons";
import RecommendationCard from "./RecommendationCard";



function EmployeeForm() {


const initialFormData = {

Age:"",
BusinessTravel:"",
DailyRate:"",
Department:"",
DistanceFromHome:"",
Education:"",
EducationField:"",
EnvironmentSatisfaction:"",
Gender:"",
HourlyRate:"",
JobInvolvement:"",
JobLevel:"",
JobRole:"",
JobSatisfaction:"",
MaritalStatus:"",
MonthlyIncome:"",
MonthlyRate:"",
NumCompaniesWorked:"",
OverTime:"",
PercentSalaryHike:"",
PerformanceRating:"",
RelationshipSatisfaction:"",
StockOptionLevel:"",
TotalWorkingYears:"",
TrainingTimesLastYear:"",
WorkLifeBalance:"",
YearsAtCompany:"",
YearsInCurrentRole:"",
YearsSinceLastPromotion:"",
YearsWithCurrManager:""

};



const [formData,setFormData] =
useState(initialFormData);


const [loading,setLoading] =
useState(false);


const [result,setResult] =
useState(null);



const options = {


Gender:[
"Male",
"Female"
],


BusinessTravel:[
"Travel_Rarely",
"Travel_Frequently",
"Non-Travel"
],


Department:[
"Sales",
"Research & Development",
"Human Resources"
],


EducationField:[
"Life Sciences",
"Medical",
"Marketing",
"Technical Degree",
"Human Resources",
"Other"
],


JobRole:[
"Sales Executive",
"Research Scientist",
"Laboratory Technician",
"Manufacturing Director",
"Healthcare Representative",
"Manager",
"Sales Representative",
"Research Director",
"Human Resources"
],


MaritalStatus:[
"Single",
"Married",
"Divorced"
],


OverTime:[
"Yes",
"No"
]

};



const sections = {


"Personal Information":[

"Age",
"Gender",
"MaritalStatus",
"Education",
"EducationField"

],


"Job Information":[

"BusinessTravel",
"Department",
"JobRole",
"JobLevel",
"JobInvolvement",
"OverTime"

],


"Compensation":[

"DailyRate",
"HourlyRate",
"MonthlyIncome",
"MonthlyRate",
"PercentSalaryHike"

],


"Satisfaction":[

"EnvironmentSatisfaction",
"JobSatisfaction",
"RelationshipSatisfaction",
"WorkLifeBalance",
"PerformanceRating"

],


"Experience":[

"DistanceFromHome",
"NumCompaniesWorked",
"TotalWorkingYears",
"TrainingTimesLastYear",
"YearsAtCompany",
"YearsInCurrentRole",
"YearsSinceLastPromotion",
"YearsWithCurrManager",
"StockOptionLevel"

]

};



const handleChange=(e)=>{


const {

name,

value

}=e.target;



setFormData({

...formData,

[name]:value

});


};



const renderField=(field)=>{


const label =
field.replace(/([A-Z])/g," $1")
.trim();



if(options[field]){


return (

<TextField

select

fullWidth

sx={{

minWidth:"220px"

}}

label={label}

name={field}

value={formData[field]}

onChange={handleChange}

required


>


<MenuItem value="">

Select {label}

</MenuItem>



{

options[field].map((item)=>(


<MenuItem

key={item}

value={item}

>

{item}

</MenuItem>


))


}



</TextField>

);


}


return (

<TextField

fullWidth

type="number"

label={label}

name={field}

value={formData[field]}

onChange={handleChange}

helperText={
ranges[field] || ""
}

required

/>

);


};
const handleSubmit = async (e)=>{


e.preventDefault();


try{


setLoading(true);


setResult(null);



const payload={


Age:Number(formData.Age),

BusinessTravel:formData.BusinessTravel,

DailyRate:Number(formData.DailyRate),

Department:formData.Department,

DistanceFromHome:Number(formData.DistanceFromHome),

Education:Number(formData.Education),

EducationField:formData.EducationField,


EnvironmentSatisfaction:Number(
formData.EnvironmentSatisfaction
),


Gender:formData.Gender,


HourlyRate:Number(formData.HourlyRate),


JobInvolvement:Number(formData.JobInvolvement),


JobLevel:Number(formData.JobLevel),


JobRole:formData.JobRole,


JobSatisfaction:Number(formData.JobSatisfaction),


MaritalStatus:formData.MaritalStatus,


MonthlyIncome:Number(formData.MonthlyIncome),


MonthlyRate:Number(formData.MonthlyRate),


NumCompaniesWorked:Number(formData.NumCompaniesWorked),


OverTime:formData.OverTime,


PercentSalaryHike:Number(formData.PercentSalaryHike),


PerformanceRating:Number(formData.PerformanceRating),


RelationshipSatisfaction:Number(
formData.RelationshipSatisfaction
),


StockOptionLevel:Number(formData.StockOptionLevel),


TotalWorkingYears:Number(formData.TotalWorkingYears),


TrainingTimesLastYear:Number(
formData.TrainingTimesLastYear
),


WorkLifeBalance:Number(formData.WorkLifeBalance),


YearsAtCompany:Number(formData.YearsAtCompany),


YearsInCurrentRole:Number(
formData.YearsInCurrentRole
),


YearsSinceLastPromotion:Number(
formData.YearsSinceLastPromotion
),


YearsWithCurrManager:Number(
formData.YearsWithCurrManager
)


};



const response = await api.post(

"/predict",

payload

);



setResult(response.data);



}

catch(error){


console.error(
"Prediction Error:",
error
);


alert(
"Prediction failed. Check backend server."
);


}


finally{


setLoading(false);


}


};




return (


<Box>


<Typography

variant="h5"

fontWeight="bold"

sx={{
mb:3
}}

>

Employee Details

</Typography>



<form onSubmit={handleSubmit}>


{

Object.entries(sections).map(

([section,fields])=>(


<Accordion

key={section}

defaultExpanded

sx={{
mb:2
}}

>


<AccordionSummary

expandIcon={
<ExpandMoreIcon/>
}

>


<Typography

fontWeight="bold"

>

{section}

</Typography>


</AccordionSummary>



<AccordionDetails>


<Grid

container

spacing={3}

>


{

fields.map((field)=>(


<Grid

item

xs={12}

sm={6}

md={6}

key={field}

>


{renderField(field)}


</Grid>


))


}



</Grid>


</AccordionDetails>



</Accordion>


)


)



}



<Box

textAlign="center"

sx={{
mt:4
}}

>


<Button

variant="contained"

size="large"

type="submit"

disabled={loading}

>


{

loading

?

"Predicting..."

:

"Predict Attrition"

}



</Button>



</Box>



</form>




{

loading &&

<Box

sx={{
mt:3
}}

>


<LoadingSpinner/>


</Box>


}





{

result &&


<Box

sx={{
mt:5
}}

>


<PredictionCard

result={result}

/>



<ShapReasons

reasons={result.top_reasons}

/>



<RecommendationCard

recommendations={
result.recommendations
}

/>



</Box>


}



</Box>


);


}


const ranges = {

Age:
"Enter age between 18 - 60",

DailyRate:
"Enter daily rate",

DistanceFromHome:
"Enter distance in km",

Education:
"Rating: 1 - 5",

EnvironmentSatisfaction:
"Rating: 1 - 4",

HourlyRate:
"Enter hourly rate",

JobInvolvement:
"Rating: 1 - 4",

JobLevel:
"Level: 1 - 5",

JobSatisfaction:
"Rating: 1 - 4",

MonthlyIncome:
"Enter monthly salary",

MonthlyRate:
"Enter monthly rate",

NumCompaniesWorked:
"Number of previous companies",

PercentSalaryHike:
"Enter percentage",

PerformanceRating:
"Rating: 3 - 4",

RelationshipSatisfaction:
"Rating: 1 - 4",

StockOptionLevel:
"Level: 0 - 3",

TotalWorkingYears:
"Years: 0 - 40",

TrainingTimesLastYear:
"Training count: 0 - 6",

WorkLifeBalance:
"Rating: 1 - 4",

YearsAtCompany:
"Years: 0 - 40",

YearsInCurrentRole:
"Years: 0 - 20",

YearsSinceLastPromotion:
"Years: 0 - 15",

YearsWithCurrManager:
"Years: 0 - 20"

};
export default EmployeeForm;