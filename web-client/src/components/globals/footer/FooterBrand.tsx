import Link from "next/link";
import {
  RiInstagramFill,
  RiFacebookFill,
  RiWhatsappFill,
  RiTwitterFill,
  RiLinkedinFill,
} from "react-icons/ri";

const FooterBrand = ({
  name,
  link,
  social,
}: {
  name: string;
  link: string;
  social: { name: string; username: string; link: string }[];
}) => {
  return (
    <div className="flex flex-1 flex-col gap-2 justify-center items-start">
      <Link href={link} className="md:text-xl font-bold text-neutral-200">
        {name}
      </Link>
      <div className="flex justify-center items-center">
        {social.map(
          (
            item: { name: string; username: string; link: string },
            index: number,
          ) => {
            return (
              <Link
                href={item.link}
                key={index}
                className="text-white flex justify-center items-center"
              >
                {item.name === "instagram" ? (
                  <RiInstagramFill fontSize="2rem" />
                ) : item.name === "facebook" ? (
                  <RiFacebookFill fontSize="2rem" />
                ) : item.name === "whatsapp" ? (
                  <RiWhatsappFill fontSize="2rem" />
                ) : item.name === "twitter" ? (
                  <RiTwitterFill fontSize="2rem" />
                ) : item.name === "linkedin" ? (
                  <RiLinkedinFill fontSize="2rem" />
                ) : (
                  ""
                )}
              </Link>
            );
          },
        )}
      </div>
    </div>
  );
};

export default FooterBrand;
