import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Typography
} from "@mui/material";

import {
  Psychology,
  Memory,
  Storage,
  Web,
  AutoGraph,
  Lightbulb
} from "@mui/icons-material";

function About() {

  const technologies = [
    {
      icon: <Memory color="primary" />,
      title: "Machine Learning",
      description: "Logistic Regression model trained on employee attrition data."
    },
    {
      icon: <Psychology color="primary" />,
      title: "Explainable AI",
      description: "SHAP explains the important features behind every prediction."
    },
    {
      icon: <Storage color="primary" />,
      title: "Backend",
      description: "FastAPI serves the trained machine learning model."
    },
    {
      icon: <Web color="primary" />,
      title: "Frontend",
      description: "React.js with Material UI provides a responsive user interface."
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>

      <Typography
        variant="h3"
        fontWeight="bold"
        gutterBottom
      >
        About This Project
      </Typography>

      <Typography
        color="text.secondary"
        sx={{ mb: 5 }}
      >
        AI Employee Attrition Prediction is an HR Decision Support System
        that predicts whether an employee is likely to leave an organization.
        The prediction is generated using Machine Learning and explained
        using Explainable AI (SHAP), allowing HR professionals to understand
        the reasons behind each prediction.
      </Typography>

      <Divider sx={{ mb: 5 }} />

      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
      >
        Technologies Used
      </Typography>

      <Grid container spacing={3}>

        {technologies.map((item) => (

          <Grid item xs={12} md={6} key={item.title}>

            <Card sx={{ height: "100%" }}>

              <CardContent>

                <Box
                  display="flex"
                  alignItems="center"
                  mb={2}
                >

                  {item.icon}

                  <Typography
                    variant="h6"
                    ml={2}
                  >
                    {item.title}
                  </Typography>

                </Box>

                <Typography color="text.secondary">
                  {item.description}
                </Typography>

              </CardContent>

            </Card>

          </Grid>

        ))}

      </Grid>

      <Box mt={6}>

        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
        >
          Project Workflow
        </Typography>

        <Typography sx={{ mt: 2 }}>
          1. User enters employee details.
        </Typography>

        <Typography sx={{ mt: 1 }}>
          2. FastAPI sends the data to the trained Logistic Regression model.
        </Typography>

        <Typography sx={{ mt: 1 }}>
          3. The model predicts employee attrition risk.
        </Typography>

        <Typography sx={{ mt: 1 }}>
          4. SHAP identifies the key factors influencing the prediction.
        </Typography>

        <Typography sx={{ mt: 1 }}>
          5. HR recommendations are generated based on the prediction.
        </Typography>

      </Box>

      <Box mt={6}>

        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
        >
          Future Improvements
        </Typography>

        <Box display="flex" mt={2}>

          <Lightbulb color="warning" sx={{ mr: 2 }} />

          <Typography>
            Future versions can include Deep Learning models,
            NLP-based employee feedback analysis,
            LLM-powered HR assistants,
            real-time dashboards,
            cloud deployment,
            and advanced explainability features.
          </Typography>

        </Box>

      </Box>

    </Container>
  );
}

export default About;