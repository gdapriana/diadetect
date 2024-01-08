import Link from "next/link";
import {
  RiInstagramFill,
  RiFacebookFill,
  RiWhatsappFill,
  RiTwitterFill,
  RiLinkedinFill,
} from "react-icons/ri";

const Connect = ({
  connect,
}: {
  connect: {
    name: string;
    socials: { name: string; username: string; link: string }[];
  };
}) => {
  return (
    <div className="flex justify-center items-start flex-col gap-2">
      <h1 className="text-neutral-200 font-semibold text-lg">{connect.name}</h1>
      <div className="flex justify-center items-center">
        {connect.socials.map(
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

export default Connect;
