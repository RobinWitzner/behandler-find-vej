
import React from "react";
import { Compass, Lightbulb } from "lucide-react";

const explainers = [
  {
    title: "Hvad er problemet?",
    desc: "Vælg de udfordringer du tumler med – fx angst, stress eller parforhold.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="20" fill="#dff5ea"/>
        <text x="50%" y="54%" fontSize="20" textAnchor="middle" fill="#338062" fontWeight="bold" dominantBaseline="middle">?</text>
      </svg>
    ),
  },
  {
    title: "Find vej",
    desc: "Brug filtrene til at sortere terapeuter efter erfaring, problemstillinger og geografi.",
    icon: <Compass size={40} className="mx-auto text-[#338062]" />,
  },
  {
    title: "Tag det første skridt",
    desc: "Læs om behandlerne og vælg den, der passer bedst til dig – og kontakt direkte.",
    icon: <Lightbulb size={40} className="mx-auto text-[#338062]" />,
  },
];

const ExplainerCards: React.FC = () => (
  <section className="py-10 bg-secondary">
    <div className="container mx-auto px-0">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {explainers.map(e => (
          <div
            key={e.title}
            className="rounded-xl bg-white shadow-soft p-6 text-center flex flex-col items-center"
          >
            <div className="mb-4">{e.icon}</div>
            <h3 className="text-lg font-semibold mb-2 text-primary">{e.title}</h3>
            <p className="text-gray-700 text-sm">{e.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ExplainerCards;
