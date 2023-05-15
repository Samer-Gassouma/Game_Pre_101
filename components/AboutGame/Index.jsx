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
          <div className="gap-8 rows-2 p-4 sm:p-10">
            <p className="text-xl 2xl:text-3xl lg:text-2xl">
              <b>Mad Guy</b> el Game Description Here{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="relative"></div>
    </section>
  );
};

export default AboutEvent;
