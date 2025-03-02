const WorkSection = () => {
  return (
    <section className="text-center py-10 text-white">
      <h2 className="text-3xl font-semibold">Our Works</h2>
      <div className="flex justify-center gap-6 mt-6">
        {[1, 2, 3].map((_, index) => (
          <div key={index} className="w-56 h-40 bg-gray-800 rounded-xl"></div>
        ))}
      </div>
    </section>
  );
};

export default WorkSection;
