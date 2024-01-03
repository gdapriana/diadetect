import metadata from "@/data/homepage/steps";
import Content from "@/components/homepage/steps/Content";
import registerIcon from "@/assets/images/register.png";
import checkIcon from "@/assets/images/check.png";
import finishIcon from "@/assets/images/done.png";

const Steps = () => {
  return (
    <main
      id="_homepage_news_root"
      className="w-full flex justify-center my-8 md:my-12 items-center"
    >
      <div
        className="w-full flex-col md:flex-row gap-8 md:gap-12 flex m-8 justify-center items-center max-w-6xl"
        id="_homepage_news_wrapper"
      >
        <div className="w-full md:w-80 flex justify-center items-start flex-col">
          <h1 className="text-neutral-800 font-bold text-lg md:text-xl">
            {metadata.title}
          </h1>
          <p className="text-neutral-400 text-base md:text-lg">
            {metadata.subtitle}
          </p>
        </div>
        <Content
          metadata={metadata}
          icons={[registerIcon, checkIcon, finishIcon]}
        />
      </div>
    </main>
  );
};

export default Steps;
