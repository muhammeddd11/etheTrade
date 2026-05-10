import ContactBox from "./ContactBox";

const ContactPage = ({ data, highlighted, contactRef }) => {
  return (
    <section className="border-t-4 border-double border-[#2a1a0f] pt-2.5">
      <div className="mx-auto max-w-2xl border-2 border-[#2a1a0f] bg-[#d4c4a8]/50 p-3 shadow-[inset_0_0_22px_rgba(139,115,85,0.28),0_8px_18px_rgba(0,0,0,0.2)]">
        <h2 className="mb-3 border-b-2 border-[#2a1a0f] pb-2 text-center text-2xl font-black uppercase tracking-[0.08em] text-[#1a0f0a]">
          {data.pageTitle}
        </h2>
        <ContactBox
          boxRef={contactRef}
          content={data}
          highlighted={highlighted}
        />
      </div>
    </section>
  );
};

export default ContactPage;
