import FooterBrand from "@/components/globals/footer/FooterBrand";
import metadata from "@/data/global";
import Navigations from "@/components/globals/footer/Navigations";

const Footer = () => {
  return (
    <div
      id="_navbar_root"
      className="w-full bg-neutral-800 z-10 mt-24 flex justify-center items-center"
    >
      <div
        className="w-full max-w-6xl py-16 mx-12 gap-8 flex-wrap md:gap-12 flex justify-between items-start"
        id="_navbar_wrapper"
      >
        <FooterBrand
          name={metadata.brand.name as string}
          link={metadata.brand.link as string}
          social={metadata.social}
        />

        <Navigations navigations={metadata.navigations} />
      </div>
    </div>
  );
};

export default Footer;
