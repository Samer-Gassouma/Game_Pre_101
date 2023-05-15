import Image from "next/image";
import Player2 from "../../images/Characters/player2.png";
import Player1 from "../../images/Characters/player1.png";
import Player3 from "../../images/Characters/player3.png";
import SectionTitle from "../shared/SectionTitle";

const Characters = () => {
  const players = [
    {
      text: "Player1",
      src: Player1,
    },
    {
      text: "player2 ",
      src: Player2,
    },
    {
      text: "player3",
      src: Player3,
      space: true,
    },
  ];
  return (
    <section id="Game-Characters" className="section-container pt-12 lg:pt-24">
      <SectionTitle title={"Characters"} />
      <div className="flex flex-row">
        <div className="w-10/12">
          <div className="flex flex-wrap items-center justify-center">
            {players.map((partner, index) => (
              <div
                key={index}
                className={`flex flex-col items-center ${
                  partner.space ? " lg:mx-80 md:mx-auto " : "mx-auto"
                } mx-auto my-10  `}
              >
                <div className={`w-72 rounded-lg md:w-96`}>
                  <p className=" text-center 2xl:text-lg">{partner.text}</p>
                </div>

                <a target="__blank">
                  <Image src={partner.src} width={200} height={200} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Characters;
