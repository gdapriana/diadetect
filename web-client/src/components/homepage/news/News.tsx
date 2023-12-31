import metadata from "@/data/homepage/news";
import MainNews from "@/components/homepage/news/MainNews";
import MoreNews from "@/components/homepage/news/MoreNews";
import SubNews from "@/components/homepage/news/SubNews";

const News = () => {
  return (
    <main className="w-full flex justify-center items-center" id="_news_root">
      <div
        className="w-full flex-col gap-8 flex m-8 justify-center items-center max-w-6xl"
        id="_news_wrapper"
      >
        <h1 className="text-lg font-bold text-neutral-800 md:text-xl">
          {metadata.title}
        </h1>
        <div className="w-full gap-4 grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-5">
          <MainNews />
          <SubNews />
          <MoreNews />
          <SubNews />
        </div>
      </div>
    </main>
  );
};

export default News;
