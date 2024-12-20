import Hero1 from "./components/homepage/homepage/heropage1";
import Heropage2 from "./components/homepage/homepage/heropage2";
import Heropage3 from "./components/homepage/homepage/heropage3";
import Homepage4 from "./components/homepage/homepage/homepage4";
import Homepage5 from "./components/homepage/homepage/homepage5";

export default function Home() {
  return (
    <>
      <main className="max-w-[1400px] mx-auto w-full bg-white text-black">
        <Hero1 />
        <hr />
        <Heropage2 />
        <hr />
        <Heropage3 />
        <hr />
        <Homepage4 />
        <hr />
        <Homepage5 />
        <hr />
      </main>
    </>
  );
}
