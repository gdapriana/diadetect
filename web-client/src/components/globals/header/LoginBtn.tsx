import Link from "next/link";

const LoginBtn = ({ login }: { login: { name: string; link: string } }) => {
  return (
    <Link
      href={login.link}
      className="md:text-lg bg-neutral-800 text-neutral-100 font-semibold py-2 px-4 rounded-lg"
    >
      {login.name}
    </Link>
  );
};

export default LoginBtn;
