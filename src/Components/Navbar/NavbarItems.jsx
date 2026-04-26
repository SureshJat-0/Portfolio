export default function NavbarItems({
  name,
  currRef,
  setShowSmallScreenNav,
  isActive = false,
  variant = "desktop",
  onNavigate,
}) {
  const handleClick = (ref) => {
    if (setShowSmallScreenNav) {
      setShowSmallScreenNav(false);
    }
    if (onNavigate) {
      onNavigate(name);
    }
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const desktopItemClass = isActive
    ? "text-[var(--text-green-light)]"
    : "text-[var(--text-muted)] hover:text-[var(--text)]";

  const mobileItemClass = isActive
    ? "border-[var(--text-green)]/35 bg-[hsl(200_22%_12%_/_0.92)] text-[var(--text-green-light)]"
    : "border-transparent bg-transparent text-[var(--text)] hover:border-[var(--text-green)]/20 hover:bg-[hsl(200_22%_12%_/_0.7)]";

  const indicatorClass = isActive
    ? "scale-x-100 bg-[var(--text-green)]"
    : "scale-x-0 bg-[var(--text-green)]/80 group-hover:scale-x-100";

  return (
    <li
      onClick={() => handleClick(currRef)}
      className={`group cursor-pointer transition-all duration-200 ${
        variant === "mobile"
          ? `w-full rounded-xl border px-4 py-3 text-[0.95rem] font-medium ${mobileItemClass}`
          : `px-1 py-1 text-sm font-medium tracking-[0.02em] ${desktopItemClass}`
      }`}
    >
      <span className="relative inline-block">
        {name}
        {variant === "desktop" ? (
          <span
            className={`absolute -bottom-1 left-0 h-[2px] w-full origin-left rounded-full transition-transform duration-200 ${indicatorClass}`}
            aria-hidden="true"
          ></span>
        ) : null}
      </span>
    </li>
  );
}
