const ServiceItem = ({ data }) => {
  return (
    <div>
      <div className="services-border-light mb-2 bg-[#1a0f0a] px-3 py-3 text-center shadow-[inset_0_0_18px_rgba(201,184,150,0.18),0_8px_18px_rgba(0,0,0,0.25)]">
        <h3 className="m-0 text-2xl font-black uppercase tracking-[0.08em] text-[#d9c5a3] [text-shadow:1px_1px_0_rgba(0,0,0,0.8)]">
          {data.title}
        </h3>
      </div>

      <h4 className="mb-1.5 text-base font-bold text-[#1d120b]">
        {data.eyebrow}
      </h4>

      <div className="space-y-2">
        {data.items.map((service) => (
          <div key={service.title} className="service-step">
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

const BusinessCapabilities = ({ data }) => {
  return (
    <section>
      <div className="animated-panel mb-2 border-2 border-[#2a1a0f] bg-[#d4c4a8]/45 p-1.5 shadow-[inset_0_0_22px_rgba(139,115,85,0.3),0_8px_18px_rgba(0,0,0,0.22)]">
        <div className="image-frame overflow-hidden">
          <img
            src={data.image}
            alt={data.imageAlt}
            width="600"
            height="306"
            loading="lazy"
            decoding="async"
            className="reference-image art-drift h-[180px] w-full border border-[#8b7355] object-cover sm:h-[210px]"
          />
        </div>
        <p className="mt-1 text-center text-xs italic text-[#3d2817]">
          {data.imageCaption}
        </p>
      </div>

      <ServiceItem data={data} />

      <div className="animated-panel mt-2 border-2 border-[#2a1a0f] bg-[#d4c4a8]/45 p-1.5 shadow-[inset_0_0_22px_rgba(139,115,85,0.3),0_8px_18px_rgba(0,0,0,0.22)]">
        <div className="image-frame overflow-hidden">
          <img
            src={data.secondaryImage}
            alt={data.secondaryImageAlt}
            width="600"
            height="132"
            loading="lazy"
            decoding="async"
            className="reference-image art-drift h-[86px] w-full border border-[#8b7355] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default BusinessCapabilities;
