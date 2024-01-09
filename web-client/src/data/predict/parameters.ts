const metadata = {
  name: "Predict",
  subtitle:
    "In a world driven by data and technology, our Predict feature goes beyond conventional health assessments. Discover a revolutionary approach to healthcare, where we harness the power of advanced algorithms and personalized data analysis to foresee potential health outcomes. Your unique profile, comprising key indicators such as pregnancies, glucose levels, blood pressure, skin thickness, insulin levels, BMI, diabetes pedigree function, and age, is the gateway to unlocking a comprehensive understanding of your health.\n" +
    "\n",
  sources: {
    name: "For Details",
    items: [
      { name: "PudMed", link: "https://pubmed.ncbi.nlm.nih.gov/" },
      {
        name: "World Health Organization (WHO)",
        link: "https://www.who.int/",
      },
      {
        name: "Centers for Disease Control and Prevention (CDC)",
        link: "https://www.cdc.gov/",
      },
      {
        name: "National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK)",
        link: "https://www.niddk.nih.gov/",
      },
    ],
  },
  items: [
    {
      name: "Pregnancies",
      code: "prg",
      placeholder: "e.g: 0, 1, 2, ... ",
      description:
        "[set 0 if male] The number of pregnancies a woman has experienced.",
      source:
        "This information is typically gathered from medical records or the patient's medical history. Patients can provide details about their previous pregnancies during medical consultations.",
    },
    {
      name: "Glucose Levels",
      code: "glu",
      placeholder: "e.g: 30, 50 ,100, ... Milligrams per deciliter (mg/dL)",
      description: "The concentration of glucose (sugar) in the blood.",
      source:
        "Glucose levels are measured through blood tests. Patients can undergo blood tests at healthcare laboratories or use home blood glucose meters for self-monitoring.",
    },
    {
      name: "Blood Pressure",
      code: "blp",
      placeholder: "e.g: 72, 64, 81, ... Millimeters of mercury (mmHg) ",
      description:
        "The force of blood against the walls of the arteries, usually measured in millimeters of mercury (mmHg).",
      source:
        "Blood pressure measurement is commonly done using a sphygmomanometer. This test can be performed at healthcare facilities, clinics, or even at home using digital blood pressure monitors.",
    },
    {
      name: "Skin Thickness",
      code: "skt",
      placeholder: "e.g: 35, 27, 40, ... Millimeter (mm)",
      description:
        "Refers to the thickness of a fold of skin at a specific location on the body.",
      source:
        "Measurement of skinfold thickness is typically done by healthcare professionals using a tool called a skinfold caliper.",
    },
    {
      name: "Insulin Levels",
      code: "inl",
      placeholder:
        "e.g: 0, 94, 168, ... Micro international units per milliliter (µIU/mL) ",
      description:
        "The amount of insulin in the blood, a hormone crucial for regulating blood sugar.",
      source:
        "Insulin levels are measured through blood tests conducted in healthcare laboratories.",
    },
    {
      name: "BMI (Body Mass Index)",
      code: "bmi",
      placeholder: "e.g: 40, 50, 60... Kilogram (kg)",
      description:
        "A numerical value of a person's weight in relation to their height.",
      source:
        "BMI is calculated based on weight and height measurements. Weight can be measured using scales, and height can be measured using a stadiometer.",
    },
    {
      name: "Diabetes Pedigree Function",
      code: "dpf",
      placeholder: "e.g: 0.627, 0.351, 0.672, ... ",
      description:
        "A function presenting the family history of diabetes and estimating the genetic risk associated with diabetes.",
      source:
        "Information about the family history of diabetes is obtained from the patient. Patients provide details about whether any family members have a history of diabetes.",
    },
    {
      name: "Age",
      code: "age",
      placeholder: "e.g: 20, 30, 50, ... years",
      description: "The age of the individual.",
      source:
        "Age information is obtained directly from the patient during medical consultations or can be derived from personal identification data.",
    },
  ],
};

export default metadata;
