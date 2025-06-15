
import React, { useState, useMemo } from "react";
import {
  PROVIDERS,
  TYPE_OPTIONS,
  ALL_SPECIALTIES,
  SPECIALTIES_BY_TYPE,
  CITY_OPTIONS,
  ProviderType,
} from "@/components/therapist-data";
import TherapistCard from "@/components/TherapistCard";
import { useSearchParams } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";

const viewModes = [
  { key: "grid", label: "Grid" },
  { key: "list", label: "Liste" },
  { key: "map", label: "Kort" },
];

const filterProviders = (
  providers,
  { search, type, specialties, city }
) => {
  let filtered = providers;
  if (search.trim()) {
    const s = search.trim().toLowerCase();
    filtered = filtered.filter(
      p =>
        p.name.toLowerCase().includes(s) ||
        p.city.toLowerCase().includes(s)
    );
  }
  if (type) {
    filtered = filtered.filter(p => p.type === type);
  }
  if (city) {
    filtered = filtered.filter(p => p.city === city);
  }
  if (specialties.length) {
    filtered = filtered.filter(p =>
      specialties.every(tag => p.specialties.includes(tag))
    );
  }
  return filtered;
};

const DirectoryPage: React.FC = () => {
  const [params] = useSearchParams();
  const initType =
    TYPE_OPTIONS.find(
      t => t.toLowerCase() === (params.get("type") || "").toLowerCase()
    ) || "";
  const initSpecialty =
    params.get("speciale") || "";
  const [search, setSearch] = useState("");
  const [type, setType] = useState(initType || "");
  const [city, setCity] = useState("");
  const [specialties, setSpecialties] = useState(
    initSpecialty ? [initSpecialty] : []
  );
  const [view, setView] = useState("grid");
  const [openModalId, setOpenModalId] = useState<string | null>(null);

  const specialtyOptions =
    type && SPECIALTIES_BY_TYPE[type as ProviderType]
      ? SPECIALTIES_BY_TYPE[type as ProviderType]
      : ALL_SPECIALTIES;

  const filtered = useMemo(
    () =>
      filterProviders(PROVIDERS, {
        search,
        type: type as ProviderType,
        city,
        specialties,
      }),
    [search, type, city, specialties]
  );

  const openProvider = filtered.find(p => p.id === openModalId);

  return (
    <main className="bg-[#f4f9f5] font-sans min-h-screen py-10">
      <div className="container mx-auto max-w-5xl px-4">
        <h1 className="text-2xl md:text-3xl font-bold text-primary mb-2 mt-2 text-center">
          Find en behandler der passer til dig
        </h1>
        <div className="mb-5 text-center text-base text-gray-700">
          Filtrér på behov, lokation og specialer – og få overblik med det samme
        </div>
        {/* Filters */}
        <form
          className="bg-white rounded-xl shadow-soft p-4 mb-10 flex flex-col md:flex-row gap-4 items-center"
          onSubmit={e => e.preventDefault()}
        >
          <input
            type="text"
            className="w-full md:w-1/4 px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:outline-none text-base"
            placeholder="Søg på navn eller by..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            aria-label="Søg på navn eller by"
          />
          <Select
            value={type}
            onValueChange={val => {
              setType(val);
              setSpecialties([]); // clear specialties when type changes
            }}
          >
            <SelectTrigger className="md:w-36 w-full">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem key="alle" value="">
                Alle typer
              </SelectItem>
              {TYPE_OPTIONS.map(opt => (
                <SelectItem key={opt} value={opt}>
                  {opt}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select
            value={city}
            onValueChange={setCity}
          >
            <SelectTrigger className="md:w-36 w-full">
              <SelectValue placeholder="By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Alle byer</SelectItem>
              {CITY_OPTIONS.map(c => (
                <SelectItem key={c} value={c}>
                  {c}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="flex flex-wrap gap-2 w-full md:w-auto justify-center md:justify-start">
            {specialtyOptions.map(s => (
              <label key={s} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={specialties.includes(s)}
                  onChange={() => {
                    if (specialties.includes(s)) {
                      setSpecialties(specialties.filter(val => val !== s));
                    } else {
                      setSpecialties([...specialties, s]);
                    }
                  }}
                  className="rounded border-gray-300 accent-primary"
                />
                <span className="text-sm text-primary">{s}</span>
              </label>
            ))}
          </div>
        </form>
        {/* View toggle */}
        <div className="flex gap-2 mb-5 justify-end">
          {viewModes.map(vm => (
            <Button
              key={vm.key}
              variant={view === vm.key ? "default" : "outline"}
              size="sm"
              className={view === vm.key ? "border-primary" : ""}
              onClick={() => setView(vm.key)}
              type="button"
            >
              {vm.label}
            </Button>
          ))}
        </div>
        {/* Directory */}
        {filtered.length === 0 ? (
          <div className="p-10 text-center text-lg text-gray-600 bg-white rounded-2xl shadow-soft">
            Ingen behandlere matcher dine kriterier
          </div>
        ) : (
          <>
            {view === "grid" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
                {filtered.map(p => (
                  <div key={p.id} className="h-full">
                    <TherapistCard
                      therapist={{
                        id: p.id,
                        name: p.name,
                        city: p.city,
                        description: p.description,
                        specialties: p.specialties,
                        image: p.image,
                        type: p.type,
                        profession: p.profession,
                      }}
                      onReadMore={() => setOpenModalId(p.id)}
                    />
                  </div>
                ))}
              </div>
            )}
            {view === "list" && (
              <div className="flex flex-col gap-4">
                {filtered.map(p => (
                  <div
                    key={p.id}
                    className="bg-white rounded-lg shadow-soft p-5 flex flex-col md:flex-row items-center md:items-start"
                  >
                    <img
                      src={p.image}
                      alt={p.name}
                      className="rounded-full w-16 h-16 object-cover border-4 border-accent bg-[#f0f5f0] mr-3 mb-2 md:mb-0"
                    />
                    <div className="flex-1 md:ml-3">
                      <div className="font-semibold text-lg text-primary">{p.name}</div>
                      <div className="text-sm text-gray-600">{p.profession} — {p.city}</div>
                      <div className="flex flex-wrap gap-2 my-2">
                        {p.specialties.map(s => (
                          <Badge key={s} variant="secondary">
                            {s}
                          </Badge>
                        ))}
                      </div>
                      <div className="text-[15px] text-gray-800">{p.description}</div>
                    </div>
                    <Button
                      className="mt-3 md:mt-0"
                      onClick={() => setOpenModalId(p.id)}
                      type="button"
                    >
                      Læs mere
                    </Button>
                  </div>
                ))}
              </div>
            )}
            {view === "map" && (
              <div className="bg-white rounded-lg p-8 text-center text-lg text-gray-500 min-h-[280px] flex flex-col items-center justify-center shadow-soft">
                <div className="mb-2">[Map placeholder]</div>
                <div>Her kunne du se kort over behandlere… (demo)</div>
              </div>
            )}
          </>
        )}
        {/* MODAL */}
        {openProvider && (
          <Dialog open onOpenChange={v => !v && setOpenModalId(null)}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  {openProvider.name} <span className="text-sm text-gray-700 font-normal">({openProvider.type})</span>
                </DialogTitle>
                <DialogDescription>
                  <div className="mb-1 text-gray-700">{openProvider.city}, {openProvider.profession}</div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {openProvider.specialties.map(s => (
                      <Badge key={s} variant="secondary">
                        {s}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-base mt-3 whitespace-pre-line">{openProvider.bio}</p>
                  <Button className="mt-5 w-full" onClick={() => {}} type="button">
                    Book en tid
                  </Button>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </main>
  );
};
export default DirectoryPage;
