import React, { useState } from "react";
import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";

const people = [
  { id: 1, name: "Durward Reynolds" },
  { id: 2, name: "Kenton Towne" },
  { id: 3, name: "Therese Wunsch" },
  { id: 4, name: "Benedict Kessler" },
  { id: 5, name: "Katelyn Rohan" },
];

function Test() {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) =>
          person.name.toLowerCase().includes(query.toLowerCase())
        );

  return (
    <div className="w-[800px] h-[200px] bg-black pt-[100px] mx-auto">
      <Combobox
        value={selectedPerson}
        onChange={setSelectedPerson}
        onClose={() => {
          setQuery("");
          setIsOpen(false);
        }}
      >
        <ComboboxInput
          aria-label="Assignee"
          displayValue={(person) => person?.name}
          onChange={(event) => {
            setQuery(event.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          className="mx-auto border p-2"
        />
        {isOpen && filteredPeople.length > 0 && (
          <ComboboxOptions
            anchor="bottom"
            className="border bg-white absolute z-10 mt-1 w-full shadow-lg rounded-md"
          >
            {filteredPeople.map((person) => (
              <ComboboxOption
                key={person.id}
                value={person}
                className="p-2 hover:bg-blue-100 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {person.name}
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        )}
      </Combobox>
    </div>
  );
}

export default Test;
