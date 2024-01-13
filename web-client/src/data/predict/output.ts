const output = {
  result: [
    {
      tiers: "Low and unlikely chance of developing diabetes",
      minPercentage: 0,
      maxPercentage: 0.1,
      color: "#4ade80",
      description:
        "Individuals with a low percentage have a low risk of developing diabetes.",
      directives: [
        "Maintain a balanced diet with increased consumption of fruits, vegetables and whole grains.",
        "Do regular physical activity, at least 150 minutes per week",
        "Monitor your weight and maintain a healthy body mass index (BMI).",
      ],
    },
    {
      tiers: "Moderately likely and probably not diabetic",
      minPercentage: 0.11,
      maxPercentage: 0.3,
      color: "#a3e635",
      description:
        "Individuals with a moderate percentage have a moderate risk of developing diabetes, lifestyle changes may be required.",
      directives: [
        "Maintain a healthy diet by reducing consumption of sugar and saturated fat.",
        "Increase physical activity to at least 150-300 minutes per week.",
        "Check blood sugar levels regularly and consult a doctor for further recommendations.",
      ],
    },
    {
      tiers: "Moderately high chance of developing diabetes",
      minPercentage: 0.31,
      maxPercentage: 0.5,
      color: "#facc15",
      description:
        "Individuals with a high percentage have a high risk of developing diabetes, lifestyle changes and medical intervention may be required.",
      directives: [
        "Consult a doctor for further risk assessment and possibly additional tests.",
        "Follow a weight management program and diet recommended by a healthcare professional.",
        "Physical activity should be an integral part of daily life, at least 300 minutes per week.",
      ],
    },
    {
      tiers: "Very high chance of developing diabetes",
      minPercentage: 0.51,
      maxPercentage: 1,
      color: "#fb923c",
      description:
        "Individuals with a very high percentage have a very high risk of developing diabetes and require immediate medical attention.",
      directives: [
        "Consult a doctor immediately for evaluation and disease management plan.",
        "Follow strict weight management and dietary recommendations.",
        "Routinely monitor blood sugar levels and strictly adhere to medical instructions.",
      ],
    },
  ],
  warning: {
    text: "It is important to remember that this program can only provide a prediction and not a definitive diagnosis. All individuals, regardless of risk percentage, are advised to consult a healthcare professional for further evaluation and more specific advice according to your health condition.",
  },
};

export default output;
