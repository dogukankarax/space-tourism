import data from "@/assets/data.json";
import { assetUrl, cn } from "@/lib/utils";
import type { SpaceData } from "@/types";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

const { technology } = data as SpaceData;

export const Route = createFileRoute("/technology")({
  component: Technology,
});

function Technology() {
  const [selectedTech, setSelectedTech] = useState(0);

  return (
    <>
      <div className="bg-technology" aria-hidden="true" />
      <div className="desktop:pt-48 flex min-h-screen flex-col pt-28">
        <h1 className="text-fluid-h5 font-barlow-condensed tablet:text-left desktop:pl-0 tablet:pl-10 text-center text-white">
          <span className="font-bold opacity-25">03</span> SPACE LAUNCH 101
        </h1>

        <div className="desktop:flex-row desktop:justify-between desktop:pt-0 tablet:pt-20 flex flex-1 flex-col-reverse items-center justify-evenly gap-10 pt-10">
          <div>
            <div className="desktop:flex-row flex flex-col items-start gap-10">
              <nav className="desktop:w-auto w-full">
                <ul className="desktop:flex-col flex items-center justify-center gap-6">
                  {technology.map((techItem, index) => (
                    <li key={techItem.id}>
                      <button
                        aria-label={`Select ${techItem.name}`}
                        className={cn(
                          "flex-center font-bellefair tablet:size-20 size-10 cursor-pointer rounded-full border border-white/25 text-3xl transition-all duration-300",
                          selectedTech === index
                            ? "bg-white text-black"
                            : "text-white hover:border-white",
                        )}
                        onClick={() => setSelectedTech(index)}
                      >
                        {index + 1}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="desktop:text-left desktop:items-start text-center">
                <p className="text-fluid-sh2 text-light font-barlow-condensed pb-1 tracking-widest">
                  THE TERMINOLOGY...
                </p>
                <h2 className="font-bellefair text-fluid-h3 pb-3 text-white">
                  {technology[selectedTech].name.toUpperCase()}
                </h2>
                <p className="text-fluid-body font-barlow text-light desktop:max-w-md tablet:px-0 min-h-40 max-w-lg px-5">
                  {technology[selectedTech].description}
                </p>
              </div>
            </div>
          </div>

          <div>
            <picture>
              <source
                media="(min-width: 1280px)"
                srcSet={assetUrl(technology[selectedTech].img.portrait)}
              />
              <img
                src={assetUrl(technology[selectedTech].img.landscape)}
                alt={technology[selectedTech].name}
              />
            </picture>
          </div>
        </div>
      </div>
    </>
  );
}
