import byzantineIntercession from "../assets/Byzantine_Intercession.jpg";
import ContactBox from "./ContactBox";

const SectionLabel = ({ children }) => {
  return (
    <div className="mb-2 border-2 border-[#2a1a0f] bg-[#e8dcc4]/45 px-2 py-1.5 shadow-[inset_0_0_16px_rgba(139,115,85,0.25)]">
      <h4 className="text-center text-sm font-black uppercase text-[#1a0f0a] lg:text-base">
        {children}
      </h4>
    </div>
  );
};

const OurValues = () => {
  return (
    <div className="mt-2">
      <div className="mb-1 flex items-center justify-center gap-1 text-[#2a1a0f]">
        <span className="h-px w-5 bg-[#2a1a0f]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#2a1a0f]" />
        <span className="h-px w-5 bg-[#2a1a0f]" />
      </div>

      <h3 className="mb-2 text-center text-xl font-black uppercase text-[#1a0f0a]">
        Our Values
      </h3>

      <ul className="space-y-1.5 text-sm leading-snug text-[#1d120b] lg:text-base">
        <li className="flex items-start gap-2">
          <span className="font-bold">+</span>
          <span>
            <strong>Trust</strong> We build strong lasting relationships.
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="font-bold">+</span>
          <span>
            <strong>Excellence</strong> We deliver nothing less than premium
            quality.
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="font-bold">+</span>
          <span>
            <strong>Creativity</strong> We create with vision and originality.
          </span>
        </li>
      </ul>
    </div>
  );
};

const ComingSoon = () => {
  return (
    <div className="mt-3 border-2 border-[#2a1a0f] bg-[#d4c4a8]/55 p-3 shadow-[inset_0_0_18px_rgba(139,115,85,0.28)]">
      <h4 className="mb-1.5 text-center text-base font-black uppercase text-[#1a0f0a]">
        Coming Soon
      </h4>
      <p className="text-center text-sm italic leading-snug text-[#1d120b]">
        Etheld Artisan Chocolate - A new luxury concept artistic blending
      </p>
    </div>
  );
};

const Vission = () => {
  return (
    <section>
      <div className="border-2 border-[#2a1a0f] bg-[#c9b896]/45 p-2 shadow-[inset_0_0_22px_rgba(139,115,85,0.3),0_8px_18px_rgba(0,0,0,0.22)]">
        <SectionLabel>Our Vision</SectionLabel>
        <p className="mb-3 text-justify text-sm leading-snug text-[#1d120b] lg:text-base">
          To build a timeless brand that blends trade, creativity, and
          innovation into one refined ecosystem.
        </p>

        <SectionLabel>Our Mission</SectionLabel>
        <p className="mb-3 text-justify text-sm leading-snug text-[#1d120b] lg:text-base">
          To deliver exceptional products and build distinctive brands that
          reflect quality, creativity, and purpose.
        </p>

        <div className="mb-1 border-2 border-[#2a1a0f] bg-[#d4c4a8]/55 p-1.5 shadow-[inset_0_0_18px_rgba(139,115,85,0.28)]">
          <img
            src={byzantineIntercession}
            alt="Mosaic artwork"
            width="600"
            height="141"
            loading="lazy"
            decoding="async"
            className="reference-image art-drift h-[96px] w-full object-cover sm:h-[110px]"
          />
        </div>

        <p className="text-center text-xs italic text-[#3d2817]">
          Dubai, United Arab Emirates
        </p>
      </div>

      <OurValues />
      <ComingSoon />
      <ContactBox />
    </section>
  );
};

export default Vission;
