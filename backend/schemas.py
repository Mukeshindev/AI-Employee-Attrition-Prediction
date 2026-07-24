from pydantic import BaseModel

class EmployeeData(BaseModel):

    Age: int

    BusinessTravel: str

    DailyRate: int

    Department: str

    DistanceFromHome: int

    Education: int

    EducationField: str

    EnvironmentSatisfaction: int

    Gender: str

    HourlyRate: int

    JobInvolvement: int

    JobLevel: int

    JobRole: str

    JobSatisfaction: int

    MaritalStatus: str

    MonthlyIncome: int

    MonthlyRate: int

    NumCompaniesWorked: int

    OverTime: str

    PercentSalaryHike: int

    PerformanceRating: int

    RelationshipSatisfaction: int

    StockOptionLevel: int

    TotalWorkingYears: int

    TrainingTimesLastYear: int

    WorkLifeBalance: int

    YearsAtCompany: int

    YearsInCurrentRole: int

    YearsSinceLastPromotion: int

    YearsWithCurrManager: int

class Reason(BaseModel):

    feature: str

    impact: str

    shap_value: float

class PredictionResponse(BaseModel):

    prediction: str

    probability: float

    risk_level: str

    priority: str

    hr_action: str

    top_reasons: list[Reason]

    recommendations: list[str]

class SHAPResponse(BaseModel):

    employee_id: str | None = None

    top_reasons: list[Reason]