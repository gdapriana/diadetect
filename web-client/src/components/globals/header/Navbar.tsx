import metadata from "@/data/global";
import NavBrand from "@/components/globals/header/NavBrand";
import Navigations from "@/components/globals/header/Navigations";
import LoginBtn from "@/components/globals/header/LoginBtn";
import Hamburger from "@/components/globals/header/Hamburger";

const Navbar = (): any => {
  return (
    <div
      id="_navbar_root"
      className="w-full border-b z-10 flex justify-center items-center"
    >
      <div
        className="w-full max-w-6xl py-4 mx-8 gap-2 md:gap-12 flex justify-between items-center"
        id="_navbar_wrapper"
      >
        <NavBrand name={metadata.brand.name} link={metadata.brand.link} />
        <Hamburger />
        <Navigations navigations={metadata.navigations} />
        <LoginBtn login={metadata.login} />
      </div>
    </div>
  );
};

export default Navbar;
