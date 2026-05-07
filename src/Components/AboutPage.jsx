import companyProfile from "../../Content/CompanyProfile.json";
import drawing from "../assets/drawing.jpg";
import athena from "../assets/athena.jpg";
import womanWithAnOwl from "../assets/womanWithAnOwl.jpg";

const [whatWeDo, whereWeAreGoing, whatWeStandFor, difference, valuesSection] =
  companyProfile.Content;

const cleanText = (text) => text.replace("â€”", "-").replace("Ã¢â‚¬â€", "-");

const featurePanels = [
  {
    ...whatWeDo,
    image: drawing,
    imageAlt: "Classical justice statue",
    imageClassName: "about-art-image about-art-image--justice",
    imagePosition: "100% 90%",
    delay: "site-reveal--delay-1",
  },
  {
    ...whereWeAreGoing,
    image: womanWithAnOwl,
    imageAlt: "Classical architectural arch",
    imageClassName: "about-art-image about-art-image--arch",
    imagePosition: "100% 10%",
    delay: "site-reveal--delay-2",
  },
  {
    ...whatWeStandFor,
    image: athena,
    imageAlt: "Athena statue artwork",
    imageClassName: "about-art-image about-art-image--athena",
    imagePosition: "100% 10%",
    delay: "site-reveal--delay-3",
  },
];

const formatHeading = (heading) => heading.replace("EThe", "Ethe");

const AboutImage = ({ item }) => {
  return (
    <div className="bg-[#d4c4a8]/45 p-1.5 shadow-[inset_0_0_22px_rgba(139,115,85,0.3),0_8px_18px_rgba(0,0,0,0.18)]">
      <div className="image-frame overflow-hidden border border-[#8b7355] bg-[#1a0f0a]/20">
        <img
          src={item.image}
          alt={item.imageAlt}
          width="736"
          height="360"
          loading="lazy"
          decoding="async"
          className={`reference-image block aspect-[1.62/1] w-full object-cover ${item.imageClassName}`}
          style={{ objectPosition: item.imagePosition }}
        />
      </div>
    </div>
  );
};

const AboutPanel = ({ item }) => {
  return (
    <div className="flex flex-1 flex-col p-3 sm:p-4">
      <h2 className="mb-2 border-b-2 border-[#2a1a0f] pb-1 text-center text-base font-black uppercase tracking-[0.08em] text-[#1a0f0a] sm:text-lg">
        {formatHeading(item.heading)}
      </h2>

      <div className="flex-1">
        {cleanText(item.content)
          .split("\n\n")
          .map((paragraph) => (
            <p
              key={paragraph}
              className="mb-2 text-justify text-sm leading-snug text-[#1d120b] last:mb-0 lg:text-base"
            >
              {paragraph}
            </p>
          ))}
      </div>
    </div>
  );
};


const AboutCard = ({ featurePanels }) => {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
      {featurePanels.map((item) => (
        <article
          key={item.heading}
          className={`about-card animated-panel site-reveal ${item.delay} flex min-h-full flex-col overflow-hidden border-2 border-[#2a1a0f] bg-[#d4c4a8]/52 shadow-[inset_0_0_22px_rgba(139,115,85,0.28),0_8px_18px_rgba(0,0,0,0.2)]`}
        >
          <AboutImage item={item} />
          <AboutPanel item={item} />
        </article>
      ))}
    </div>
  );
};


const AboutPage = () => {
  return (
    <div className="gallery-stage border-t-4 border-double border-[#2a1a0f] pt-2.5">
      <section className="mb-3 site-reveal border-2 border-[#2a1a0f] bg-[#1a0f0a] px-3 py-3 text-center shadow-[inset_0_0_18px_rgba(201,184,150,0.18),0_8px_18px_rgba(0,0,0,0.25)]">
        <p className="mb-1 text-xs font-bold uppercase tracking-[0.32em] text-[#c8a96d]">
          {companyProfile.tagline}
        </p>
        <h1 className="m-0 text-2xl font-black uppercase tracking-[0.08em] text-[#d9c5a3] sm:text-3xl">
          About Ethe Trade
        </h1>
      </section>
    
      <AboutCard featurePanels={featurePanels} />
      <section className="animated-panel site-reveal site-reveal--delay-4 mt-3 border-2 border-[#2a1a0f] bg-[#d4c4a8]/55 p-4 shadow-[inset_0_0_22px_rgba(139,115,85,0.28),0_8px_18px_rgba(0,0,0,0.2)]">
        <h2 className="mb-2 border-b-2 border-[#2a1a0f] pb-2 text-center text-2xl font-black uppercase tracking-[0.08em] text-[#1a0f0a]">
          {formatHeading(difference.heading)}
        </h2>

        <p className="mx-auto mb-4 max-w-5xl text-justify text-sm leading-snug text-[#1d120b] lg:text-base">
          {cleanText(difference.content)}
        </p>

        <h3 className="mb-3 text-center text-lg font-black uppercase tracking-[0.08em] text-[#1a0f0a]">
          {formatHeading(valuesSection.heading)}
        </h3>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          {valuesSection.values.map((value) => (
            <div
              key={value.name}
              className="service-step border-2 border-[#2a1a0f] bg-[#c9b896]/55 p-3 text-center shadow-[inset_0_0_16px_rgba(139,115,85,0.22)]"
            >
              <h4 className="mb-1 text-base font-black uppercase tracking-[0.08em] text-[#1a0f0a]">
                {value.name}
              </h4>
              <p className="text-sm leading-snug text-[#1d120b] lg:text-base">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
