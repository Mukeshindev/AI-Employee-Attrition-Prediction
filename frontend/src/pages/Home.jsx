import {
  Container,
  Typography,
  Button,
  Box,
  Card,
  CardContent,
  Grid,
  Divider
} from "@mui/material";

import {
  ArrowForward,
  Psychology,
  TrendingUp,
  Lightbulb
} from "@mui/icons-material";

import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  return (

    <Container maxWidth="lg" sx={{ py: 6 }}>

      {/* Hero */}

      <Box textAlign="center" mb={7}>

        <Typography
          variant="h3"
          fontWeight="bold"
          gutterBottom
        >
          AI Employee Attrition Prediction System
        </Typography>

        <Typography
          variant="h6"
          color="text.secondary"
          sx={{
            maxWidth: 850,
            margin: "auto"
          }}
        >
          Predict whether an employee is likely to leave an organization
          using Machine Learning and Explainable AI (SHAP). This system
          helps HR professionals make informed employee retention decisions.
        </Typography>

        <Button
          variant="contained"
          size="large"
          endIcon={<ArrowForward />}
          sx={{ mt: 4 }}
          onClick={() => navigate("/prediction")}
        >
          Start Prediction
        </Button>

      </Box>

      <Divider sx={{ mb: 6 }} />

      {/* What is Attrition */}

      <Typography
        variant="h4"
        gutterBottom
        fontWeight="bold"
      >
        What is Employee Attrition?
      </Typography>

      <Typography
        color="text.secondary"
        paragraph
      >
        Employee attrition refers to employees leaving an organization
        voluntarily or involuntarily due to resignation, retirement,
        personal reasons, or termination.
        High employee attrition increases recruitment costs,
        affects productivity, and impacts overall business performance.
      </Typography>

      <Divider sx={{ my: 5 }} />

      {/* Why Important */}

      <Typography
        variant="h4"
        gutterBottom
        fontWeight="bold"
      >
        Why Predict Employee Attrition?
      </Typography>

      <Grid container spacing={3} sx={{ mt: 1 }}>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>

              <TrendingUp
                color="primary"
                sx={{ fontSize: 45 }}
              />

              <Typography
                variant="h6"
                mt={2}
              >
                Reduce Hiring Cost
              </Typography>

              <Typography color="text.secondary">
                Early prediction helps organizations reduce
                recruitment and training expenses.
              </Typography>

            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>

              <Psychology
                color="primary"
                sx={{ fontSize: 45 }}
              />

              <Typography
                variant="h6"
                mt={2}
              >
                AI Prediction
              </Typography>

              <Typography color="text.secondary">
                Machine Learning predicts employees who
                are at risk of leaving the organization.
              </Typography>

            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>

              <Lightbulb
                color="primary"
                sx={{ fontSize: 45 }}
              />

              <Typography
                variant="h6"
                mt={2}
              >
                Better HR Decisions
              </Typography>

              <Typography color="text.secondary">
                SHAP explains why the prediction was made
                and provides actionable recommendations.
              </Typography>

            </CardContent>
          </Card>
        </Grid>

      </Grid>

      <Divider sx={{ my: 6 }} />

      {/* Workflow */}

      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
      >
        How This System Works
      </Typography>

      <Box sx={{ mt: 3 }}>

        <Typography variant="h6">
          1. Enter Employee Details
        </Typography>

        <Typography color="text.secondary" mb={3}>
          Fill in employee information such as age,
          department, salary, experience, job satisfaction,
          work-life balance, and other HR-related attributes.
        </Typography>

        <Typography variant="h6">
          2. Machine Learning Prediction
        </Typography>

        <Typography color="text.secondary" mb={3}>
          The trained Logistic Regression model analyzes
          all employee information and predicts the likelihood
          of employee attrition.
        </Typography>

        <Typography variant="h6">
          3. Explainable AI (SHAP)
        </Typography>

        <Typography color="text.secondary" mb={3}>
          SHAP identifies the most influential features
          responsible for the prediction and explains
          the reasoning behind the model's decision.
        </Typography>

        <Typography variant="h6">
          4. HR Recommendations
        </Typography>

        <Typography color="text.secondary">
          Based on the prediction, the system provides
          practical HR recommendations to improve employee
          retention and reduce attrition.
        </Typography>

      </Box>

      <Divider sx={{ my: 6 }} />

      {/* Model */}

      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
      >
        Model Information
      </Typography>

      <Typography sx={{ mt: 2 }}>
        ✔ Algorithm : Logistic Regression
      </Typography>

      <Typography sx={{ mt: 1 }}>
        ✔ Prediction Type : Binary Classification
      </Typography>

      <Typography sx={{ mt: 1 }}>
        ✔ Explainability : SHAP (Explainable AI)
      </Typography>

      <Typography sx={{ mt: 1 }}>
        ✔ Backend : FastAPI
      </Typography>

      <Typography sx={{ mt: 1 }}>
        ✔ Frontend : React + Material UI
      </Typography>

      <Box textAlign="center" mt={7}>

        <Button
          variant="contained"
          size="large"
          onClick={() => navigate("/prediction")}
        >
          Predict Employee Attrition
        </Button>

      </Box>

    </Container>

  );
}

export default Home;