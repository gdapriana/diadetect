import Link from "next/link";

const FooterBrand = ({
  brand,
}: {
  brand: { name: string | undefined; link: string; description: string };
}) => {
  return (
    <div className="flex flex-1 flex-col gap-2 justify-center items-start">
      <Link href={brand.link} className="md:text-xl font-bold text-neutral-200">
        {brand.name}
      </Link>
      <p className="text-neutral-400 text-sm md:text-base">
        {brand.description}
      </p>
    </div>
  );
};

export default FooterBrand;
