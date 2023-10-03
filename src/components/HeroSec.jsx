import illustrationImg from "../assets/images/illustration-working.svg";

function HeroSec() {
  return (
    <section className="center-content mb-32 mt-14 flex flex-col-reverse gap-10 md:flex-row md:items-center md:justify-between">
      <div className="space-y-4 text-center md:text-left lg:basis-[50%]">
        <h1 className="text-very-dark-blue text-4xl font-bold md:text-5xl lg:text-6xl">
          More than just shorter links
        </h1>
        <p className="main-paragraph">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="btn btn-primary rounded-full">Get Started</button>
      </div>
      <div className="lg:basis-[50%]">
        <img src={illustrationImg} aria-hidden="true" className="lg:ml-auto" />
      </div>
    </section>
  );
}

export default HeroSec;
