import {
  Container,
  Typography,
  Paper,
  Box,
  Divider
} from "@mui/material";

import EmployeeForm from "../components/EmployeeForm";

function Prediction() {
  return (
    <Container maxWidth="xl" sx={{ py: 5 }}>

      <Paper
        elevation={3}
        sx={{
          p: 4,
          borderRadius: 3,
        }}
      >

        <Typography
          variant="h3"
          fontWeight="bold"
          gutterBottom
        >
          Employee Attrition Prediction
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 3 }}
        >
          Enter the employee details below. The trained Machine Learning model
          will predict whether the employee is likely to leave the organization.
          The system also explains the prediction using SHAP and provides HR
          recommendations.
        </Typography>

        <Divider sx={{ mb: 4 }} />

        <Box>

          <EmployeeForm />

        </Box>

      </Paper>

    </Container>
  );
}

export default Prediction;