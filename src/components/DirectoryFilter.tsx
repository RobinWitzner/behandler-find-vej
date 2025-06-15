
import React from "react";
import { SPECIALTIES } from "./therapist-data";

type Props = {
  search: string;
  onSearch: (v: string) => void;
  checked: string[];
  onChecked: (v: string[]) => void;
};

const DirectoryFilter: React.FC<Props> = ({
  search,
  onSearch,
  checked,
  onChecked,
}) => {
  function toggleSpecialty(s: string) {
    if (checked.includes(s)) {
      onChecked(checked.filter(val => val !== s));
    } else {
      onChecked([...checked, s]);
    }
  }
  return (
    <div className="bg-white rounded-xl shadow-soft p-4 flex flex-col md:flex-row gap-4 items-center mb-8">
      <input
        type="text"
        className="w-full md:w-1/3 px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:outline-none text-base"
        placeholder="Søg på navn eller by..."
        value={search}
        onChange={e => onSearch(e.target.value)}
      />
      <div className="flex flex-wrap gap-2 w-full md:w-auto justify-center md:justify-start">
        {SPECIALTIES.map(s => (
          <label key={s} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={checked.includes(s)}
              onChange={() => toggleSpecialty(s)}
              className="rounded border-gray-300 accent-primary"
            />
            <span className="text-sm text-primary">{s}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default DirectoryFilter;
