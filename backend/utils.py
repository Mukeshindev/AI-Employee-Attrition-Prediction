import pandas as pd

from model_loader import (
    model,
    explainer,
    preprocessor,
    feature_names
)

def get_hr_decision(probability):
    if probability >= 0.75:
        return {
            "risk_level": "High",

            "priority": "Immediate",

            "hr_action":
            "Immediate HR intervention required."
        }

    elif probability >= 0.50:
        return {
            "risk_level": "Medium",

            "priority": "Monitor",

            "hr_action":
            "Monitor employee and improve engagement."
        }

    else:
        return {
            "risk_level": "Low",

            "priority": "Normal",

            "hr_action":
            "Continue regular employee engagement."
        }

def generate_hr_suggestions(employee):
    suggestions = []
    if employee["OverTime"] == "Yes":
        suggestions.append(
            "Reduce overtime workload and improve work-life balance."
        )

    if employee["JobSatisfaction"] <= 2:
        suggestions.append(
            "Conduct employee engagement activities."
        )

    if employee["MonthlyIncome"] < 3000:
        suggestions.append(
            "Consider salary revision or additional benefits."
        )

    if employee["EnvironmentSatisfaction"] <= 2:
        suggestions.append(
            "Improve workplace environment and manager support."
        )

    if employee["YearsSinceLastPromotion"] > 3:
        suggestions.append(
            "Provide promotion opportunities and career development."
        )

    if len(suggestions) == 0:
        suggestions.append(
            "Employee is stable. Continue current engagement."
        )

    return suggestions

def get_top_shap_reasons(employee_df, top_n=5):
    transformed_data = (
        preprocessor.transform(employee_df)
    )
    shap_values = (
        explainer.shap_values(transformed_data)
    )
    shap_values = shap_values[0]
    reason_df = pd.DataFrame({
        "feature": feature_names,

        "shap_value": shap_values
    })
    reason_df["abs_shap"] = (
        reason_df["shap_value"].abs()
    )
    reason_df = reason_df.sort_values(
        by="abs_shap",

        ascending=False
    )
    reasons = []

    for _, row in reason_df.head(top_n).iterrows():
        reasons.append({
            "feature": row["feature"],

            "impact":
                "Increases Risk"
                if row["shap_value"] > 0
                else "Decreases Risk",

            "shap_value":
                round(
                    float(row["shap_value"]),
                    4
                )
        })
    return reasons

def predict_employee(employee_df):
    prediction = model.predict(
        employee_df
    )[0]

    probability = model.predict_proba(
        employee_df
    )[0][1]

    decision = get_hr_decision(
        probability
    )

    reasons = get_top_shap_reasons(
        employee_df
    )

    recommendations = generate_hr_suggestions(
        employee_df.iloc[0]
    )

    return {
        "prediction":

            "Attrition"

            if prediction == 1

            else "No Attrition",

        "probability":

            round(
                float(probability),
                4
            ),

        "risk_level":

            decision["risk_level"],

        "priority":

            decision["priority"],

        "hr_action":

            decision["hr_action"],

        "top_reasons":

            reasons,

        "recommendations":

            recommendations
    }

def explain_employee(employee_df):
    reasons = get_top_shap_reasons(
        employee_df
    )
    return {
        "top_reasons": reasons
    }