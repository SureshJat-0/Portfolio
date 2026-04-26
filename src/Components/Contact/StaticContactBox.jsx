import Contact from "../../sections/Contact";
import { AiOutlineClose } from "react-icons/ai";

export default function StaticContactBox({
  showContactModal,
  setShowContactModal,
}) {
  const handleCloseContactBox = (e) => {
    e.preventDefault();
    setShowContactModal(false);
  };
  const handleParantClick = () => {
    setShowContactModal(false);
  };
  const handleChildClick = (e) => {
    e.stopPropagation(); // This prevents click from reaching the parent
  };
  return (
    <div
      className={`${
        showContactModal ? "flex" : "hidden"
      } justify-center items-start sm:items-center p-3 sm:p-0 fixed inset-0 w-screen h-screen backdrop-blur-[2px] z-[60]`}
      onClick={handleParantClick}
    >
      <div
        className="relative md:w-[80%] w-full max-h-[calc(100dvh-1.5rem)] sm:max-h-[90vh] lg:py-12 bg-[var(--bg-dark)] rounded-2xl flex flex-col justify-start overflow-y-auto"
        onClick={handleChildClick}
      >
        <div className="absolute right-0 top-0 text-[var(--text-muted)]">
          <AiOutlineClose
            onClick={handleCloseContactBox}
            className="text-2xl mt-4 mr-4 cursor-pointer"
          />
        </div>
        <Contact
          showContactModal={showContactModal}
          setShowContactModal={setShowContactModal}
        />
      </div>
    </div>
  );
}
