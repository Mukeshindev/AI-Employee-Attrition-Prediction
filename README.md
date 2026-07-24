# 🤖 AI Employee Attrition Prediction & HR Decision Support System

An end-to-end **Machine Learning powered Employee Attrition Prediction System** that predicts whether an employee is likely to leave the organization and provides **explainable insights and HR recommendations** using Explainable AI (SHAP).

This project combines **Machine Learning, FastAPI, React, PostgreSQL, and Explainable AI** to build a complete AI-powered HR analytics solution.

---

# 📌 Project Overview

Employee attrition is one of the major challenges faced by organizations. Predicting employees who are at risk of leaving helps HR teams take preventive actions and improve employee retention.

This system analyzes employee information such as:

- Personal details
- Job role
- Salary information
- Work experience
- Job satisfaction
- Work-life balance
- Overtime
- Organizational factors

and predicts:

- Employee attrition probability
- Risk level
- Priority level
- Reasons behind prediction
- Recommended HR actions

---

# 🚀 Features

## 🔹 Machine Learning Prediction

- Predicts employee attrition risk using trained ML models.
- Handles numerical and categorical employee features.
- Uses preprocessing pipelines for consistent predictions.


## 🔹 Explainable AI (SHAP)

Instead of only predicting:

> "Employee may leave"

the system explains:

> "Why is this employee at risk?"

Provides:

- Top contributing factors
- Feature impact
- SHAP-based explanations


## 🔹 HR Recommendations

Based on prediction results, the system suggests:

- Employee engagement actions
- Compensation review
- Work-life balance improvements
- Career development discussions


## 🔹 Full Stack Application

Frontend:

- React
- Material UI

Backend:

- FastAPI

Database:

- PostgreSQL


---

# 🏗️ System Architecture

```
                 Employee Data
                      |
                      |
                      v
              React Frontend
                      |
                      |
                 REST API
                      |
                      v
              FastAPI Backend
                      |
          -----------------------
          |                     |
          v                     v
   ML Prediction          SHAP Explainability
          |
          |
          v
       PostgreSQL
          |
          |
          v
    HR Decision Support
```

---

# 🛠️ Tech Stack

## Programming Languages

- Python
- JavaScript


## Machine Learning

- Scikit-learn
- CatBoost
- LightGBM
- XGBoost
- Imbalanced-learn
- SHAP


## Backend

- FastAPI
- SQLAlchemy
- Pydantic


## Frontend

- React
- Vite
- Material UI


## Database

- PostgreSQL


## Deployment

- Docker
- Render
- Vercel


---

# 📂 Project Structure

```
AI-Employee-Attrition-Prediction/

│
├── backend/
│   ├── app.py
│   ├── database.py
│   ├── db_models.py
│   ├── schemas.py
│   ├── utils.py
│   ├── model_loader.py
│   └── Dockerfile
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── api/
│   │   └── App.jsx
│   └── package.json
│
├── models/
│   └── trained_models/
│       ├── employee_attrition_model.pkl
│       └── shap_explainer.pkl
│
├── notebooks/
│   └── 01_data_Understanding.ipynb
│
├── dataset/
│
├── requirements.txt
│
├── README.md
│
└── LICENSE
```

---

# 📊 Machine Learning Workflow

```
Data Collection
        |
        |
Exploratory Data Analysis
        |
        |
Data Cleaning
        |
        |
Feature Engineering
        |
        |
Encoding & Scaling
        |
        |
SMOTE Class Balancing
        |
        |
Model Training
        |
        |
Hyperparameter Tuning
        |
        |
Model Evaluation
        |
        |
SHAP Explainability
        |
        |
Deployment
```

---

# 🤖 Machine Learning Models Used

The following models were evaluated:

- Logistic Regression
- Random Forest
- Decision Tree
- XGBoost
- LightGBM
- CatBoost


Evaluation metrics:

- Accuracy
- Precision
- Recall
- F1 Score
- ROC-AUC


The final optimized model was selected based on performance and business requirements.

---

# 🔍 Explainable AI using SHAP

SHAP helps understand individual employee predictions.

Example:

Prediction:

```
High Attrition Risk

Probability: 82%
```

Explanation:

```
Reasons:

+ Overtime: Increased risk
+ Low Job Satisfaction: Increased risk
+ Short Experience: Increased risk


Recommendations:

- Conduct employee engagement discussion
- Review workload
- Discuss career growth opportunities
```

---

# ⚙️ Installation & Setup

## 1. Clone Repository

```bash
git clone <repository-url>

cd AI-Employee-Attrition-Prediction
```

---

# Backend Setup

Create virtual environment:

```bash
python -m venv .venv
```

Activate:

Windows:

```bash
.venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run FastAPI:

```bash
cd backend

uvicorn app:app --reload
```

Backend runs:

```
http://127.0.0.1:8000
```

---

# Frontend Setup

Go to frontend:

```bash
cd frontend
```

Install packages:

```bash
npm install
```

Run application:

```bash
npm run dev
```

Frontend runs:

```
http://localhost:5173
```

---

# 🗄️ Database Setup

This project uses PostgreSQL.

Database stores:

- Employee prediction records
- Prediction probability
- Risk level
- HR recommendations
- Timestamp


Table:

```
employee_predictions
```

---

# 🔐 Environment Variables

Backend:

```
DATABASE_URL=<your_database_url>
```

Frontend:

```
VITE_API_URL=<backend_api_url>
```

---

# 📈 Future Improvements

- Deep Learning based prediction
- NLP based employee feedback analysis
- LLM powered HR assistant
- Automated HR chatbot
- Cloud deployment
- Model monitoring system
- MLOps pipeline


---

# 👨‍💻 Author

**Mukesh M**

Computer Science Engineering Student

Interested in:

- Artificial Intelligence
- Machine Learning
- Deep Learning
- Generative AI


---

# ⭐ If you like this project

Give a ⭐ star and feel free to explore the repository.