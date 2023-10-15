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


def web(st):
    st.set_page_config(layout="wide")
    container_1, container_2 = st.columns(2, gap="large")
    with container_1:
        st.header(metadata["title"], divider='rainbow')
        st.caption(metadata["subtitle"])
        st.image(metadata["image"])
    with container_2:
        data = patient_information(st)
        if st.button('Check Now'):
            if data["name"] == "" or data["age"] <= 0:
                st.warning('Fill all the form', icon="⚠️")
            else:
                st.write(data)


def patient_information(st):
    tab1, tab2 = st.tabs(["Input Data", "Machine Learning Process"])

    with tab1:
        col1a, col2a = st.columns(2)
        with col1a:
            name = st.text_input("Name")
        with col2a:
            age = int(st.number_input("Age", step=1))
        st.subheader('Medical Information')
        col1b, col2b = st.columns(2)
        with col1b:
            pregnancies = int(st.number_input("Number of Pregnancies", step=1))
            blood_pressure = int(st.number_input("Blood Pressure", step=1))
            insulin = float(st.number_input("Insulin"))
            pedigree_function = float(st.number_input("Pedigree Function", step=1))
        with col2b:
            glucose_level = int(st.number_input("Glucose Level", step=1))
            skin_thickness = int(st.number_input("Skin Thickness", step=1))
            bmi = float(st.number_input("BMI", step=1))
    with tab2:
        st.write("Hehe")

    return {"name": name, "age": age, "pregnancies": pregnancies, "blood_pressure": blood_pressure, "insulin": insulin,
            "pedigree_function": pedigree_function, "glucose_level": glucose_level, "skin_thickness": skin_thickness,
            "bmi": bmi}
