import Image from "next/image";

const ImageSection = ({ image }: { image: any }) => {
  return (
    <div className="hidden md:flex md:w-1/2 justify-end items-center">
      <Image src={image} alt="" />
    </div>
  );
};

export default ImageSection;
