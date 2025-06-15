
import React from "react";
import { Badge } from "@/components/ui/badge";

type CardProps = {
  therapist: {
    id: string;
    name: string;
    city: string;
    description: string;
    specialties: string[];
    image: string;
    type?: string; // for Terapeuter use-case
    profession?: string;
  };
  onReadMore?: () => void;
};
/** Used in both the homepage and /terapeuter */
const TherapistCard: React.FC<CardProps> = ({ therapist, onReadMore }) => (
  <div className="bg-white rounded-xl shadow-soft px-5 pt-6 pb-5 flex flex-col items-center text-center transition-transform hover:-translate-y-1">
    <div className="mb-4">
      <img
        src={therapist.image}
        alt={therapist.name}
        className="rounded-full w-20 h-20 object-cover border-4 border-accent bg-[#f0f5f0]"
      />
    </div>
    <div className="font-semibold text-lg text-primary mb-1">{therapist.name}</div>
    {therapist.profession || therapist.type ? (
      <div className="text-sm text-gray-600 mb-1">
        {therapist.profession}
        {therapist.profession && therapist.type ? " – " : ""}
        {therapist.type}
      </div>
    ) : (
      <div className="text-sm text-gray-600 mb-1">{therapist.city}</div>
    )}
    <div className="text-[15px] text-gray-800 mb-3">{therapist.description}</div>
    <div className="mb-4 flex flex-wrap justify-center gap-2">
      {therapist.specialties.map(s => (
        <Badge key={s} variant="secondary">
          {s}
        </Badge>
      ))}
    </div>
    <button
      className="rounded-full bg-primary text-white px-5 py-2 mt-auto font-medium hover:bg-[#164488] transition-colors text-sm"
      type="button"
      tabIndex={-1}
      aria-label={`Læs mere om ${therapist.name}`}
      onClick={onReadMore}
    >
      Læs mere
    </button>
  </div>
);

export default TherapistCard;
