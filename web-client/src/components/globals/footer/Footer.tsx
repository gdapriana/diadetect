import FooterBrand from "@/components/globals/footer/FooterBrand";
import metadata from "@/data/global";
import Navigations from "@/components/globals/footer/Navigations";
import Supports from "@/components/globals/footer/Supports";
import Connect from "@/components/globals/footer/Connect";

const Footer = () => {
  return (
    <div
      id="_navbar_root"
      className="w-full bg-neutral-800 z-10 mt-24 flex justify-center items-center"
    >
      <div className="w-full max-w-6xl gap-8 py-16 mx-12 flex flex-col">
        <div
          className="w-full gap-8 flex-wrap md:gap-16 flex justify-between items-start"
          id="_navbar_wrapper"
        >
          <FooterBrand brand={metadata.brand} />
          <Navigations navigations={metadata.navigations} />
          <Supports supports={metadata.supports} />
          <Connect connect={metadata.connect} />
        </div>
        <div className="w-full flex justify-center items-center">
          <p className="text-neutral-200 text-base md:text-lg">
            {metadata.closing.text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
