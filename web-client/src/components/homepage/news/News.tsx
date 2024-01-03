import metadata from "@/data/homepage/news";
import MainNews from "@/components/homepage/news/MainNews";
import MoreNews from "@/components/homepage/news/MoreNews";
import SubNews from "@/components/homepage/news/SubNews";

async function getNews() {
  const API_KEY = process.env.PUBLIC_NEWS_API;
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=diabetes&sortBy=popularity&apiKey=${API_KEY}`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const News = async () => {
  const news = await getNews();
  return (
    <main className="w-full flex justify-center items-center" id="_news_root">
      <div
        className="w-full flex-col gap-4 flex m-8 justify-center items-center max-w-6xl"
        id="_news_wrapper"
      >
        <h1 className="text-lg font-bold text-neutral-800 md:text-xl">
          {metadata.title}
        </h1>
        {news.length == 0 ? (
          <p>Loading...</p>
        ) : (
          <div className="w-full gap-4 grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-5">
            <MainNews data={news.articles[0]} />
            <SubNews data={news.articles[1]} />
            <MoreNews metadata={metadata} />
            <SubNews data={news.articles[2]} />
          </div>
        )}
      </div>
    </main>
  );
};

export default News;
