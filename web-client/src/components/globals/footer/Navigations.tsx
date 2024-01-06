import {
  HomeIcon,
  ShieldCheckIcon,
  NewspaperIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

const Navigations = ({
  navigations,
}: {
  navigations: { name: string; link: string }[];
}) => {
  return (
    <div className="flex justify-center items-start flex-col gap-2">
      <h1 className="text-neutral-200 font-semibold text-lg">Jump to</h1>
      <div className="flex justify-center items-start flex-col gap-2">
        {navigations.map(
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

export default Navigations;
