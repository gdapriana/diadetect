import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";

const Form = ({
  metadata,
}: {
  metadata: {
    name: string;
    items: {
      name: string;
      code: string;
      description: string;
      source: string;
      placeholder: string;
    }[];
  };
}) => {
  return (
    <div className="flex-1 col-span-1 lg:col-span-2 flex gap-8 flex-col text-neutral-700 justify-center items-start">
      <form
        action="/result"
        method="POST"
        className="w-full grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 md:gap-4 gap-2"
      >
        <label
          htmlFor={metadata.items[0].code}
          className="flex flex-col justify-between items-start p-8 hover:bg-neutral-50 ease-in-out duration-300 rounded-xl"
        >
          <h3 className="font-semibold text-base flex justify-center items-center gap-2 lg:text-lg">
            <AdjustmentsHorizontalIcon className="w-5" />{" "}
            {metadata.items[0].name}
          </h3>
          <p className="text-neutral-400 mb-auto text-sm lg:text-base">
            {metadata.items[0].description}
          </p>
          <input
            type="number"
            className="border mt-4 w-full p-2 rounded-md text-sm"
            id={metadata.items[0].code}
            name={metadata.items[0].code}
            placeholder={metadata.items[0].placeholder}
          />
        </label>
        <label
          htmlFor={metadata.items[1].code}
          className="flex flex-col justify-between items-start p-8 hover:bg-neutral-50 ease-in-out duration-300 rounded-xl"
        >
          <h3 className="font-semibold  text-base flex justify-center items-center gap-2  lg:text-lg">
            <AdjustmentsHorizontalIcon className="w-5" />{" "}
            {metadata.items[1].name}
          </h3>
          <p className="text-neutral-400 mb-auto  text-sm lg:text-base">
            {metadata.items[1].description}
          </p>
          <input
            type="number"
            className="border mt-4 w-full p-2 rounded-md text-sm"
            id={metadata.items[1].code}
            name={metadata.items[1].code}
            placeholder={metadata.items[1].placeholder}
          />
        </label>

        <label
          htmlFor={metadata.items[2].code}
          className="flex flex-col justify-between items-start p-8 hover:bg-neutral-50 ease-in-out duration-300 rounded-xl"
        >
          <h3 className="font-semibold  flex justify-center items-center  gap-2 text-base lg:text-lg">
            <AdjustmentsHorizontalIcon className="w-5" />{" "}
            {metadata.items[2].name}
          </h3>
          <p className="text-neutral-400 text-sm  mb-auto lg:text-base">
            {metadata.items[2].description}
          </p>
          <input
            type="number"
            className="border mt-4 w-full p-2 rounded-md text-sm"
            id={metadata.items[2].code}
            name={metadata.items[2].code}
            placeholder={metadata.items[2].placeholder}
          />
        </label>

        <label
          htmlFor={metadata.items[3].code}
          className="flex flex-col justify-between items-start p-8 hover:bg-neutral-50 ease-in-out duration-300 rounded-xl"
        >
          <h3 className="font-semibold  flex justify-center items-center  gap-2 text-base lg:text-lg">
            <AdjustmentsHorizontalIcon className="w-5" />{" "}
            {metadata.items[3].name}
          </h3>
          <p className="text-neutral-400 text-sm mb-auto  lg:text-base">
            {metadata.items[3].description}
          </p>
          <input
            type="number"
            className="border mt-4 w-full p-2 rounded-md text-sm"
            id={metadata.items[3].code}
            name={metadata.items[3].code}
            placeholder={metadata.items[3].placeholder}
          />
        </label>

        <label
          htmlFor={metadata.items[4].code}
          className="flex flex-col justify-between items-start p-8 hover:bg-neutral-50 ease-in-out duration-300 rounded-xl"
        >
          <h3 className="font-semibold  flex justify-center items-center  gap-2 text-base lg:text-lg">
            <AdjustmentsHorizontalIcon className="w-5" />{" "}
            {metadata.items[4].name}
          </h3>
          <p className="text-neutral-400 text-sm mb-auto  lg:text-base">
            {metadata.items[4].description}
          </p>
          <input
            type="number"
            className="border mt-4 w-full p-2 rounded-md text-sm"
            id={metadata.items[4].code}
            name={metadata.items[4].code}
            placeholder={metadata.items[4].placeholder}
          />
        </label>

        <label
          htmlFor={metadata.items[5].code}
          className="flex flex-col justify-between items-start p-8 hover:bg-neutral-50 ease-in-out duration-300 rounded-xl"
        >
          <h3 className="font-semibold  flex justify-center items-center gap-2  text-base lg:text-lg">
            <AdjustmentsHorizontalIcon className="w-5" />{" "}
            {metadata.items[5].name}
          </h3>
          <p className="text-neutral-400 text-sm mb-auto  lg:text-base">
            {metadata.items[5].description}
          </p>
          <input
            type="number"
            className="border mt-4 w-full p-2 rounded-md text-sm"
            id={metadata.items[5].code}
            name={metadata.items[5].code}
            placeholder={metadata.items[5].placeholder}
          />
        </label>

        <label
          htmlFor={metadata.items[6].code}
          className="flex flex-col justify-between items-start p-8 hover:bg-neutral-50 ease-in-out duration-300 rounded-xl"
        >
          <h3 className="font-semibold  flex justify-center items-center gap-2  text-base lg:text-lg">
            <AdjustmentsHorizontalIcon className="w-5" />{" "}
            {metadata.items[6].name}
          </h3>
          <p className="text-neutral-400 text-sm mb-auto  lg:text-base">
            {metadata.items[6].description}
          </p>
          <input
            type="number"
            className="border mt-4 w-full p-2 rounded-md text-sm"
            id={metadata.items[6].code}
            name={metadata.items[6].code}
            placeholder={metadata.items[6].placeholder}
          />
        </label>

        <label
          htmlFor={metadata.items[7].code}
          className="flex flex-col justify-between items-start p-8 hover:bg-neutral-50 ease-in-out duration-300 rounded-xl"
        >
          <h3 className="font-semibold  flex justify-center items-center gap-2 text-base lg:text-lg">
            <AdjustmentsHorizontalIcon className="w-5" />{" "}
            {metadata.items[7].name}
          </h3>
          <p className="text-neutral-400 text-sm mb-auto  lg:text-base">
            {metadata.items[7].description}
          </p>
          <input
            type="number"
            className="border mt-4 w-full p-2 rounded-md text-sm"
            id={metadata.items[7].code}
            name={metadata.items[7].code}
            placeholder={metadata.items[7].placeholder}
          />
        </label>
      </form>
    </div>
  );
};

export default Form;
