export default function NavbarItems({ name, currRef, setShowSmallScreenNav }) {
  const handleClick = (ref) => {
    if(setShowSmallScreenNav) {
      setShowSmallScreenNav(false);
    }
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <li
      onClick={() => handleClick(currRef)}
      className="mx-2 px-2 my-1 cursor-pointer hover:text-[var(--text-green-light)] w-[90%]"
    >
      {name}
    </li>
  );
}
