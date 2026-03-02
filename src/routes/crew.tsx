import data from "@/assets/data.json";
import { cn } from "@/lib/utils";
import type { SpaceData } from "@/types";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

const { crew } = data as SpaceData;

export const Route = createFileRoute("/crew")({
  component: Crew,
});

function Crew() {
  const [selectedCrew, setSelectedCrew] = useState(0);

  return (
    <>
      <div className="bg-crew" aria-hidden="true" />
      <div className="desktop:pt-48 flex min-h-screen flex-col pt-28">
        <h1 className="text-fluid-h5 font-barlow-condensed tablet:text-left desktop:pl-0 tablet:pl-10 text-center text-white">
          <span className="font-bold opacity-25">02</span> MEET YOUR CREW
        </h1>

        <div className="desktop:flex-row-reverse desktop:items-end tablet:pt-20 desktop:pt-0 tablet:flex-col-reverse tablet:justify-between desktop:gap-0 flex flex-1 flex-col items-center gap-10 pt-10">
          <div className="size-fluid-crew">
            <img
              src={crew[selectedCrew].image}
              alt={crew[selectedCrew].name}
              className="tablet:border-0 h-full w-full border-b-2 border-white/25 object-contain object-bottom"
            />
          </div>
          <div className="tablet:flex-col-reverse desktop:pb-10 desktop:gap-0 flex flex-col gap-5">
            <nav>
              <ul className="desktop:justify-start flex items-center justify-center gap-8">
                {crew.map((crewMember, index) => (
                  <li key={crewMember.id}>
                    <button
                      aria-label={`Select ${crewMember.name}`}
                      className={cn(
                        "h-4 w-4 cursor-pointer rounded-full transition-all duration-300",
                        selectedCrew === index
                          ? "bg-white"
                          : "bg-light/20 hover:bg-white/50",
                      )}
                      onClick={() => setSelectedCrew(index)}
                    />
                  </li>
                ))}
              </ul>
            </nav>

            <div className="desktop:text-left desktop:items-start flex flex-col items-center text-center">
              <p className="font-bellefair text-fluid-sh2 mb-5 text-white opacity-50">
                {crew[selectedCrew].role.toUpperCase()}
              </p>
              <h2 className="text-fluid-h3 font-bellefair mb-10 text-white">
                {crew[selectedCrew].name.toUpperCase()}
              </h2>
              <p className="text-fluid-body font-barlow text-light tablet:px-0 desktop:mb-20 line-clamp-5 min-h-32 max-w-md px-5">
                {crew[selectedCrew].bio}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
