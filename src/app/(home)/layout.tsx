import Hero from "./_components/hero";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Hero />
      {children}
    </>
  );
}
