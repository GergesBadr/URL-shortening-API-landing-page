import Cards from "./Cards";

function Stats() {
  return (
    <section className="bg-section-bg pb-40">
      <div className="center-content">
        <div className="mx-auto mb-20 text-center md:max-w-lg">
          <h1 className="mb-2 text-very-dark-Blue text-4xl font-bold tracking-wider">
            Advanced Statistics
          </h1>
          <p className="main-paragraph">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <Cards />
      </div>
    </section>
  );
}

export default Stats;
