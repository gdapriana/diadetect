import Link from "next/link";

const Navigations = ({ navigations }: { navigations: any }) => {
  return (
    <ul className="flex justify-center items-center gap-4 ms-auto">
      {navigations.map((item: any, index: number) => {
        return (
          <li>
            <Link href={item.link} className="text-neutral-700 font-semibold">
              {item.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Navigations;
