const Grid = ({ children }) => {
  return (
    <div className="gallery-stage grid grid-cols-1 gap-3 border-t-4 border-double border-[#2a1a0f] pt-2.5 lg:grid-cols-[1.07fr_0.9fr_1fr]">
      {children}
    </div>
  );
};

export default Grid;
