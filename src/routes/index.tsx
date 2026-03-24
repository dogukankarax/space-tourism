import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <div className="bg-home" aria-hidden="true" />
      <div className="desktop:flex-row desktop:justify-evenly desktop:pt-48 desktop:px-10 desktop:pb-0 flex min-h-screen w-full flex-col items-center justify-evenly gap-10 px-10 pt-28 pb-16">
        <div className="desktop:text-left text-center">
          <p className="text-light text-fluid-h5 font-barlow-condensed">
            SO, YOU WANT TO TRAVEL TO
          </p>
          <h1 className="text-fluid-h1 font-bellefair text-white">SPACE</h1>
          <p className="text-fluid-body font-barlow text-light max-w-md">
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>
        <Link
          to="/destination"
          className="explore-btn font-bellefair text-dark text-fluid-explore size-fluid-explore flex-center rounded-full bg-white tracking-widest"
        >
          EXPLORE
        </Link>
      </div>
    </>
  );
}
