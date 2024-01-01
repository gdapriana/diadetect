import Image from "next/image";

const MainNews = ({ data }: { data: any }) => {
  return (
    <div className="rounded-lg flex overflow-hidden justify-center items-center flex-col row-span-2 border lg:col-span-2">
      <NewsImage data={data} />
      <div className="w-full flex flex-col justify-center items-start gap-2 p-6">
        {data.title && (
          <h1 className="font-semibold cutoff-text cutoff-text-2 text-neutral-800">
            {data?.title}
          </h1>
        )}
        {data.description && (
          <p className="cutoff-text text-neutral-400 cutoff-text-3">
            {data.description}
          </p>
        )}

        {data.url && (
          <a
            href={data.url ? data.url : "/"}
            target="_blank"
            className="ms-auto py-2 px-4 bg-neutral-800 text-neutral-100 mt-4 rounded-md"
          >
            Read More
          </a>
        )}
      </div>
    </div>
  );
};

const NewsImage = ({ data }: { data: any }) => {
  return (
    <div className="w-full">
      <Image
        width={1920}
        height={1080}
        className="object-cover"
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

export default MainNews;
