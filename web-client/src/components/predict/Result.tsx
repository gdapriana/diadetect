import PieChart from "@/components/predict/PieChart";
import output from "@/data/predict/output";
import {
  ShieldCheckIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/solid";

const Result = ({
  result,
  userInput,
  setResult,
}: {
  result: { status: boolean; value: number };
  setResult: any;
  userInput: any;
}) => {
  return (
    <div className="w-full gap-16 my-16 flex flex-col md:flex-row">
      <div className="w-full justify-center items-center flex md:w-auto">
        <PieChart result={result} />
      </div>
      <div className="w-full md:w-auto md:flex-1 flex justify-center items-center">
        {output.result.map((item: any, index: number) => {
          return (
            result.value >= item.minPercentage &&
            result.value <= item.maxPercentage && (
              <div
                className="w-full flex flex-col justify-center gap-8 items-start"
                key={index}
              >
                <div className="flex flex-col gap-4 justify-center items-start">
                  <h1
                    className={`text-[${item.color}] text-xl md:text-2xl font-bold`}
                  >
                    {(result.value * 100).toFixed(1)}%, {item.tiers}
                  </h1>
                  <p className="text-neutral-400">{item.description}</p>
                </div>
                <div className="w-full flex flex-col justify-center items-start gap-4">
                  <h1 className="text-neutral-700 text-lg md:text-xl font-semibold">
                    Possible health advice:
                  </h1>
                  <ul className="flex flex-col justify-center items-start gap-4 md:gap-2">
                    {item.directives.map((item: any, index: number) => {
                      return (
                        <li
                          key={index}
                          className="flex justify-start items-center gap-2 text-sm md:text-base text-neutral-600"
                        >
                          <ShieldCheckIcon className="w-5" />
                          <p className="flex-1">{item}</p>
                        </li>
                      );
                    })}
                  </ul>
                  <h3 className="w-full gap-4 text-neutral-600 flex justify-center flex-col md:flex-row items-center text-sm md:text-base my-12 bg-neutral-200 py-4 px-6 rounded-xl">
                    <ExclamationTriangleIcon className="w-12" />
                    <p className="flex-1">{output.warning.text}</p>
                  </h3>
                </div>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

export default Result;
