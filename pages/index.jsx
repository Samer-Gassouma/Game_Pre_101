import Head from "next/head";
import OurTeam from "../components/OurTeam/Index";
import GameCharacters from "../components/GameCharacters/Index";
import Characters from "../components/Characters/Index";
import AboutGame from "../components/AboutGame/Index";
import Footer from "../components/Footer/Index";
import Hero from "../components/Hero/Index";
export default function Home() {
  return (
    <>
      <Head>
        <title>Cyberstorm || Mad Guy</title>
        
      </Head>

      <Hero />
      <main className="font-IBM-Plex">
        <AboutGame />
        <GameCharacters />
        <Characters />
        <OurTeam/>
        
      </main>
      <Footer />
    </>
  );
}
