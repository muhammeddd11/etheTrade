import senatorGallery from "../assets/The_Senator's Gallery.jpg";

const defaultOverview = {
  eyebrow: "Who We Are",
  intro:
    "Ethe Trade is a Dubai-based trading and brand development company, focused on delivering premium products and building distinctive brands that stand out in competitive markets.",
  support:
    "We combine strategic sourcing with creative thinking to transform products into meaningful brand experiences.",
  edgeTitle: "Our Edge",
  edgeText:
    "We don't follow the market, we elevate it. Our strength lies in merging trade expertise with creative direction, allowing us to build brands that are both commercially successful and visually distinctive.",
  image: senatorGallery,
  imageAlt: "Classical statue gallery",
  imageWidth: 600,
  imageHeight: 410,
  imageLoading: "eager",
};

const DecorateLine = () => {
  return (
    <div className="my-2 flex items-center gap-1 text-[#3d2817]">
      <span className="h-px w-5 bg-[#3d2817]" />
      <span className="h-1.5 w-1.5 rounded-full border border-[#3d2817]" />
      <span className="h-px w-5 bg-[#3d2817]" />
    </div>
  );
};

const AboutUs = ({ content }) => {
  return (
    <>
      <h3 className="mb-2 border-b border-[#3d2817] pb-1 text-center text-[15px] font-black uppercase tracking-[0.14em] text-[#1a0f0a] [text-shadow:1px_1px_0_rgba(110,74,43,0.35)]">
        {content.eyebrow}
      </h3>

      <p className="mb-3 text-justify text-sm leading-snug text-[#1d120b] lg:text-base">
        {content.intro}
      </p>

      <p className="mb-3 text-justify text-sm leading-snug text-[#1d120b] lg:text-base">
        {content.support}
      </p>

      <div className="border-2 border-[#2a1a0f] bg-[#d4c4a8]/55 p-3 shadow-[inset_0_0_18px_rgba(139,115,85,0.28)]">
        <h4 className="mb-2 text-center text-lg font-black uppercase text-[#1a0f0a]">
          {content.edgeTitle}
        </h4>
        <p className="text-justify text-sm leading-snug text-[#1d120b] lg:text-base">
          {content.edgeText}
        </p>
      </div>
    </>
  );
};

const Overview = ({ data = defaultOverview }) => {
  return (
    <section>
      <div className="animated-panel border-2 border-[#2a1a0f] bg-[#d4c4a8]/45 p-1.5 shadow-[inset_0_0_22px_rgba(139,115,85,0.3),0_8px_18px_rgba(0,0,0,0.22)]">
        <div className="image-frame relative overflow-hidden">
          <div className="absolute left-0 top-0 z-10 h-4 w-4 border-l-2 border-t-2 border-[#3d2817]" />
          <div className="absolute right-0 top-0 z-10 h-4 w-4 border-r-2 border-t-2 border-[#3d2817]" />
          <div className="absolute bottom-0 left-0 z-10 h-4 w-4 border-b-2 border-l-2 border-[#3d2817]" />
          <div className="absolute bottom-0 right-0 z-10 h-4 w-4 border-b-2 border-r-2 border-[#3d2817]" />

          <img
            src={data.image}
            alt={data.imageAlt}
            width={data.imageWidth}
            height={data.imageHeight}
            loading={data.imageLoading ?? "lazy"}
            fetchPriority={data.imageLoading === "eager" ? "high" : "auto"}
            decoding="async"
            className="reference-image art-drift block h-auto w-full border border-[#8b7355]"
          />
        </div>
      </div>

      <DecorateLine />
      <div className="copy-rise">
        <AboutUs content={data} />
      </div>
    </section>
  );
};

export default Overview;
