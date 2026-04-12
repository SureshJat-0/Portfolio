import "../App.css";
import AiCodeReviewer from "../assets/AiCodeReviewer.webp";
import ChatApp from "../assets/ChatApp.webp";
import LogicLoop from "../assets/LogicLoop.webp";
import PlacePort from "../assets/PlacePort.webp";
import Twitter from "../assets/Twitter.webp";
import Amazon from "../assets/Amazon.webp";
import WatchWeb from "../assets/WatchWeb.webp";
import EarBeats from "../assets/EarBeats.webp";
import RotatedNav from "../assets/RotatedNav.webp";
import CurrencyCoverter from "../assets/CurrencyConverter.webp";
import Calcy from "../assets/Calcy.webp";
import RockPaperScissor from "../assets/RockPaperScissor.webp";
import TicTacToe from "../assets/TicTacToe.webp";
import ExpandingCards from "../assets/ExpandingCards.webp";

export default function ScrollingProjects({ scrollLeft }) {
  const images = [
    AiCodeReviewer,
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
    <div className="scroll-mt-16 w-full overflow-hidden whitespace-nowrap my-4 relative before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:w-16 before:z-10 before:pointer-events-none before:bg-gradient-to-r before:from-[var(--bg)] before:to-transparent after:content-[''] after:absolute after:top-0 after:right-0 after:h-full after:w-16 after:z-10 after:pointer-events-none after:bg-gradient-to-l after:from-[var(--bg)] after:to-transparent">
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
