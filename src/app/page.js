import Navbar from "@/app/components/homepage/navbar";
import Hero from "@/app/components/homepage/hero";

export default function Home() {
  return (
    <>
      <main className="bg-gray-50">
        <Navbar />
        <Hero />
      </main>
    </>
  );
}
