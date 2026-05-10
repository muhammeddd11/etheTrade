const ContactBox = ({ content, highlighted = false, boxRef }) => {
  return (
    <div
      ref={boxRef}
      tabIndex={-1}
      className={`contact-box mt-2 border-2 border-[#2a1a0f] bg-[#1a0f0a] p-3 shadow-[inset_0_0_20px_rgba(201,184,150,0.12),0_8px_18px_rgba(0,0,0,0.25)] outline-none ${
        highlighted ? "contact-box--highlight" : ""
      }`}
    >
      <h4 className="mb-2 text-center text-base font-black uppercase text-[#e8dcc4]">
        {content.boxTitle}
      </h4>
      <div className="space-y-0.5 text-sm leading-snug text-[#e8dcc4]">
        <p>
          {content.emailLabel}: {content.email}
        </p>
        <p>
          {content.locationLabel}: {content.location}
        </p>
        <p>
          {content.phoneLabel}: {content.phone}
        </p>
      </div>
    </div>
  );
};

export default ContactBox;
