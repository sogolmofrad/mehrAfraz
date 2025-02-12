import React from "react";
import DOMPurify from "dompurify";
function TextBox({ header, content }) {
  const sanitizedHtml = DOMPurify.sanitize(content);
  return (
    <div className="textBox">
      <h2 className="font-bold text-lg text-gray_10 mb-small">{header}</h2>
      <p
        dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
        className="text-sm font-normal text-justify text-gray_8 leading-[200%]"
      />
    </div>
  );
}

export default TextBox;
