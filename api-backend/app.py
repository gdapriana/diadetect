from flask import Flask, request, jsonify
import tensorflow as tf
import numpy as np
from sklearn.preprocessing import MinMaxScaler
import joblib
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


model = tf.keras.models.load_model('model.keras')
scaler = joblib.load('scaler.pkl')


@app.route("/")
def hello_world():
  return "<p>Hello World</p>"

@app.route("/predict", methods=['POST', 'GET'])
@cross_origin()
def predict():
  data = request.get_json()
  new_pregnancies = data["prg"]
  new_glucose = data["glu"]
  new_bloodpress = data["blp"]
  new_skinthick = data["skt"]
  new_insulin = data["inl"]
  new_bmi = data["bmi"]
  new_pdg = data["dpf"]
  new_age = data["age"]
  user_data = np.array([[new_pregnancies, new_glucose, new_bloodpress, new_skinthick, new_insulin, new_bmi, new_pdg, new_age]]).reshape(1, -1) 
  normalize_user_data = scaler.transform(user_data)
  predict = model.predict(normalize_user_data)
  
  return jsonify(f'{predict[0][0]:.2f}')

  
