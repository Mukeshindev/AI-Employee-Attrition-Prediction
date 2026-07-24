from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import Float
from sqlalchemy import String
from sqlalchemy import Text
from sqlalchemy import DateTime
from sqlalchemy.sql import func

from database import Base
class Prediction(Base):

    __tablename__ = "employee_predictions"


    id = Column(Integer, primary_key=True, index=True)

    age = Column(Integer)

    department = Column(String)

    job_role = Column(String)

    monthly_income = Column(Integer)

    overtime = Column(String)

    job_satisfaction = Column(Integer)

    environment_satisfaction = Column(Integer)

    work_life_balance = Column(Integer)

    years_at_company = Column(Integer)


    prediction = Column(String)

    probability = Column(Float)

    risk_level = Column(String)

    priority = Column(String)

    hr_action = Column(Text)

    recommendations = Column(Text)


    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now()
    )