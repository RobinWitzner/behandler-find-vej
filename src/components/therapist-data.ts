
export type Therapist = {
  id: string;
  name: string;
  city: string;
  description: string;
  specialties: string[];
  image: string; // URL or blank
};

export const SPECIALTIES = [
  "Angst",
  "Stress",
  "Parforhold",
  "Depression",
  "Familie",
  "Børn/unge",
  "Selvværd",
];

function rand(arr: string[]) {
  return arr
    .sort(() => 0.5 - Math.random())
    .slice(0, Math.floor(Math.random() * 2) + 3);
}

export const THERAPISTS: Therapist[] = [
  {
    id: "1",
    name: "Mette Larsen",
    city: "Aarhus",
    description: "Specialist i angst og stress.",
    specialties: ["Angst", "Stress", "Selvværd"],
    image: "",
  },
  {
    id: "2",
    name: "Peter Jensen",
    city: "København",
    description: "Erfaring med parforhold.",
    specialties: ["Parforhold", "Depression"],
    image: "",
  },
  {
    id: "3",
    name: "Sofia Madsen",
    city: "Odense",
    description: "Hjælper familier & børn.",
    specialties: ["Familie", "Børn/unge"],
    image: "",
  },
  {
    id: "4",
    name: "Anders Holm",
    city: "Aalborg",
    description: "Ekspert i stress og arbejdsliv.",
    specialties: ["Stress", "Angst"],
    image: "",
  },
  {
    id: "5",
    name: "Camilla Friis",
    city: "Esbjerg",
    description: "Støtte ved depression.",
    specialties: ["Depression", "Selvværd"],
    image: "",
  },
  {
    id: "6",
    name: "Jonas Thomsen",
    city: "Randers",
    description: "Parterapeut med fokus på dialog.",
    specialties: ["Parforhold", "Familie"],
    image: "",
  },
  {
    id: "7",
    name: "Lene Pedersen",
    city: "Vejle",
    description: "Hjælper børn og unge.",
    specialties: ["Børn/unge", "Selvværd"],
    image: "",
  },
  {
    id: "8",
    name: "Thomas Dahl",
    city: "Roskilde",
    description: "Angst og depression specialist.",
    specialties: ["Angst", "Depression"],
    image: "",
  },
  {
    id: "9",
    name: "Maria Olsen",
    city: "Herning",
    description: "Familiekonsulent.",
    specialties: ["Familie", "Børn/unge"],
    image: "",
  },
  {
    id: "10",
    name: "Isabella Gregersen",
    city: "Horsens",
    description: "Erfaring med parterapi og stress.",
    specialties: ["Parforhold", "Stress"],
    image: "",
  },
  {
    id: "11",
    name: "Mads Nielsen",
    city: "Slagelse",
    description: "Selvværd og depression.",
    specialties: ["Selvværd", "Depression"],
    image: "",
  },
  {
    id: "12",
    name: "Susanne Krogh",
    city: "Kolding",
    description: "Støtte til unge og familie.",
    specialties: ["Børn/unge", "Familie"],
    image: "",
  },
].map((t, idx) => ({
  ...t,
  // Assign same placeholder image, could be enhanced with more diverse ones.
  image:
    "https://randomuser.me/api/portraits/women/" +
    ((idx % 8) + 10) +
    ".jpg",
}));
