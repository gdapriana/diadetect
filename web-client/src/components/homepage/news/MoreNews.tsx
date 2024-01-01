import Link from "next/link";

import { ArrowRightIcon } from "@heroicons/react/24/solid";

const MoreNews = ({ metadata }: { metadata: any }) => {
  return (
    <div
      className="rounded-lg justify-end items-end bg-cover bg-center hidden row-span-2 lg:flex border"
      style={{
        backgroundImage:
          "url(https://source.unsplash.com/random/1920x1080/?doctor)",
      }}
    >
      <Link
        className="text-neutral-100 flex gap-1 justify-center items-center font-bold py-2 px-4 m-4 rounded-lg bg-neutral-800"
        href={metadata.loadData.link}
      >
        <span className="cutoff-text cutoff-text-1">
          {metadata.loadData.name}
        </span>
        <ArrowRightIcon className="w-4" />
      </Link>
    </div>
  );
};

export default MoreNews;
