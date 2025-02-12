function SectionHeaders({ title, description, children }) {
  return (
    <div className="flex  items-center justify-between">
      <div>
        <h2 className="text-lg flex items-center gap-8 ">
          <div className="h-[3px] w-[6rem] bg-mainPrimary"></div>
          <span>{title}</span>
        </h2>
        <p className="mt-4 mr-32 text-sm  text-gray_10 font-normal">
          {description}
        </p>
      </div>
      {children}
    </div>
  );
}

export default SectionHeaders;
