from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware

import pandas as pd

from sqlalchemy.orm import Session

from database import engine, get_db, Base

from db_models import Prediction

from utils import (
    predict_employee,
    explain_employee
)

from schemas import (
    EmployeeData,
    PredictionResponse,
    SHAPResponse
)

app = FastAPI(
    title="Employee Attrition Prediction API",
    version="1.0"
)
Base.metadata.create_all(bind=engine)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://ai-employee-attrition-prediction.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
@app.get("/")
def home():
    return {
        "message":
        "Employee Attrition API Running"
    }

@app.post(
    "/predict",
    response_model=PredictionResponse
)

def predict(

    employee: EmployeeData,

    db: Session = Depends(get_db)

):
    employee_df = pd.DataFrame(
        [
            employee.model_dump()
        ]
    )
    result = predict_employee(
        employee_df
    )
    record = Prediction(

    age=employee.Age,

    department=employee.Department,

    job_role=employee.JobRole,

    monthly_income=employee.MonthlyIncome,

    overtime=employee.OverTime,

    job_satisfaction=employee.JobSatisfaction,

    environment_satisfaction=employee.EnvironmentSatisfaction,

    work_life_balance=employee.WorkLifeBalance,

    years_at_company=employee.YearsAtCompany,

    prediction=result["prediction"],

    probability=result["probability"],

    risk_level=result["risk_level"],

    priority=result["priority"],

    hr_action=result["hr_action"],

    recommendations="\n".join(
        result["recommendations"]
    )

    )

    db.add(record)

    db.commit()

    db.refresh(record)
    return result

@app.post(
    "/explain",
    response_model=SHAPResponse
)
def explain(employee: EmployeeData):
    employee_df = pd.DataFrame(
        [
            employee.model_dump()
        ]
    )
    result = explain_employee(
        employee_df
    )
    return result