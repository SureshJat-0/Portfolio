import "../App.css";
import ChatApp from "../assets/ChatApp.png";
import LogicLoop from "../assets/LogicLoop.png";
import PlacePort from "../assets/PlacePort.png";
import Twitter from "../assets/Twitter.png";
import Amazon from "../assets/Amazon.png";
import WatchWeb from "../assets/WatchWeb.png";
import EarBeats from "../assets/EarBeats.png";
import RotatedNav from "../assets/RotatedNav.png";
import CurrencyCoverter from "../assets/CurrencyConverter.png";
import Calcy from "../assets/Calcy.png";
import RockPaperScissor from "../assets/RockPaperScissor.png";
import TicTacToe from "../assets/TicTacToe.png";
import ExpandingCards from "../assets/ExpandingCards.png";

export default function ScrollingProjects({ scrollLeft }) {
  const images = [
    ChatApp,
    LogicLoop,
    PlacePort,
    Twitter,
    WatchWeb,
    EarBeats,
    Amazon,
    RotatedNav,
    CurrencyCoverter,
    Calcy,
    RockPaperScissor,
    TicTacToe,
    ExpandingCards,
  ];
  return (
    <div className="scroll-mt-16 w-full overflow-hidden whitespace-nowrap my-4">
      <div
        className={`${
          scrollLeft ? "scrollLeft" : "scrollRight"
        } w-max flex gap-[1rem] group-hover:paused`}
      >
        {[...images, ...images].map((image, ind) => (
          <div className="shrink-0" key={ind}>
            <img
              src={image}
              alt="scrolling-project-image"
              key={ind}
              className="xl:w-[300px] lg:w-[250px] md:w-[220px] w-[200px] h-full object-cover rounded shrink-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
