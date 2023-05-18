import Image from "next/image";
import SectionTitle from "../shared/SectionTitle";
import screenshot from "../../images/sectionsAssets/screenshot.png";

const AboutEvent = () => {
  return (
    <section id="about-Game" className="section-container pt-12 lg:pt-24">
      <SectionTitle title={"About The Game"} />

      <div>
        <div className="gap-8 row-2 lg:columns-2 mt-[50px]">
          <div>
            <Image src={screenshot} alt="" />
          </div>
          <div className=" p-4 sm:p-10">
            <p className="text-xl 2xl:text-3xl lg:text-2xl">
              <b>Mad Guy</b><br/> Games transport players into thrilling adventures,where they can test their skills, solve puzzles, and compete against others.<br/> With stunning graphics and immersive worlds, players are captivated by the virtual experiences they offer.<br/> Whether its shaping the story, mastering levels, or unleashing creativity, games provide a diverse range of challenges and opportunities for personal growth. <br/>Whether played alone or with friends, games offer a unique and engaging form of entertainment that brings joy and excitement to players of all ages.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="relative"></div>
    </section>
  );
};

export default AboutEvent;
