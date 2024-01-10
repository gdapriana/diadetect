const Result = ({
  result,
  userInput,
  setResult,
}: {
  result: { status: boolean; value: number };
  setResult: any;
  userInput: any;
}) => {
  console.log(userInput);
  return (
    <div className="flex-1 col-span-1 absolute lg:col-span-2 flex gap-8 flex-col text-neutral-700 justify-center items-start">
      {result.value}
    </div>
  );
};

export default Result;
