function SectionHeaders({ title, description, children }) {
  return (
    <div className="flex py-[3.2rem] items-center justify-between">
      <div>
        <h2 className="text-[2.4rem] flex items-center gap-[2rem]">
          <div className="h-[3px] w-[6rem] bg-red_5"></div>
          <span>{title}</span>
        </h2>
        <p className="mt-[1rem] mr-[8rem] text-[1.8rem]  text-gray_10">
          {description}
        </p>
      </div>
      {children}
    </div>
  );
}

export default SectionHeaders;
