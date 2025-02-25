export default function Partners() {
  return (
    <div className="min-h-screen bg-gray-900 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <div className="bg-[#CCFF33] inline-block px-4 py-1 mb-8">
          <h1 className="text-[#1E0B36] font-bold">Partners</h1>
        </div>

        <h2 className="text-[#FF6B4E] text-5xl font-bold mb-12">
          Organisations and companies that<br />
          are making Frome Festival a reality.
        </h2>

        {/* Core Team Section */}
        <section className="mb-20">
          <h2 className="text-white text-4xl font-bold text-center mb-12">Core Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <img 
              src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=800"
              alt="University of Bath"
              className="w-full aspect-square object-contain bg-white rounded-lg p-4"
            />
            <img 
              src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=800"
              alt="Arts Council England"
              className="w-full aspect-square object-contain bg-white rounded-lg p-4"
            />
            <img 
              src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=800"
              alt="Frome Town Council"
              className="w-full aspect-square object-contain bg-white rounded-lg p-4"
            />
            <img 
              src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=800"
              alt="Somerset Council"
              className="w-full aspect-square object-contain bg-white rounded-lg p-4"
            />
          </div>
        </section>

        {/* Supporters Section */}
        <section className="mb-20">
          <h2 className="text-white text-4xl font-bold text-center mb-12">Supporters</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <img 
              src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=800"
              alt="Black Swan Arts"
              className="w-full aspect-square object-contain bg-white rounded-lg p-4"
            />
            <img 
              src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=800"
              alt="Frome Memorial Theatre"
              className="w-full aspect-square object-contain bg-white rounded-lg p-4"
            />
            <img 
              src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=800"
              alt="Merlin Theatre"
              className="w-full aspect-square object-contain bg-white rounded-lg p-4"
            />
            <img 
              src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=800"
              alt="Cheese & Grain"
              className="w-full aspect-square object-contain bg-white rounded-lg p-4"
            />
          </div>
        </section>

        {/* Partners Section */}
        <section className="mb-20">
          <h2 className="text-white text-4xl font-bold text-center mb-12">Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <img 
              src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=800"
              alt="Frome Festival"
              className="w-full aspect-square object-contain bg-white rounded-lg p-4"
            />
            <img 
              src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=800"
              alt="Frome FM"
              className="w-full aspect-square object-contain bg-white rounded-lg p-4"
            />
            <img 
              src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=800"
              alt="From Times"
              className="w-full aspect-square object-contain bg-white rounded-lg p-4"
            />
            <img 
              src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=800"
              alt="Hunting Raven Books"
              className="w-full aspect-square object-contain bg-white rounded-lg p-4"
            />
          </div>
        </section>
      </div>
    </div>
  );
}