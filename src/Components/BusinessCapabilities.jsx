import goldenTouch from "../assets/The_Golden Touch.jpg";
import lionsStudio from "../assets/The_Lion's Studio.jpg";

const services = [
  {
    title: "1. General Trading",
    text: "We source and deliver high-quality products across international markets, ensuring reliability, efficiency, and consistency.",
  },
  {
    title: "2. Product Distribution",
    text: "We connect products with the right markets through strategic distribution channels, helping brands reach their full potential.",
  },
  {
    title: "3. Brand Development",
    text: "We transform products into brands. From positioning to visual identity, we build distinctive brand experiences that stand out.",
  },
];

const ServiceItem = () => {
  return (
    <div>
      <div className="services-border-light mb-2 bg-[#1a0f0a] px-3 py-3 text-center shadow-[inset_0_0_18px_rgba(201,184,150,0.18),0_8px_18px_rgba(0,0,0,0.25)]">
        <h3 className="m-0 text-2xl font-black uppercase tracking-[0.08em] text-[#d9c5a3] [text-shadow:1px_1px_0_rgba(0,0,0,0.8)]">
          Services
        </h3>
      </div>

      <h4 className="mb-1.5 text-base font-bold text-[#1d120b]">
        What We Do:
      </h4>

      <div className="space-y-2">
        {services.map((service) => (
          <div key={service.title}>
            <h5 className="mb-0.5 text-sm font-bold text-[#1a0f0a] lg:text-base">
              {service.title}
            </h5>
            <p className="text-justify text-sm leading-tight text-[#1d120b] lg:text-base">
              {service.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const BusinessCapabilities = () => {
  return (
    <section>
      <div className="mb-2 border-2 border-[#2a1a0f] bg-[#d4c4a8]/45 p-1.5 shadow-[inset_0_0_22px_rgba(139,115,85,0.3),0_8px_18px_rgba(0,0,0,0.22)]">
        <img
          src={goldenTouch}
          alt="Strategic business development"
          width="600"
          height="306"
          loading="lazy"
          decoding="async"
          className="reference-image art-drift h-[180px] w-full border border-[#8b7355] object-cover sm:h-[210px]"
        />
        <p className="mt-1 text-center text-xs italic text-[#3d2817]">
          Strategic Brands Development
        </p>
      </div>

      <ServiceItem />

      <div className="mt-2 border-2 border-[#2a1a0f] bg-[#d4c4a8]/45 p-1.5 shadow-[inset_0_0_22px_rgba(139,115,85,0.3),0_8px_18px_rgba(0,0,0,0.22)]">
        <img
          src={lionsStudio}
          alt="Team collaboration"
          width="600"
          height="132"
          loading="lazy"
          decoding="async"
          className="reference-image art-drift h-[86px] w-full border border-[#8b7355] object-cover"
        />
      </div>
    </section>
  );
};

export default BusinessCapabilities;
