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
      } justify-center items-center fixed top-6 w-screen h-screen backdrop-blur-[2px]`}
      onClick={handleParantClick}
    >
      <div
        className="md:h-[80%] md:w-[80%] h-[90%] w-[90%] bg-[var(--bg-dark)] rounded-2xl flex flex-col justify-start overflow-y-auto"
        onClick={handleChildClick}
      >
        <div className="flex justify-end text-[var(--text-muted)]">
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
