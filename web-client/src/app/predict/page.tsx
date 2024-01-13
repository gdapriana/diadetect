"use client";
import Form from "@/components/predict/Form";
import ImageSection from "@/components/predict/ImageSection";
import metadata from "@/data/predict/parameters";
import predictImage from "@/assets/images/predict.jpg";
import Header from "@/components/predict/Header";
import { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
  ArcElement,
} from "chart.js";
import Loading from "@/components/globals/loading/Loading";
import Result from "@/components/predict/Result";

// Register ChartJS components using ChartJS.register
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  ArcElement,
);

const Predict = () => {
  const [loading, setLoading] = useState(false);
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
      ) : loading ? (
        <Loading />
      ) : (
        <div className="max-w-6xl w-full py-8 mx-8" id="_predict_wrapper">
          <Result result={result} setResult={setResult} userInput={inputData} />
        </div>
      )}
    </main>
  );
};

export default Predict;
