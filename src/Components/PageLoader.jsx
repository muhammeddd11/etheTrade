const PageLoader = () => (
  <div
    className="mobile-page-loader site-reveal md:hidden"
    role="status"
    aria-live="polite"
    aria-label="Loading page"
  >
    <div className="mobile-page-loader__mark" aria-hidden="true">
      <span className="mobile-page-loader__ring" />
      <img
        src="/ET_trade_logo_transparent_4k.png"
        alt=""
        className="mobile-page-loader__logo"
      />
    </div>
    <p className="mobile-page-loader__text">Loading</p>
  </div>
)
export default PageLoader