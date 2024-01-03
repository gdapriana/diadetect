import Image, { StaticImageData } from "next/image";
import {
  ArrowLongRightIcon,
  ArrowLongDownIcon,
} from "@heroicons/react/24/solid";

const Content = ({
  metadata,
  icons,
}: {
  metadata: any;
  icons: StaticImageData[];
}) => {
  return (
    <div className="flex-1 w-full gap-2 md:w-auto flex flex-wrap justify-center items-stretch">
      {metadata.steps.map((item: any, index: number) => {
        return (
          <>
            <div
              key={index}
              className="lg:flex-1 w-full gap-2 border border-neutral-300 flex justify-center items-center flex-col p-4 rounded-lg"
            >
              <Image
                src={icons[index]}
                alt={metadata.steps.title}
                width={100}
                height={100}
                className="w-16 opacity-80"
              />
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-neutral-800 font-semibold text-base md:text-lg">
                  {item.title}
                </h1>
                <p className="text-center text-neutral-400">{item.subtitle}</p>
              </div>
            </div>

            {index !== metadata.steps.length - 1 ? (
              <>
                <ArrowLongRightIcon className="w-5 hidden lg:block" />
                <ArrowLongDownIcon className="w-5 lg:hidden" />
              </>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default Content;
