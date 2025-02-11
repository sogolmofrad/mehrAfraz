import React from "react";

function IconTextBox({ icon, heading, paragraph }) {
  return (
    <div className="flex flex-col items-center gap-[2.4rem]">
      <div className="text-[4rem] text-mainPrimary">{icon}</div>

      <h3 className="text-[1.6rem] font-bold"> {heading}</h3>
      <p className="text-[1.8rem] text-grey">{paragraph}</p>
    </div>
  );
}

export default IconTextBox;
