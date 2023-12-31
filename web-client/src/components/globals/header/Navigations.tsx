import Link from "next/link";
import {
  HomeIcon,
  ShieldCheckIcon,
  NewspaperIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/solid";

const Navigations = ({ navigations }: { navigations: any }) => {
  return (
    <ul className="sm:flex justify-center items-center gap-4 md:gap-6 hidden ms-auto">
      {navigations.map((item: any, index: number) => {
        return (
          <li>
            <Link
              href={item.link}
              className="text-neutral-700 gap-1 md:gap-2 flex text-sm justify-center items-center font-semibold"
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
          </li>
        );
      })}
    </ul>
  );
};

export default Navigations;
