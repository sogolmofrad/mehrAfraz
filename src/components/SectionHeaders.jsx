function SectionHeaders({ title, description, children }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-[2.4rem] flex items-center gap-[2rem]">
          <div className="h-[3px] w-[6rem] bg-redPrimary"></div>
          <span>{title}</span>
        </h2>
        <p className="mt-[1rem] mr-[8rem] text-[1.8rem]  text-greyDark">
          {description}
        </p>
      </div>
      {children}
    </div>
  );
}

export default SectionHeaders;
