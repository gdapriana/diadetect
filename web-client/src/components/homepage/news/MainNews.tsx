import Image from "next/image";
import {
  UserCircleIcon,
  CalendarDaysIcon,
  CursorArrowRaysIcon,
} from "@heroicons/react/24/solid";
import moment from "moment";

const MainNews = ({ data }: { data: any }) => {
  return (
    <div className="rounded-lg flex overflow-hidden justify-center items-center flex-col row-span-2 border lg:col-span-2">
      <NewsImage data={data} />
      <NewsContent data={data} />
    </div>
  );
};

const NewsImage = ({ data }: { data: any }) => {
  return (
    <div className="w-full">
      <Image
        width={1920}
        height={1080}
        className="object-cover aspect-video"
        src={
          data.urlToImage
            ? data.urlToImage
            : `https://source.unsplash.com/random/1920x1080/?health`
        }
        alt={data.title}
      />
    </div>
  );
};

const NewsContent = ({ data }: { data: any }) => {
  return (
    <div className="w-full flex flex-col justify-center items-start gap-2 p-6">
      {data.title && (
        <h1 className="font-semibold cutoff-text cutoff-text-2 text-neutral-700">
          {data?.title}
        </h1>
      )}
      {data.description && (
        <p className="cutoff-text text-neutral-400 cutoff-text-3">
          {data.description}
        </p>
      )}

      <div className="flex w-full justify-between items-center mt-4">
        <div className="flex gap-2 justify-center items-start flex-col">
          <h1 className="text-neutral-700 flex text-sm justify-center items-center gap-1">
            <UserCircleIcon className="w-5" />
            By
            <span className="font-semibold cutoff-text cutoff-text-1">
              {data.author ? data.author : "Unknow"}
            </span>
          </h1>
          <p className="text-xs text-neutral-400 flex justify-center items-center gap-1">
            <CalendarDaysIcon className="w-4" />
            <span className="cutoff-text cutoff-text-1">
              {moment(data.publishedAt).format("MMMM D, YYYY")}
            </span>
          </p>
        </div>
        {data.url && (
          <a
            href={data.url ? data.url : "/"}
            target="_blank"
            className="ms-auto py-2 px-4 flex gap-2 justify-center items-center bg-neutral-700 text-neutral-100 rounded-md"
          >
            <CursorArrowRaysIcon className="w-5" />
            <span className="cutoff-text cutoff-text-1">Read More</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default MainNews;
