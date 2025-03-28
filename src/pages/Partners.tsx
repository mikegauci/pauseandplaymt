export default function Partners() {
  return (
    <div className="min-h-screen bg-[#111] py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <div className="bg-[#EEC60D] inline-block px-4 py-1 mb-8">
          <h1 className="text-[#1E0B36] font-bold">Partners</h1>
        </div>

        <h2 className="text-[#37B5FF] text-5xl font-bold mb-12">
          Partners that are making Pause & Play a reality.
        </h2>

        {/* Core Team Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <img 
              src="/Partner-1.jpg"
              alt="University of Bath"
              className="w-full aspect-square object-contain bg-white rounded-lg p-4"
            />
            <img 
              src="/Partner-2.jpg"
              alt="Arts Council England"
              className="w-full aspect-square object-contain bg-white rounded-lg p-4"
            />
            <img 
              src="/Partner-3.jpg"
              alt="Frome Town Council"
              className="w-full aspect-square object-contain bg-white rounded-lg p-4"
            />
            <img 
              src="/Partner-4.png"
              alt="Somerset Council"
              className="w-full aspect-square object-contain bg-white rounded-lg p-4"
            />
            <img 
              src="/Partner-5.jpg"
              alt="Somerset Council"
              className="w-full aspect-square object-contain bg-white rounded-lg p-4"
            />
            <img 
              src="/Partner-6.jpg"
              alt="Somerset Council"
              className="w-full aspect-square object-contain bg-white rounded-lg p-4"
            />
          </div>
        </section>
      </div>
    </div>
  );
}