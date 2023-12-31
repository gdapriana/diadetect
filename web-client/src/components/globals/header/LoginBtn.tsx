import Link from "next/link";
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/solid";

const LoginBtn = ({ login }: { login: { name: string; link: string } }) => {
  return (
    <Link
      href={login.link}
      className="md:text-lg bg-neutral-800 gap-2 flex justify-center items-center text-neutral-100 font-semibold py-2 px-4 rounded-lg"
    >
      <ArrowRightStartOnRectangleIcon className="md:w-5" />
      {login.name}
    </Link>
  );
};

export default LoginBtn;
