const ContactBox = ({ highlighted = false, boxRef }) => {
  return (
    <div
      ref={boxRef}
      tabIndex={-1}
      className={`contact-box mt-2 border-2 border-[#2a1a0f] bg-[#1a0f0a] p-3 shadow-[inset_0_0_20px_rgba(201,184,150,0.12),0_8px_18px_rgba(0,0,0,0.25)] outline-none ${
        highlighted ? "contact-box--highlight" : ""
      }`}
    >
      <h4 className="mb-2 text-center text-base font-black uppercase text-[#e8dcc4]">
        Let's Connect
      </h4>
      <div className="space-y-0.5 text-sm leading-snug text-[#e8dcc4]">
        <p>Email: ete@ethetrade.info</p>
        <p>Location: Dubai, UAE</p>
        <p>Phone: +971 554038149</p>
      </div>
    </div>
  );
};

export default ContactBox;
