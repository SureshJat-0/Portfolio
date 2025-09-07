import Contact from "../../sections/Contact";
import { AiOutlineClose } from "react-icons/ai";

export default function StaticContactBox({ showContact, setShowContact }) {
  const handleCloseContactBox = (e) => {
    e.preventDefault();
    setShowContact(false);
  };
  const handleParantClick = () => {
    setShowContact(false);
  };
  const handleChildClick = (e) => {
    e.stopPropagation(); // This prevents click from reaching the parent
  };
  return (
    <div
      className={`${
        showContact ? "flex" : "hidden"
      } justify-center items-start sm:items-center pt-8 sm:pt-0 fixed top-0 w-screen h-screen backdrop-blur-[2px] z-5`}
      onClick={handleParantClick}
    >
      <div
        className="relative md:w-[80%] w-[90%] lg:py-12 bg-[var(--bg-dark)] rounded-2xl flex flex-col justify-start overflow-y-auto"
        onClick={handleChildClick}
      >
        <div className="absolute right-0 top-0 text-[var(--text-muted)]">
          <AiOutlineClose
            onClick={handleCloseContactBox}
            className="text-2xl mt-4 mr-4 cursor-pointer"
          />
        </div>
        <Contact showContact={showContact} setShowContact={setShowContact} />
      </div>
    </div>
  );
}
