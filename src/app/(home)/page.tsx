import Image from "next/image";
import Hero from "./_components/hero";
import ScreeningsList from "./_components/screenings";

export default function Home() {
  return (
    <>
      <Hero />
      <ScreeningsList />
    </>
  );
}
