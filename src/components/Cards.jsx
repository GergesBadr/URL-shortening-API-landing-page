import brandRecognition from "../assets/images/icon-brand-recognition.svg";
import detailedRecords from "../assets/images/icon-detailed-records.svg";
import fullyCustomizable from "../assets/images/icon-fully-customizable.svg";

function Cards() {
  return (
    <div className="cards-container flex flex-col items-center gap-24 lg:flex-row lg:gap-6">
      <div className="card lg:-mt-20">
        <div className="absolute -top-8 left-1/2 flex h-20 w-20 -translate-x-1/2 items-center justify-center rounded-full bg-dark-violet lg:left-8 lg:translate-x-0">
          <img src={brandRecognition} alt="Brand Recognition" />
        </div>
        <h2 className="mb-2 text-2xl font-medium">Brand Recognition</h2>
        <p className="main-paragraph">
          Boost your brand recognition with each click. Generic links don’t mean
          a thing. Branded links help instil confidence in your content.
        </p>
      </div>
      <div className="card">
        <div className="absolute -top-8 left-1/2 flex h-20 w-20 -translate-x-1/2 items-center justify-center rounded-full bg-dark-violet lg:left-8 lg:translate-x-0">
          <img src={detailedRecords} alt="Detailed Records" />
        </div>
        <h2 className="mb-2 text-2xl font-medium">Detailed Records</h2>
        <p className="main-paragraph">
          Gain insights into who is clicking your links. Knowing when and where
          people engage with your content helps inform better decisions.
        </p>
      </div>
      <div className="card lg:mt-20">
        <div className="absolute -top-8 left-1/2 flex h-20 w-20 -translate-x-1/2 items-center justify-center rounded-full bg-dark-violet lg:left-8 lg:translate-x-0">
          <img src={fullyCustomizable} alt="Fully Customizable" />
        </div>
        <h2 className="mb-2 text-2xl font-medium">Fully Customizable</h2>
        <p className="main-paragraph">
          Improve brand awareness and content discoverability through
          customizable links, supercharging audience engagement.
        </p>
      </div>
    </div>
  );
}

export default Cards;
