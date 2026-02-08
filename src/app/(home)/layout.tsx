import Hero from "./_components/hero";
import ManifestoSection from "./_components/manifesto-section";
import StudioCinemasSection from "./_components/studio-cinemas-section";
import { getCinemas } from "@/lib/cinemas";

export default async function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cinemas = await getCinemas({ limit: 16 });
  return (
    <>
      <Hero />
      {children}
      <StudioCinemasSection cinemas={cinemas} />
      <ManifestoSection />
    </>
  );
}
