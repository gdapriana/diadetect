import streamlit as st
import numpy as np
import pandas as pd
from predict.data_input import *
from PIL import Image


metadata = {
    "title": "Diabetic Detection",
    "subtitle": "Diabetic Detection is a program that uses machine learning to predict whether a person has diabetes "
                "or not. The program takes into account a variety of factors, including the person's age, weight, "
                "height, blood pressure, and blood sugar levels. The program then uses this information to train a "
                "machine learning model. Once the model is trained, it can be used to predict whether a new person "
                "has diabetes or not.",
    "image": Image.open('assets/tools.jpg')
}


if __name__ == '__main__':
    dataset = pd.read_csv("dataset/diabetes.csv")
    st.set_page_config(layout="wide")
    container_1, container_2 = st.columns(2, gap="large")
    with container_1:
        st.header(metadata["title"], divider='rainbow')
        st.caption(metadata["subtitle"])
        st.image(metadata["image"])

    with container_2:
        tab1, tab2, tab3, tab4 = st.tabs(["Input Data", "Machine Learning Process", "Dataset", "Result"])
        with tab1:
            data = data_input(st)
            if st.button('Submit', type="primary"):
                if data["name"] == "" or data["age"] <= 0:
                    st.warning("Fill the form!!")
                else:
                    st.write(data)
        with tab2:
            st.write(data)
        with tab3:
            st.write(dataset)
        with tab4:
            st.dataframe(data)
