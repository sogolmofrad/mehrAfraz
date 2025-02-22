import React, { useState } from "react";

function Test() {
  // const [selectedOrigin, setSelectedOrigin] = useState("مبدا" || null);
  // const [query, setQuery] = useState("");

  // const filteredOrigin =
  //   query === ""
  //     ? origin
  //     : origin.filter((origin) => origin.name.includes(query));
  return (
    // grid test
    // <div className="container mx-auto px-[5rem] max-w-[1200px]">
    //   <div className="grid grid-cols-12 gap-4">
    //     <div className="col-span-6 md:col-span-4 lg:col-span-3 border-2 border-black">
    //       col1
    //     </div>
    //     <div className="col-span-6 md:col-span-4 lg:col-span-3 border-2 border-black">
    //       col2
    //     </div>
    //     <div className="col-span-6 md:col-span-4 lg:col-span-3 border-2 border-black">
    //       col3
    //     </div>
    //     <div className="col-span-6 md:col-span-4 lg:col-span-3 border-2 border-black">
    //       col4
    //     </div>
    //     <div className="col-span-6 md:col-span-4 lg:col-span-3 border-2 border-black">
    //       col5
    //     </div>
    //   </div>
    // </div>

    //combo box test
    // <Combobox
    //   value={selectedOrigin}
    //   onChange={setSelectedOrigin}
    //   onClose={() => setQuery("")}
    // >
    //   <ComboboxInput
    //     aria-label="Assignee"
    //     displayValue={(origin) => origin?.name}
    //     onChange={(event) => setQuery(event.target.value)}
    //   />
    //   <ComboboxOptions anchor="bottom" className="border empty:invisible">
    //     {filteredOrigin.map((origin) => (
    //       <ComboboxOption
    //         key={origin.id}
    //         value={origin}
    //         className="data-[focus]:bg-blue-100"
    //       >
    //         {origin.name}
    //       </ComboboxOption>
    //     ))}
    //   </ComboboxOptions>
    // </Combobox>

    //react autowhatever
    <div role="button"></div>
  );
}

export default Test;
