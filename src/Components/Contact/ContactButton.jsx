export default function ContactButton({ setShowContact }) {
  const handleGetContact = (e) => {
    e.preventDefault();
    setShowContact(true);
  };
  return (
    <button
      onClick={handleGetContact}
      className="bg-[var(--btn-bg)] md:px-8 md:py-2 px-6 py-1 rounded tracking-wider cursor-pointer text-black"
    >
      Contact
    </button>
  );
}
