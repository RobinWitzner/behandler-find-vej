
export type ProviderType =
  | "Psykolog"
  | "Diætist"
  | "Personlig træner"
  | "Coach";

export type Provider = {
  id: string;
  name: string;
  city: string;
  type: ProviderType;
  profession: string;
  description: string;
  bio: string;
  specialties: string[];
  image: string; // URL or blank
};

export const CITY_OPTIONS = [
  "København",
  "Aarhus",
  "Odense",
  "Aalborg",
  "Esbjerg",
  "Vejle",
  "Randers",
  "Horsens",
  "Kolding",
  "Herning",
  "Slagelse",
  "Roskilde",
];

export const TYPE_OPTIONS: ProviderType[] = [
  "Psykolog",
  "Diætist",
  "Personlig træner",
  "Coach",
];

export const SPECIALTIES_BY_TYPE: Record<ProviderType, string[]> = {
  Psykolog: [
    "Angst",
    "Stress",
    "Parforhold",
    "Lavt selvværd",
    "Børn/unge",
    "Familie",
    "Depression",
  ],
  "Diætist": ["Vægttab", "Sund kost", "Tarmproblemer", "Diabetes"],
  "Personlig træner": ["Genoptræning", "Vægttab", "Styrke", "Kondition"],
  Coach: ["Stress", "Karriere", "Livsstil", "Parforhold"],
};

export const ALL_SPECIALTIES = [
  ...new Set(
    Object.values(SPECIALTIES_BY_TYPE).flat()
  ),
];

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}
function pickN<T>(arr: T[], n: number): T[] {
  const shuffled = arr.slice().sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
}

export const PROVIDERS: Provider[] = [
  {
    id: "1",
    name: "Mette Larsen",
    city: "Aarhus",
    type: "Psykolog",
    profession: "Autoriseret psykolog",
    description: "Specialist i angst og stress.",
    bio:
      "Mette har 12 års erfaring med angst, stress og børn. Hun anvender evidensbaserede metoder og tilbyder både individuel og familiebehandling.",
    specialties: ["Angst", "Stress", "Børn/unge"],
    image: "https://randomuser.me/api/portraits/women/11.jpg",
  },
  {
    id: "2",
    name: "Peter Jensen",
    city: "København",
    type: "Psykolog",
    profession: "Cand.psych.",
    description: "Erfaring med parforhold.",
    bio:
      "Peter arbejder primært med par og unge voksne. Han lægger vægt på tryghed og åbenhed i samtalerne.",
    specialties: ["Parforhold", "Lavt selvværd"],
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    id: "3",
    name: "Sofia Madsen",
    city: "Odense",
    type: "Diætist",
    profession: "Klinisk diætist",
    description: "Specialiseret i vægttab.",
    bio:
      "Sofia har beskæftiget sig med vægttab, diabetes, og sund kost for hele familien de sidste 9 år.",
    specialties: ["Vægttab", "Sund kost", "Diabetes"],
    image: "https://randomuser.me/api/portraits/women/13.jpg",
  },
  {
    id: "4",
    name: "Anders Holm",
    city: "Aalborg",
    type: "Personlig træner",
    profession: "Personlig træner",
    description: "Ekspert i genoptræning.",
    bio:
      "Anders har styrketrænet klienter med skader og hjulpet dem til et liv uden smerter.",
    specialties: ["Genoptræning", "Styrke"],
    image: "https://randomuser.me/api/portraits/men/14.jpg",
  },
  {
    id: "5",
    name: "Camilla Friis",
    city: "Esbjerg",
    type: "Coach",
    profession: "Certificeret coach",
    description: "Støtte ved stress og karriere.",
    bio:
      "Camilla bruger coaching til at skabe varige forandringer i livsstil og arbejdsliv.",
    specialties: ["Stress", "Karriere", "Livsstil"],
    image: "https://randomuser.me/api/portraits/women/15.jpg",
  },
  {
    id: "6",
    name: "Jonas Thomsen",
    city: "Randers",
    type: "Psykolog",
    profession: "Psykolog",
    description: "Parterapeut med fokus på dialog.",
    bio:
      "Jonas har speciale i kommunikation og løser konflikter mellem par og familier.",
    specialties: ["Parforhold", "Familie"],
    image: "https://randomuser.me/api/portraits/men/16.jpg",
  },
  {
    id: "7",
    name: "Lene Pedersen",
    city: "Vejle",
    type: "Psykolog",
    profession: "Børnepsykolog",
    description: "Hjælper børn og unge.",
    bio:
      "Lene har dedikeret sin praksis til børn og unge med angst og lavt selvværd.",
    specialties: ["Børn/unge", "Lavt selvværd", "Angst"],
    image: "https://randomuser.me/api/portraits/women/17.jpg",
  },
  {
    id: "8",
    name: "Thomas Dahl",
    city: "Roskilde",
    type: "Diætist",
    profession: "Klinisk diætist",
    description: "Sund mad & tarmproblemer.",
    bio:
      "Thomas hjælper klienter med mave/tarmproblemer og tilpassede kostplaner.",
    specialties: ["Tarmproblemer", "Sund kost"],
    image: "https://randomuser.me/api/portraits/men/18.jpg",
  },
  {
    id: "9",
    name: "Maria Olsen",
    city: "Herning",
    type: "Coach",
    profession: "Coach",
    description: "Fokus på familie og parforhold.",
    bio:
      "Maria hjælper familier og par med at bryde dårlige mønstre og styrke relationer.",
    specialties: ["Familie", "Parforhold"],
    image: "https://randomuser.me/api/portraits/women/19.jpg",
  },
  {
    id: "10",
    name: "Isabella Gregersen",
    city: "Horsens",
    type: "Personlig træner",
    profession: "Personlig træner",
    description: "Hjælp til vægttab og kondition.",
    bio:
      "Isabella leverer energisk træning og motiverende coaching til alle aldre.",
    specialties: ["Vægttab", "Kondition"],
    image: "https://randomuser.me/api/portraits/women/20.jpg",
  },
  {
    id: "11",
    name: "Mads Nielsen",
    city: "Slagelse",
    type: "Psykolog",
    profession: "Cand.psych.",
    description: "Ekspert i lavt selvværd.",
    bio:
      "Mads har overskueligt forløb til unge med lavt selvværd og sociale udfordringer.",
    specialties: ["Lavt selvværd", "Depression"],
    image: "https://randomuser.me/api/portraits/men/21.jpg",
  },
  {
    id: "12",
    name: "Susanne Krogh",
    city: "Kolding",
    type: "Psykolog",
    profession: "Familieterapeut",
    description: "Støtte til unge og familiesystemer.",
    bio:
      "Susanne arbejder systemisk med hele familien for at skabe varige forandringer.",
    specialties: ["Børn/unge", "Familie"],
    image: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    id: "13",
    name: "Søren Berg",
    city: "Odense",
    type: "Personlig træner",
    profession: "Personlig træner",
    description: "Hjælp til genoptræning.",
    bio:
      "Søren har fokus på genoptræning efter skader og individuel tilpasning af træning.",
    specialties: ["Genoptræning", "Styrke", "Kondition"],
    image: "https://randomuser.me/api/portraits/men/23.jpg",
  },
  {
    id: "14",
    name: "Betina Mørk",
    city: "Aarhus",
    type: "Coach",
    profession: "Coach",
    description: "Livsstilsændringer og stress.",
    bio:
      "Betina hjælper med stresshåndtering samt varige livsstilsændringer.",
    specialties: ["Stress", "Livsstil"],
    image: "https://randomuser.me/api/portraits/women/24.jpg",
  },
  {
    id: "15",
    name: "Emil Ravn",
    city: "København",
    type: "Diætist",
    profession: "Klinisk diætist",
    description: "Skræddersyede kostplaner.",
    bio:
      "Emil laver individuelle kostplaner for vægttab og velvære.",
    specialties: ["Vægttab", "Sund kost"],
    image: "https://randomuser.me/api/portraits/men/25.jpg",
  },
];
