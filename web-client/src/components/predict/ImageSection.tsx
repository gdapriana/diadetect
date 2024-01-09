import Image, { StaticImageData } from "next/image";

const ImageSection = ({
  image,
  alt,
}: {
  image: StaticImageData;
  alt: string;
}) => {
  return (
    <div className="flex justify-center items-center">
      <Image
        src={image}
        alt={alt}
        width={1000}
        height={1000}
        className="w-[400px]"
      />
    </div>
  );
};

export default ImageSection;
