from flask import Flask, request, jsonify
import tensorflow as tf
import numpy as np
from sklearn.preprocessing import MinMaxScaler
import joblib

app = Flask(__name__)

model = tf.keras.models.load_model('model.keras')
scaler = joblib.load('scaler.pkl')


@app.route("/")
def hello_world():
  return "<p>Hello World</p>"

@app.route("/predict", methods=['POST', 'GET'])
def predict():
  data = request.get_json()
  new_pregnancies = data["preg"]
  new_glucose = data["gluc"]
  new_bloodpress = data["bp"]
  new_skinthick = data["st"]
  new_insulin = data["ins"]
  new_bmi = data["bmi"]
  new_pdg = data["pdg"]
  new_age = data["age"]
  user_data = np.array([[new_pregnancies, new_glucose, new_bloodpress, new_skinthick, new_insulin, new_bmi, new_pdg, new_age]]).reshape(1, -1) 
  normalize_user_data = scaler.transform(user_data)
  predict = model.predict(normalize_user_data)
  
  if predict[0][0] <= 0.5:
    result = 0
  else:
    result = 1
  
  return {"result": result}

  