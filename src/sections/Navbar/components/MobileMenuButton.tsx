export const MobileMenuButton = () => {
  return (
    <div
      aria-label="menu"
      role="button"
      className="relative text-2xl box-border caret-transparent block float-right leading-[38.4px] min-h-[auto] min-w-[auto] md:hidden md:min-h-0 md:min-w-0"
    >
      <div className="items-center box-border caret-transparent flex flex-col h-12 justify-center mr-[-7.56485px] w-12 md:[align-items:normal] md:block md:flex-row md:h-auto md:justify-normal md:w-auto md:mr-0">
        <div className="bg-white box-border caret-transparent h-0.5 min-h-[auto] min-w-[auto] w-6 md:bg-transparent md:h-auto md:min-h-0 md:min-w-0 md:w-auto"></div>
        <div className="items-center bg-white box-border caret-transparent flex h-0.5 justify-center min-h-[auto] min-w-[auto] w-6 my-1.5 md:[align-items:normal] md:bg-transparent md:block md:h-auto md:justify-normal md:min-h-0 md:min-w-0 md:w-auto md:my-0">
          <div className="box-border caret-transparent h-0 min-h-[auto] min-w-[auto] w-1 md:h-auto md:min-h-0 md:min-w-0 md:w-auto"></div>
        </div>
        <div className="bg-white box-border caret-transparent h-0.5 min-h-[auto] min-w-[auto] w-6 md:bg-transparent md:h-auto md:min-h-0 md:min-w-0 md:w-auto"></div>
      </div>
    </div>
  );
};
