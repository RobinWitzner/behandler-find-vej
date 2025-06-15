
import React from "react";
import { THERAPISTS, Therapist } from "./therapist-data";
import TherapistCard from "./TherapistCard";
import DirectoryFilter from "./DirectoryFilter";

function filterTherapists(
  list: Therapist[],
  search: string,
  specialties: string[]
) {
  let filtered = list;
  if (search.trim() !== "") {
    const s = search.trim().toLowerCase();
    filtered = filtered.filter(
      t =>
        t.name.toLowerCase().includes(s) ||
        t.city.toLowerCase().includes(s)
    );
  }
  if (specialties.length > 0) {
    filtered = filtered.filter(t =>
      specialties.every(spec => t.specialties.includes(spec))
    );
  }
  return filtered;
}

const TherapistDirectory: React.FC = () => {
  const [search, setSearch] = React.useState("");
  const [checked, setChecked] = React.useState<string[]>([]);

  const filtered = filterTherapists(THERAPISTS, search, checked);

  return (
    <section className="pt-20 pb-20 bg-[#f4f9f5]" id="directory">
      <div className="container mx-auto px-0">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
          Find en behandler
        </h2>
        <DirectoryFilter
          search={search}
          onSearch={setSearch}
          checked={checked}
          onChecked={setChecked}
        />
        {filtered.length === 0 ? (
          <div className="p-10 text-center text-lg text-gray-600 bg-white rounded-2xl shadow-soft">
            Ingen behandlere matcher dine kriterier
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map(t => (
              <TherapistCard therapist={t} key={t.id} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TherapistDirectory;
