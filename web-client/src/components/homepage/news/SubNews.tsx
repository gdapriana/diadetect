import Image from "next/image";
import {
  CalendarDaysIcon,
  CursorArrowRaysIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import moment from "moment/moment";

const SubNews = ({ data }: { data: any }) => {
  return (
    <div className="rounded-lg border flex justify-center items-center flex-col overflow-hidden lg:col-span-2">
      <SubNewsImage data={data} />
      <SubNewsContent data={data} />
    </div>
  );
};

const SubNewsImage = ({ data }: { data: any }) => {
  return (
    <div
      className="w-full bg-cover bg-center flex-1 overflow-hidden"
      style={{
        backgroundImage: `url(${
          data.urlToImage
            ? data.urlToImage
            : `https://source.unsplash.com/random/1920x1080/?health`
        })`,
      }}
    ></div>
  );
};

const SubNewsContent = ({ data }: { data: any }) => {
  return (
    <div className="w-full flex flex-col justify-center items-start gap-2 p-6">
      {data.title && (
        <h1 className="font-semibold cutoff-text cutoff-text-2 text-neutral-700">
          {data?.title}
        </h1>
      )}

      <div className="flex w-full justify-between items-center mt-1">
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
            <CursorArrowRaysIcon className="w-5" />{" "}
            <span className="cutoff-text cutoff-text-1">Read More</span>
          </a>
        )}
      </div>
    </div>
  );
};
export default SubNews;
