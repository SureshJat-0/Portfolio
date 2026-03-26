export default function ContactButton({ setShowContactModal }) {
  const handleGetContact = (e) => {
    e.preventDefault();
    setShowContactModal(true);
  };
  return (
    <button
      onClick={handleGetContact}
      className="bg-[var(--btn-bg)] bg-gradient-to-br from-[var(--text-green)] from-50% to-[var(--text-green-dark)] border hover:border-[var(--text-green)] hover:shadow-[var(--bg-dark)] md:px-8 md:py-2 px-6 py-1 rounded tracking-wider cursor-pointer text-black"
    >
      Contact Me
    </button>
  );
}
