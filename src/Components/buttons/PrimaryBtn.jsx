export default function PrimaryBtn({ Title, FrontIcon, BackIcon, ClickFun }) {
  return (
    <button
      type="button"
      onClick={ClickFun}
      className="group flex items-center justify-between gap-4 rounded-[0.6rem] border border-[hsl(127_40%_60%_/_0.2)] bg-[hsl(147_46%_40%_/_0.94)] hover:bg-[hsl(147_46%_42%)] px-5 py-2 text-left text-black shadow-[0_0_0_1px_hsl(127_48%_60%_/_0.06),0_8px_14px_hsl(127_50%_18%_/_0.1)] hover:shadow-[0_0_0_1px_hsl(127_48%_60%_/_0.1),0_8px_14px_hsl(127_50%_18%_/_0.2)] transition-transform duration-300 hover:-translate-y-0.5 cursor-pointer"
    >
      <span className="flex items-center gap-4">
        {FrontIcon && (
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[hsl(200_22%_8%_/_0.1)] text-black">
            {FrontIcon}
          </span>
        )}
        <span className="text-[0.95rem] font-[500] text-black">{Title}</span>
      </span>
      {BackIcon && BackIcon}
    </button>
  );
}
