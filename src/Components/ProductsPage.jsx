import { useState } from "react";
import goldenTouch from "../assets/The_Golden Touch.jpg";
import byzantineIntercession from "../assets/Byzantine_Intercession.jpg";
import senatorGallery from "../assets/The_Senator's Gallery.jpg";

const products = [
  {
    name: "Artisan Chocolate Concept",
    image: goldenTouch,
    imageWidth: 600,
    imageHeight: 306,
    summary: "Luxury confectionery concept with artistic positioning.",
    details:
      "A premium chocolate line built around refined presentation, memorable gifting, and market-ready brand storytelling.",
  },
  {
    name: "Curated Lifestyle Goods",
    image: byzantineIntercession,
    imageWidth: 600,
    imageHeight: 141,
    summary: "Selected products prepared for distinct retail markets.",
    details:
      "A flexible product category focused on sourcing quality goods, packaging them beautifully, and preparing them for regional distribution.",
  },
  {
    name: "Signature Brand Editions",
    image: senatorGallery,
    imageWidth: 600,
    imageHeight: 410,
    summary: "Limited collections with elevated visual direction.",
    details:
      "Special edition product drops designed to feel collectible, polished, and suitable for premium commercial partnerships.",
  },
];

const ProductsPage = () => {
  const [openProduct, setOpenProduct] = useState(products[0].name);

  return (
    <section className="border-t-4 border-double border-[#2a1a0f] pt-2.5">
      <div className="mb-3 border-2 border-[#2a1a0f] bg-[#1a0f0a] px-3 py-3 text-center shadow-[inset_0_0_18px_rgba(201,184,150,0.18),0_8px_18px_rgba(0,0,0,0.25)]">
        <h2 className="m-0 text-2xl font-black uppercase tracking-[0.08em] text-[#d9c5a3]">
          Products
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
        {products.map((product) => {
          const isOpen = openProduct === product.name;

          return (
            <article
              key={product.name}
              className="site-reveal border-2 border-[#2a1a0f] bg-[#d4c4a8]/50 p-2 shadow-[inset_0_0_22px_rgba(139,115,85,0.28),0_8px_18px_rgba(0,0,0,0.2)]"
            >
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpenProduct(isOpen ? "" : product.name)}
                className="flex w-full items-center justify-between gap-3 border-2 border-[#2a1a0f] bg-[#c9b896]/70 px-3 py-2 text-left text-[#1a0f0a] transition hover:bg-[#1a0f0a] hover:text-[#e8dcc4]"
              >
                <span className="text-sm font-black uppercase tracking-[0.08em]">
                  {product.name}
                </span>
                <span className="text-lg font-black">{isOpen ? "-" : "+"}</span>
              </button>

              {isOpen && (
                <div className="relative mt-2 overflow-hidden border border-[#8b7355] bg-[#1a0f0a]/20">
                  <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-[#1a0f0a]/38">
                    <div className="border-2 border-[#e8dcc4] bg-[#1a0f0a]/90 px-5 py-2 text-center shadow-[0_8px_18px_rgba(0,0,0,0.35)]">
                      <p className="m-0 text-lg font-black uppercase tracking-[0.16em] text-[#f2d58a]">
                        Coming Soon
                      </p>
                    </div>
                  </div>

                  <div className="blur-[3px]">
                    <img
                      src={product.image}
                      alt={product.name}
                      width={product.imageWidth}
                      height={product.imageHeight}
                      loading="lazy"
                      decoding="async"
                      className="reference-image h-[210px] w-full object-cover"
                    />
                    <div className="border-t-2 border-[#2a1a0f] bg-[#e8dcc4]/45 p-3 shadow-[inset_0_0_16px_rgba(139,115,85,0.25)]">
                      <h3 className="mb-1 text-base font-black uppercase text-[#1a0f0a]">
                        {product.summary}
                      </h3>
                      <p className="text-sm leading-snug text-[#1d120b] lg:text-base">
                        {product.details}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default ProductsPage;
