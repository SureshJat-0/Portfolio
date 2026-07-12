export default function SecondaryLink({
  Title,
  hrefTarget,
  FrontIcon,
  BackIcon,
  ariaLabel,
}) {
  return (
    <a
      href={hrefTarget}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={`group flex items-center justify-center gap-2 rounded-[0.5rem] border border-[hsl(127_40%_60%_/_0.38)] bg-[hsl(200_23%_8%_/_0.2)] px-6 py-2 text-left text-[var(--text-green-light)] transition-colors duration-300 hover:border-[hsl(127_52%_68%_/_0.75)] hover:bg-[hsl(200_23%_8%_/_0.32)] cursor-pointer`}
    >
      {FrontIcon && FrontIcon}
      <span>{Title}</span>
      {BackIcon && BackIcon}
    </a>
  );
}
