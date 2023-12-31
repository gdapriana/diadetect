import Content from "@/components/homepage/hero/Content";
import ImageSection from "@/components/homepage/hero/ImageSection";
import metadata from "@/data/homepage/hero";
import HeroImage from "@/assets/images/hero.png";

const Hero = () => {
  return (
    <main className="w-full flex justify-center items-center" id="_hero_root">
      <div
        className="w-full flex m-8 justify-center items-center max-w-6xl"
        id="_hero_wrapper"
      >
        <Content
          title={metadata.title}
          subtitle={metadata.subtitle}
          predict={metadata.predict}
        />
        <ImageSection image={HeroImage} />
      </div>
    </main>
  );
};

export default Hero;
