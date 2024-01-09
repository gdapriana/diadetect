import Form from "@/components/predict/Form";
import ImageSection from "@/components/predict/ImageSection";
import metadata from "@/data/predict/parameters";
import predictImage from "@/assets/images/predict.jpg";
import Header from "@/components/predict/Header";

const Predict = () => {
  return (
    <main className="w-full flex justify-center items-center flex-col">
      <main
        className="w-full flex justify-center items-center"
        id="_predict_root"
      >
        <div
          className="max-w-6xl grid lg:grid-cols-2 grid-cols-1 gap-16 m-8"
          id="_predict_wrapper"
        >
          <ImageSection image={predictImage} alt={metadata.name} />
          <Header title={metadata.name} subtitle={metadata.subtitle} />
          <Form metadata={metadata} />
        </div>
      </main>
    </main>
  );
};

export default Predict;
