"use client";
import Form from "@/components/predict/Form";
import ImageSection from "@/components/predict/ImageSection";
import metadata from "@/data/predict/parameters";
import predictImage from "@/assets/images/predict.jpg";
import Header from "@/components/predict/Header";
import { useState } from "react";

const Predict = () => {
  const [inputData, setInputData] = useState({
    prg: "",
    glu: "",
    blp: "",
    skt: "",
    inl: "",
    bmi: "",
    dpf: "",
    age: "",
  });
  const [result, setResult] = useState({ status: false, value: 0 });

  return (
    <main
      className="w-full flex justify-center items-center"
      id="_predict_root"
    >
      {!result.status ? (
        <div
          className="max-w-6xl w-full grid lg:grid-cols-2 grid-cols-1 gap-16 py-8 mx-8"
          id="_predict_wrapper"
        >
          <ImageSection image={predictImage} alt={metadata.name} />
          <Header title={metadata.name} subtitle={metadata.subtitle} />
          <Form
            metadata={metadata}
            inputData={inputData}
            setInputData={setInputData}
            setResult={setResult}
          />
        </div>
      ) : (
        <div
          className="max-w-6xl w-full bg-red-200 py-8 mx-8"
          id="_predict_wrapper"
        >
          <div className="">{result.value}</div>
        </div>
      )}
    </main>
  );
};

export default Predict;
