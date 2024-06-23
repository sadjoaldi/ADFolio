import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Spacing from "./_components/Spacing";
import Status from "./_components/Status";

export default function Home() {
  return (
    <main>
      {/* header */}
      <Header />

      <Spacing size="md" />

      {/* hero */}
      <Hero />

      <Spacing size="md" />

      {/* status */}
      <Status />

      <Spacing size="md" />

      {/* skills */}

      <Spacing size="md" />

      {/* footer */}
      <Footer />
    </main>
  );
}
