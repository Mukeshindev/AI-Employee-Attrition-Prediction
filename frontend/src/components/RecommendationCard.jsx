import {
  Card,
  CardContent,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@mui/material";


import CheckCircleIcon from "@mui/icons-material/CheckCircle";


function RecommendationCard({ recommendations }) {


if(
!recommendations ||
recommendations.length === 0
){

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

HR Recommendations

</Typography>



<Typography

color="text.secondary"

sx={{
mb:2
}}

>

Suggested actions to reduce employee attrition risk.

</Typography>



<Divider sx={{mb:2}} />



<List>


{

recommendations.map(
(item,index)=>(


<ListItem

key={index}

>


<ListItemIcon>

<CheckCircleIcon

color="success"

/>

</ListItemIcon>



<ListItemText

primary={item}

/>



</ListItem>


)

)


}


</List>



</CardContent>


</Card>


);


}


export default RecommendationCard;