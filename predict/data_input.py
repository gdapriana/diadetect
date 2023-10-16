def data_input(st):
    data = None
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

    return {"name": name, "age": age, "pregnancies": pregnancies,
            "blood_pressure": blood_pressure, "insulin": insulin,
            "pedigree_function": pedigree_function, "glucose_level": glucose_level,
            "skin_thickness": skin_thickness, "bmi": bmi}
