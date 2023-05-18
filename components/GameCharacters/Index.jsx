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
              
              paragraph1={`Tragically, his mother's addiction ultimately led to her death in a car accident, leaving Edward an orphan and struggling with depression. With no means of support and his possessions gradually sold off, Edward was left with nothing but his bed and pillow. In a moment of desperation, he roamed the streets with a cup, asking for help to survive.

              It was then that Edward met EL MO9, who offered him a chance to join a support group for people who have faced difficulties and failures in life. At first, Edward only joined for the free food, but he soon discovered a talent for mathematical equations and calculations. EL MO9 saw his potential and offered him a job at his office, where Edward excelled as a human calculator.`}
              
              img={Player1}
              reverse={false}
              playername={"el mo9"}
            ></ParagSection>
            <ParagSection
              paragraph1={`Edward is a resilient and determined individual who faces immense hardships in his life. Born into a family burdened by financial distress and his parents' struggles, Edward's journey is marked by resilience and a strong will to survive. When his mother's addiction worsens, he is forced to drop out of school and take on the responsibility of supporting her. Despite the odds stacked against him, Edward refuses to succumb to despair. He encounters El Mo9, who becomes a catalyst for change in his life. Through this encounter, Edward discovers his talent for mathematics, which becomes his path to redemption. Graduating from school and securing a job as an accountant, Edward finds stability and a newfound sense of purpose. His unwavering determination and ability to overcome obstacles make him an inspiring protagonist, demonstrating the transformative power of perseverance and self-belief.`}
              img={Player2}
              reverse={false}
              playername={"Edward"}
            ></ParagSection>
            <ParagSection
              paragraph1={`Edward is a resilient and determined individual who faces immense hardships in his life. Born into a family burdened by financial distress and his parents' struggles, Edward's journey is marked by resilience and a strong will to survive. When his mother's addiction worsens, he is forced to drop out of school and take on the responsibility of supporting her. Despite the odds stacked against him, Edward refuses to succumb to despair. He encounters El Mo9, who becomes a catalyst for change in his life. Through this encounter, Edward discovers his talent for mathematics, which becomes his path to redemption. Graduating from school and securing a job as an accountant, Edward finds stability and a newfound sense of purpose. His unwavering determination and ability to overcome obstacles make him an inspiring protagonist, demonstrating the transformative power of perseverance and self-belief.`}
              img={Player3}
              reverse={false}
              playername={"Madison"}
            ></ParagSection>
          </div>
        </div>
      </div>
      {/* <div className=" z-0 h-[100px] max-w-[100%] bg-gradient-to-b from-qiskit-blue-normal to-qiskit-white"></div> */}
    </section>
  );
};

export default GameCharacter;
