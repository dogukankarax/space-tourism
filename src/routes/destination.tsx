import data from "@/assets/data.json";
import { cn } from "@/lib/utils";
import type { SpaceData } from "@/types";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

const { destinations } = data as SpaceData;

export const Route = createFileRoute("/destination")({
  component: Destination,
});

function Destination() {
  const [destination, setDestination] = useState(0);

  return (
    <>
      <div className="bg-destination" aria-hidden="true" />
      <div className="desktop:pt-48 flex min-h-screen flex-col pt-28">
        <h1 className="text-fluid-h5 font-barlow-condensed tablet:text-left desktop:pl-0 tablet:pl-10 text-center text-white">
          <span className="font-bold opacity-25">01</span> PICK YOUR DESTINATION
        </h1>

        <div className="desktop:flex-row desktop:text-left desktop:justify-between flex flex-1 flex-col items-center gap-10 pt-10 text-center">
          <div className="flex-center tablet:items-start flex-col">
            <img
              src={destinations[destination].image}
              alt={destinations[destination].name}
              className="size-fluid-planet"
            />
          </div>
          <div>
            <div
              role="tablist"
              className="text-light font-barlow-condensed desktop:justify-start mb-8 flex items-center justify-center gap-8"
            >
              {destinations.map((dest, index) => (
                <button
                  key={dest.id}
                  role="tab"
                  aria-selected={destination === index}
                  className={cn(
                    "cursor-pointer border-b-2 border-transparent pb-2.5 tracking-widest uppercase transition-colors duration-300",
                    destination === index
                      ? "border-white"
                      : "hover:border-white/50",
                  )}
                  onClick={() => setDestination(index)}
                >
                  {dest.name}
                </button>
              ))}
            </div>
            <div className="desktop:px-0 desktop:max-w-md tablet:max-w-xl px-5">
              <h2 className="text-fluid-h2 font-bellefair text-white">
                {destinations[destination].name.toUpperCase()}
              </h2>
              <p className="text-fluid-body font-barlow text-light min-h-30">
                {destinations[destination].description}
              </p>
              <div className="border-light/20 desktop:justify-start tablet:flex-row tablet:gap-16 flex flex-col justify-center gap-6 border-t pt-8">
                <div>
                  <p className="text-fluid-sh2 text-light font-barlow-condensed tracking-widest">
                    AVG. DISTANCE
                  </p>
                  <p className="text-fluid-sh1 font-bellefair text-white">
                    {destinations[destination].distance.toUpperCase()}
                  </p>
                </div>
                <div>
                  <p className="text-fluid-sh2 text-light font-barlow-condensed tracking-widest">
                    EST. TRAVEL TIME
                  </p>
                  <p className="text-fluid-sh1 font-bellefair text-white">
                    {destinations[destination].travel.toUpperCase()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
