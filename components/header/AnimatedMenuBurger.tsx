export default function AnimatedMenuBurger({
  open,
  onClick,
}: {
  open: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className="z-50 flex relative w-8 h-8 flex-col justify-between items-center"
      onClick={onClick}
    >
      <span
        className={`h-1 w-full bg-primary-light dark:bg-white rounded-lg transform transition duration-300 ease-in-out ${
          open ? "rotate-45 translate-y-3.5" : ""
        }`}
      />
      <span
        className={`h-1 w-full bg-primary-light dark:bg-white rounded-lg transition-all duration-300 ease-in-out ${
          open ? "w-0" : "w-full"
        }`}
      />
      <span
        className={`h-1 w-full bg-primary-light dark:bg-white rounded-lg transform transition duration-300 ease-in-out ${
          open ? "-rotate-45 -translate-y-3.5" : ""
        }`}
      />
    </div>
  );
}
