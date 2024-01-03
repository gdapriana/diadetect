import Hero from "@/components/homepage/hero/Hero";
import News from "@/components/homepage/news/News";
import Steps from "@/components/homepage/steps/Steps";

export default function Home() {
  return (
    <main className="w-full flex justify-center items-center flex-col">
      <Hero />
      <Steps />
      <News />
    </main>
  );
}
