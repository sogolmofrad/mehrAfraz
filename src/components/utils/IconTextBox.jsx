import React from "react";

function IconTextBox({ icon, heading, paragraph }) {
  return (
    <div className="flex flex-col items-center gap-medium">
      <div className="text-[4rem] text-mainPrimary">{icon}</div>

      <h3 className="text-base font-bold"> {heading}</h3>
      <p className="text-lg text-grey">{paragraph}</p>
    </div>
  );
}

export default IconTextBox;
