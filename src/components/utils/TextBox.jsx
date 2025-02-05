import React from "react";
import DOMPurify from "dompurify";
function TextBox({ header, content }) {
  const sanitizedHtml = DOMPurify.sanitize(content);
  return (
    <div className="textBox">
      <h2 className="font-bold text-[1.8rem] text-gray_10 mb-[1.4rem]">
        {header}
      </h2>
      <p
        dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
        className="text-[1.4rem] font-normal text-justify text-gray_8 leading-[200%]"
      />
    </div>
  );
}

export default TextBox;
