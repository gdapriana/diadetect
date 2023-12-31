import Link from "next/link";
import { ShieldCheckIcon } from "@heroicons/react/24/solid";

const Content = ({
  title,
  subtitle,
  predict,
}: {
  title: string;
  subtitle: string;
  predict: { name: string; link: string };
}) => {
  return (
    <div className="w-full md:w-1/2 h-80 md:h-auto flex flex-col gap-8 justify-center items-start">
      <div className="flex flex-col items-start gap-2">
        <h1 className="text-neutral-800 font-bold text-lg md:text-2xl">
          {title}
        </h1>
        <p className="text-sm md:text-base">{subtitle}</p>
      </div>
      <Link
        href={predict.link}
        className="flex justify-center items-center font-semibold text-neutral-100 bg-neutral-800 py-2 px-4 rounded-lg gap-2"
      >
        <ShieldCheckIcon className="w-5" />
        {predict.name}
      </Link>
    </div>
  );
};

export default Content;
