
import React from "react";
import { ArrowRight, PersonStanding } from "lucide-react";
import { useNavigate } from "react-router-dom";

const selectors = [
  {
    title: "Til mig selv",
    subtitle: "Se terapeuter med erfaring i individuelle forløb",
    icon: <PersonStanding size={36} className="text-primary" />,
    type: "psykolog",
    specialty: "Angst",
  },
  {
    title: "Til mit barn",
    subtitle: "Find hjælp til børn og unge",
    icon: (
      <span className="inline-block rounded-full bg-accent p-2">
        <svg width="30" height="30" fill="none" viewBox="0 0 40 40">
          <ellipse cx="20" cy="13" rx="8" ry="8" fill="#96c8af" />
          <rect x="12" y="19" width="16" height="12" rx="5" fill="#dff5ea" />
        </svg>
      </span>
    ),
    type: "psykolog",
    specialty: "Børn/unge",
  },
  {
    title: "Til os som par",
    subtitle: "Se terapeuter med parforholdserfaring",
    icon: (
      <span className="inline-block rounded-full bg-accent p-2">
        <svg width="32" height="32" fill="none" viewBox="0 0 38 38">
          <ellipse cx="12" cy="13" rx="6" ry="7" fill="#96c8af" />
          <ellipse cx="24" cy="13" rx="6" ry="7" fill="#dff5ea" />
        </svg>
      </span>
    ),
    type: "psykolog",
    specialty: "Parforhold",
  },
  {
    title: "Til familien",
    subtitle: "Find en behandler med familiespeciale",
    icon: (
      <span className="inline-block rounded-full bg-accent p-2">
        <svg width="40" height="32" fill="none" viewBox="0 0 40 32">
          <ellipse cx="8" cy="15" rx="5" ry="7" fill="#96c8af" />
          <ellipse cx="20" cy="10" rx="6" ry="8" fill="#dff5ea" />
          <ellipse cx="32" cy="15" rx="5" ry="7" fill="#96c8af" />
        </svg>
      </span>
    ),
    type: "psykolog",
    specialty: "Familie",
  },
];

const UserSelector: React.FC<{ onSelect?: () => void }> = ({ onSelect }) => {
  const navigate = useNavigate();
  return (
    <section className="py-12 bg-white" id="selector">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
          Hvem søger du hjælp til?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {selectors.map((s) => (
            <button
              key={s.title}
              className="flex items-center rounded-lg bg-accent p-5 shadow-soft transition-transform hover:-translate-y-1 group w-full focus:outline-none focus:ring-2 focus:ring-primary"
              style={{ minHeight: 120 }}
              onClick={() => {
                navigate(
                  `/terapeuter?type=${encodeURIComponent(
                    s.type
                  )}&speciale=${encodeURIComponent(s.specialty)}`
                );
                if (onSelect) onSelect();
              }}
              type="button"
              aria-label={s.title}
            >
              <div className="mr-4 flex-shrink-0">{s.icon}</div>
              <div className="flex-1 text-left">
                <div className="text-lg font-semibold text-primary">
                  {s.title}
                </div>
                <div className="text-[15px] text-gray-700">{s.subtitle}</div>
              </div>
              <ArrowRight
                aria-hidden
                className="ml-4 text-gray-400 group-hover:text-primary"
                size={28}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserSelector;
