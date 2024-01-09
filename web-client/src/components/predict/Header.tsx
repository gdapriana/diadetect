const Header = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <div className="flex flex-col justify-center gap-4 items-start">
      <h1 className="text-lg lg:text-xl text-neutral-700 font-bold">{title}</h1>
      <p className="text-sm lg:text-base text-neutral-400">{subtitle}</p>
    </div>
  );
};

export default Header;
