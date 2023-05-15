import SectionTitle from "../shared/SectionTitle";
import ParagSection from "../shared/ParagSection";
import Player2 from "../../images/Characters/player2.png";
import Player1 from "../../images/Characters/player1.png";
import Player3 from "../../images/Characters/player3.png";
const GameCharacter = () => {
  return (
    <section id="GameChar">
      {/* <div className=" z-0 h-[100px] max-w-[100%] bg-gradient-to-t from-[#3177ab] to-qiskit-white"></div> */}

      <div className="relative about-bg py-16">
     
        <div className="w-10/12 mx-auto flex flex-col gap-8">
          <SectionTitle isWhite={true} title={"Game Characters"} />
          <div className="flex flex-col gap-12 lg:gap-28">
            <ParagSection
              
              paragraph1={`el Desciption eli fih`}
              keyword2={" asm el Player idk "}
              img={Player1}
              reverse={false}
              playername={"Player1"}
            ></ParagSection>
            <ParagSection
              paragraph1={`el Desciption eli fih`}
              keyword2={" asm el Player idk "}
              img={Player2}
              reverse={false}
              playername={"Player2"}
            ></ParagSection>
            <ParagSection
              paragraph1={`el Desciption eli fih`}
              keyword2={" asm el Player idk "}
              img={Player3}
              reverse={false}
              playername={"Player3"}
            ></ParagSection>
          </div>
        </div>
      </div>
      {/* <div className=" z-0 h-[100px] max-w-[100%] bg-gradient-to-b from-qiskit-blue-normal to-qiskit-white"></div> */}
    </section>
  );
};

export default GameCharacter;
