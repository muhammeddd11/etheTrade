import Overview from "./OverView";
import lionsStudio from "../assets/The_Lion's Studio.jpg";

const aboutOverview = {
  eyebrow: "About Us",
  intro:
    "This is sample overview data for the About Us page, written to show how the section will look once final company copy is ready.",
  support:
    "The layout stays in the same visual position as the home overview, while the content can be changed later without touching the component design.",
  edgeTitle: "Sample Strength",
  edgeText:
    "Dummy content can describe sourcing, brand building, product strategy, and market connections while keeping the page polished during development.",
  image: lionsStudio,
  imageAlt: "Classic studio interior used as sample about page artwork",
};

const AboutPage = () => {
  return (
    <div className="grid grid-cols-1 gap-3 border-t-4 border-double border-[#2a1a0f] pt-2.5 lg:grid-cols-[1.07fr_0.9fr_1fr]">
      <div className="site-reveal site-reveal--delay-1">
        <Overview data={aboutOverview} />
      </div>

      <section className="site-reveal site-reveal--delay-2 border-2 border-[#2a1a0f] bg-[#d4c4a8]/50 p-4 shadow-[inset_0_0_22px_rgba(139,115,85,0.28),0_8px_18px_rgba(0,0,0,0.2)] lg:col-span-2">
        <h2 className="mb-3 border-b-2 border-[#2a1a0f] pb-2 text-center text-2xl font-black uppercase tracking-[0.08em] text-[#1a0f0a]">
          Our Story
        </h2>
        <p className="mb-3 text-justify text-sm leading-snug text-[#1d120b] lg:text-base">
          Ethe Trade connects premium products with thoughtful brand direction.
          This sample page gives the About Us area its own space while keeping
          the same refined visual language used on the home page.
        </p>
        <p className="text-justify text-sm leading-snug text-[#1d120b] lg:text-base">
          Replace this dummy copy with final company history, market experience,
          leadership details, or brand philosophy whenever the real content is
          ready.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
