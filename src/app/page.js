import Navbar from "@/app/components/homepage/navbar";
import Hero1 from "./components/homepage/homepage/heropage1";
import Heropage2 from "./components/homepage/homepage/heropage2";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-[1400px] mx-auto w-full">
        <Hero1 />
        <hr />
        <Heropage2 />
      </main>
    </>
  );
}
