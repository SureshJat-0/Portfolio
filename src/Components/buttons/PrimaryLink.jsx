export default function PrimaryLink({
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
      className={`group flex items-center justify-between gap-2 rounded-[0.5rem] border border-[hsl(127_40%_60%_/_0.2)] bg-[hsl(147_46%_40%_/_0.94)] hover:bg-[hsl(147_46%_42%)] px-6 py-2 text-left text-black shadow-[0_0_0_1px_hsl(127_48%_60%_/_0.06),0_8px_14px_hsl(127_50%_18%_/_0.1)] transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_hsl(127_48%_60%_/_0.1),0_8px_14px_hsl(127_50%_18%_/_0.2)] cursor-pointer`}
    >
      {FrontIcon && FrontIcon}
      <span>{Title}</span>
      {BackIcon && BackIcon}
    </a>
  );
}
