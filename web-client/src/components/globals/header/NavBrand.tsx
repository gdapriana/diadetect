import Link from "next/link";
import metadata from "@/data/header";

const NavBrand = ({ name, link }: { name: any; link: string }) => {
  return (
    <Link href={link} className="md:text-xl font-bold text-neutral-700">
      {name}
    </Link>
  );
};

export default NavBrand;
