import joblib
from pathlib import Path


# Project root directory
# backend/model_loader.py
# parent.parent -> AI-Employee-Attrition-Prediction/

BASE_DIR = Path(__file__).resolve().parent.parent


MODEL_PATH = (
    BASE_DIR
    / "models"
    / "trained_models"
    / "employee_attrition_model.pkl"
)


EXPLAINER_PATH = (
    BASE_DIR
    / "models"
    / "trained_models"
    / "shap_explainer.pkl"
)


# Check model files exist

if not MODEL_PATH.exists():
    raise FileNotFoundError(
        f"Model file not found: {MODEL_PATH}"
    )


if not EXPLAINER_PATH.exists():
    raise FileNotFoundError(
        f"SHAP explainer not found: {EXPLAINER_PATH}"
    )


# Load model and SHAP explainer

model = joblib.load(MODEL_PATH)

explainer = joblib.load(EXPLAINER_PATH)



# Extract pipeline components

preprocessor = model.named_steps["preprocessor"]

classifier = model.named_steps["classifier"]



# Get feature names after preprocessing

feature_names = (
    preprocessor
    .get_feature_names_out()
)


# Clean feature names for frontend display

feature_names = [
    feature
    .replace("num__", "")
    .replace("cat__", "")
    for feature in feature_names
]