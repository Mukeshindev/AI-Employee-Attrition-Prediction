from pathlib import Path
import joblib


BASE_DIR = Path(__file__).resolve().parent


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


print("BASE DIR:", BASE_DIR)
print("MODEL PATH:", MODEL_PATH)


if not MODEL_PATH.exists():
    raise FileNotFoundError(
        f"Model file not found: {MODEL_PATH}"
    )


model = joblib.load(MODEL_PATH)


if EXPLAINER_PATH.exists():
    explainer = joblib.load(EXPLAINER_PATH)
else:
    explainer = None


preprocessor = model.named_steps["preprocessor"]

classifier = model.named_steps["classifier"]


feature_names = preprocessor.get_feature_names_out()

feature_names = [
    feature.replace("num__", "")
    .replace("cat__", "")
    for feature in feature_names
]