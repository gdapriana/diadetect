import Link from "next/link";
import {
  ExclamationCircleIcon,
  HomeIcon,
  NewspaperIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/solid";

const Supports = ({
  supports,
}: {
  supports: { name: string; items: { name: string; link: string }[] };
}) => {
  return (
    <div className="flex justify-center items-start flex-col gap-2">
      <h1 className="text-neutral-200 font-semibold text-lg">
        {supports.name}
      </h1>
      <div className="flex justify-center items-start flex-col gap-2">
        {supports.items.map(
          (item: { name: string; link: string }, index: number) => {
            return (
              <Link
                href={item.link}
                key={index}
                className="text-neutral-200 gap-1 md:gap-2 flex text-sm justify-center items-center font-semibold"
              >
                {item.name === "Home" ? (
                  <HomeIcon className="md:w-5 w-4" />
                ) : item.name === "Predict" ? (
                  <ShieldCheckIcon className="md:w-5 w-4" />
                ) : item.name === "News" ? (
                  <NewspaperIcon className="md:w-5 w-4" />
                ) : (
                  <ExclamationCircleIcon className="md:w-5 w-4" />
                )}
                {item.name}
              </Link>
            );
          },
        )}
      </div>
    </div>
  );
};

export default Supports;
