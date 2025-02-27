export default function TheFestival() {
  return (
    <div className="min-h-screen bg-[#111] py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <div className="bg-[#EEC60D] inline-block px-4 py-1 mb-8">
          <h1 className="text-gray-900 font-bold">The Festival</h1>
        </div>

        <h2 className="text-[#37B5FF] text-5xl font-bold mb-8">
          Celebrating Arts, Science and Culture in Frome
        </h2>

        <p className="text-white text-lg mb-16">
          The Frome Festival brings together artists, performers, and audiences for an extraordinary 
          celebration of creativity and innovation. Join us for three days of unforgettable experiences.
        </p>

        {/* Main Content Sections */}
        <div className="space-y-20">
          {/* About Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-purple-400 mb-4">About the Festival</h3>
              <div className="text-gray-300 space-y-4">
                <p>
                  Founded in 2020, the Frome Festival has grown into one of the region's most anticipated 
                  cultural events. We bring together local and international talent to create a unique 
                  platform for artistic expression and community engagement.
                </p>
                <p>
                  Our mission is to make arts and culture accessible to everyone while supporting emerging 
                  artists and fostering creative collaboration.
                </p>
              </div>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800"
              alt="Festival performance"
              className="rounded-lg object-cover h-80 w-full"
            />
          </section>

          {/* What to Expect Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <img 
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800"
              alt="Interactive workshop"
              className="rounded-lg object-cover h-80 w-full md:order-2"
            />
            <div className="md:order-1">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">What to Expect</h3>
              <ul className="text-gray-300 space-y-3 list-disc list-inside">
                <li>Interactive workshops and masterclasses</li>
                <li>Live performances and exhibitions</li>
                <li>Community art projects</li>
                <li>International guest artists</li>
                <li>Family-friendly activities</li>
                <li>Local food and craft vendors</li>
              </ul>
            </div>
          </section>

          {/* Venues Section */}
          <section>
            <h3 className="text-2xl font-bold text-purple-400 mb-6">Our Venues</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800"
                  alt="Memorial Theatre"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-white font-bold mb-2">Memorial Theatre</h4>
                  <p className="text-gray-300">Our main stage for performances and major events</p>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800"
                  alt="The Gallery"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-white font-bold mb-2">The Gallery</h4>
                  <p className="text-gray-300">Exhibition space for visual arts and installations</p>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1526399743290-f73cb4022f48?w=800"
                  alt="Workshop Space"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-white font-bold mb-2">Workshop Space</h4>
                  <p className="text-gray-300">Dedicated area for interactive sessions and classes</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}