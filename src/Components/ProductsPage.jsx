import { useState } from "react";

const ProductsPage = ({ data }) => {
  const products = (data.items || []).filter((product, index, items) => {
    if (!product.imageNumber) {
      return true;
    }

    return (
      items.findIndex((item) => item.imageNumber === product.imageNumber) ===
      index
    );
  });
  const [openProduct, setOpenProduct] = useState(
    products[0]?.imageNumber || "",
  );

  return (
    <section className="border-t-4 border-double border-[#2a1a0f] pt-2.5">
      <div className="mb-3 border-2 border-[#2a1a0f] bg-[#1a0f0a] px-3 py-3 text-center shadow-[inset_0_0_18px_rgba(201,184,150,0.18),0_8px_18px_rgba(0,0,0,0.25)]">
        <h2 className="m-0 text-2xl font-black uppercase tracking-[0.08em] text-[#d9c5a3]">
          {data.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
        {products.map((product, index) => {
          const isOpen = openProduct === product.imageNumber;
          const showComingSoon = product.showComingSoon !== false;
          const imageAspectRatio =
            product.imageWidth && product.imageHeight
              ? `${product.imageWidth} / ${product.imageHeight}`
              : undefined;

          return (
            <article
              key={product.imageNumber || `${product.name}-${index}`}
              className="animated-panel site-reveal border-2 border-[#2a1a0f] bg-[#d4c4a8]/50 p-2 shadow-[inset_0_0_22px_rgba(139,115,85,0.28),0_8px_18px_rgba(0,0,0,0.2)]"
            >
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() =>
                  setOpenProduct(isOpen ? "" : product.imageNumber)
                }
                className="nav-button flex w-full items-center justify-between gap-3 border-2 border-[#2a1a0f] bg-[#c9b896]/70 px-3 py-2 text-left text-[#1a0f0a] transition hover:bg-[#1a0f0a] hover:text-[#e8dcc4] rtl:text-right"
              >
                <span className="text-sm font-black uppercase tracking-[0.08em]">
                  {product.name}
                </span>
                <span className="text-lg font-black">{isOpen ? "-" : "+"}</span>
              </button>

              {isOpen && (
                <div className="product-reveal image-frame relative mt-2 overflow-hidden border border-[#8b7355] bg-[#1a0f0a]/20">
                  {showComingSoon && (
                    <div className="coming-soon-overlay pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-[#1a0f0a]/38">
                      <span className="coming-soon-dot" aria-hidden="true" />
                      <span className="coming-soon-flash" aria-hidden="true" />
                      <div className="coming-soon-label border-2 border-[#e8dcc4] bg-[#1a0f0a]/90 px-5 py-2 text-center shadow-[0_8px_18px_rgba(0,0,0,0.35)]">
                        <p className="m-0 text-lg font-black uppercase tracking-[0.16em] text-[#f2d58a]">
                          {data.comingSoonLabel}
                        </p>
                      </div>
                    </div>
                  )}

                  <div className={showComingSoon ? "blur-[3px]" : ""}>
                    <img
                      src={product.image}
                      alt={product.name}
                      width={product.imageWidth}
                      height={product.imageHeight}
                      loading="lazy"
                      decoding="async"
                      style={{ aspectRatio: imageAspectRatio }}
                      className="reference-image product-image block w-full object-contain"
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
