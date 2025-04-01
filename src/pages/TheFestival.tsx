import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function TheFestival() {
  return (
    <div className="min-h-screen bg-[#111] py-16">
      <SEO
        title="The Festival"
        description="A three-day performing arts festival celebrating creativity, connection, and play. Join us May 9-11 for performances that inspire reflection and joy."
        canonical="https://pauseandplay.mt/the-festival"
      />
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <div className="bg-[#EEC60D] inline-block px-4 py-1 mb-8">
          <h1 className="text-gray-900 font-bold">The Festival</h1>
        </div>

        <h2 className="text-[#37B5FF] text-2xl md:text-5xl font-bold mb-8">
          <strong><em>Pause & Play</em></strong> is a festival where creativity takes centre stage!
        </h2>

        <p className="text-white text-lg mb-16 max-w-4xl">
          Through this three-day festival, allow yourself to dive into the magic of the performing arts where artists let their imaginations run wild, and audiences get to explore, connect, and play in whatever way feels just right. From quiet reflections to moments of pure joy, we're here to celebrate how art brings us closer to ourselves and to each other.
        </p>

        {/* Main Content Sections */}
        <div className="space-y-20">
          {/* About Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-purple-400 mb-4">About the Festival</h3>
              <div className="text-gray-300 space-y-4">
                <p>
                  Get ready to feel, connect, and discover the extraordinary in every performance! 
                </p>
                <p>
                  This is a festival about celebrating play and creativity. This is a festival to pause and reflect, play to connect.
                </p>
                <p>
                  The festival will take place over three days, beginning on the evening of Friday 9th, and continuing throughout Saturday 10th and Sunday 11th May.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="about-the-festival.jpg"
                alt="Festival performance"
                className="rounded-lg object-cover h-80 w-full"
              />
              <p className="absolute bottom-2 right-2 text-gray-300 text-xs bg-black/50 px-2 py-1 rounded-md backdrop-blur-sm">
                Photo Credit: Darrin Zammit Lupi
              </p>
            </div>
          </section>

          {/* Navigation Links */}
          <section>
            <h3 className="text-2xl font-bold text-purple-400 mb-6">Explore More</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link to="/events" className="group">
                <div className="bg-gray-800 rounded-lg overflow-hidden transition-all duration-300 group-hover:bg-gray-700 group-hover:shadow-lg border-l-4 border-[#37B5FF]">
                  <div className="p-6">
                    <h4 className="text-white font-bold text-xl mb-2 group-hover:text-[#37B5FF]">Events</h4>
                    <p className="text-gray-300">Discover all the performances and activities planned for the festival</p>
                  </div>
                </div>
              </Link>

              <Link to="/team" className="group">
                <div className="bg-gray-800 rounded-lg overflow-hidden transition-all duration-300 group-hover:bg-gray-700 group-hover:shadow-lg border-l-4 border-[#EEC60D]">
                  <div className="p-6">
                    <h4 className="text-white font-bold text-xl mb-2 group-hover:text-[#EEC60D]">Festival Team</h4>
                    <p className="text-gray-300">Meet the people who make the Pause & Play Festival possible</p>
                  </div>
                </div>
              </Link>

              <Link to="/getting-there" className="group">
                <div className="bg-gray-800 rounded-lg overflow-hidden transition-all duration-300 group-hover:bg-gray-700 group-hover:shadow-lg border-l-4 border-purple-400">
                  <div className="p-6">
                    <h4 className="text-white font-bold text-xl mb-2 group-hover:text-purple-400">Getting There</h4>
                    <p className="text-gray-300">Find directions and local <br/> information</p>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}