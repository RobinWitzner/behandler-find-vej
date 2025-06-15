
import React from "react";
import { Therapist } from "./therapist-data";

const TherapistCard: React.FC<{
  therapist: Therapist;
}> = ({ therapist }) => (
  <div className="bg-white rounded-xl shadow-soft px-5 pt-6 pb-5 flex flex-col items-center text-center transition-transform hover:-translate-y-1">
    <div className="mb-4">
      <img
        src={therapist.image}
        alt={therapist.name}
        className="rounded-full w-20 h-20 object-cover border-4 border-accent bg-[#f0f5f0]"
      />
    </div>
    <div className="font-semibold text-lg text-primary mb-1">{therapist.name}</div>
    <div className="text-sm text-gray-600 mb-2">{therapist.city}</div>
    <div className="text-[15px] text-gray-800 mb-3">{therapist.description}</div>
    <div className="mb-4 flex flex-wrap justify-center gap-2">
      {therapist.specialties.map(s => (
        <span
          key={s}
          className="px-3 py-1 rounded-lg bg-accent text-[#157a53] text-xs font-medium"
        >
          {s}
        </span>
      ))}
    </div>
    <button
      className="rounded-full bg-primary text-white px-5 py-2 mt-auto font-medium hover:bg-[#164488] transition-colors text-sm"
      type="button"
      tabIndex={-1}
      aria-label={`Læs mere om ${therapist.name}`}
    >
      Læs mere
    </button>
  </div>
);

export default TherapistCard;
