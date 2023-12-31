import metadata from "@/data/header";
import NavBrand from "@/components/globals/header/NavBrand";
import Navigations from "@/components/globals/header/Navigations";
import LoginBtn from "@/components/globals/header/LoginBtn";
import Hamburger from "@/components/globals/header/Hamburger";

const Navbar = (): any => {
  return (
    <div id="_navbar_root" className="w-full flex justify-center items-center">
      <div
        className="w-full max-w-6xl p-4 gap-6 md:gap-12 flex justify-between items-center"
        id="_navbar_wrapper"
      >
        <NavBrand name={metadata.navbrand.name} link={metadata.navbrand.link} />
        <Hamburger />
        <Navigations navigations={metadata.navigations} />
        <LoginBtn login={metadata.login} />
      </div>
    </div>
  );
};

export default Navbar;
