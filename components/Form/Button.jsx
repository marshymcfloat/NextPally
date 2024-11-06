export default function Button({
  invert = false,
  children,
  disabled,
  isSubmitting,
  ...props
}) {
  const style = invert
    ? "mx-auto h-12 rounded-lg border-[3px] border-customGreen01 bg-customBgColor px-4 py-2 font-bold uppercase text-customGreen01 transition-all duration-100 hover:border-[3px] hover:border-customGreen01 hover:bg-customGreen01 hover:text-customBGColor min-w-[115px]"
    : "mx-auto h-12 rounded-lg border-[3px] border-customGreen01 bg-customGreen01 px-4 py-2 font-bold uppercase text-customBGColor transition-all duration-100 hover:border-[3px] hover:border-customGreen01 hover:bg-customBGColor hover:text-customGreen01 min-w-[115px]";

  const disabledStyle = "cursor-not-allowed opacity-50 ";

  return (
    <button
      {...props}
      className={`${style} ${disabled ? disabledStyle : ""}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
