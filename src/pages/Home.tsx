import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-[#111]">
      {/* Hero Section */}
      <div 
        className="relative h-[80vh] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-gray-900 bg-opacity-70" />
        <div className="relative max-w-6xl mx-auto px-4 h-full flex items-center">
          <div>
            <div className="bg-[#EEC60D] inline-block px-4 py-1 mb-8">
              <h1 className="text-[#1E0B36] font-bold">Festival 2024</h1>
            </div>
            <h2 className="text-[#37B5FF] text-5xl font-bold mb-8">
              Experience the magic of theatre, music, and art
            </h2>
            <Link
              to="/programme"
              className="inline-flex items-center px-8 py-3 bg-[#EEC60D] text-[#1E0B36] text-lg font-semibold rounded-lg hover:bg-opacity-90 transition-colors"
            >
              View Programme
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-[#37B5FF] text-4xl font-bold mb-6">About the Festival</h2>
            <p className="text-white text-lg">
              Join us for an extraordinary celebration of arts and culture, featuring world-class performances,
              interactive workshops, and unforgettable experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Theatre</h3>
              <p className="text-gray-300">
                Experience captivating performances from local and international theatre companies.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Music</h3>
              <p className="text-gray-300">
                Enjoy diverse musical performances spanning multiple genres and cultures.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Workshops</h3>
              <p className="text-gray-300">
                Participate in interactive workshops led by industry professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-[#37B5FF] text-4xl font-bold mb-12 text-center">Featured Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Opening Night Gala",
                date: "June 1, 2024",
                image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80"
              },
              {
                title: "International Theatre Showcase",
                date: "June 3-5, 2024",
                image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&q=80"
              },
              {
                title: "Youth Theatre Workshop",
                date: "June 7, 2024",
                image: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?auto=format&fit=crop&q=80"
              }
            ].map((event, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                  <p className="text-purple-400 mb-4">{event.date}</p>
                  <Link
                    to="/events"
                    className="text-[#CCFF33] hover:text-[#CCFF33]/90 font-medium inline-flex items-center"
                  >
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}