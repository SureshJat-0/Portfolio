export default function SecondaryBtn({ Title, FrontIcon, BackIcon, ClickFun }) {
  return (
    <button
      type="button"
      onClick={ClickFun}
      className={`group flex w-full items-center ${BackIcon ? "justify-between" : "justify-center"} gap-4 rounded-[0.85rem] border border-[hsl(127_40%_60%_/_0.38)] bg-[hsl(200_23%_8%_/_0.2)] px-5 py-2 text-left text-[var(--text-green-light)] transition-colors duration-300 hover:border-[hsl(127_52%_68%_/_0.75)] hover:bg-[hsl(200_23%_8%_/_0.32)] cursor-pointer`}
    >
      <span className="flex items-center gap-4">
        {FrontIcon && (
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[hsl(127_40%_60%_/_0.16)] bg-[hsl(200_23%_8%_/_0.3)] text-[var(--text-green-light)]">
            {FrontIcon}
          </span>
        )}
        <span className="text-[0.9rem] font-[500] sm:text-[0.95rem]">
          {Title}
        </span>
      </span>
      {BackIcon && BackIcon}
    </button>
  );
}
