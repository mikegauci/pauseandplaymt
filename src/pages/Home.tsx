import { ArrowRight, Calendar, MapPin, Users, Info, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#111]">
      {/* Hero Section */}
      <div 
        className="relative h-[85vh] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent" />
        <div className="relative max-w-6xl mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <div className="bg-[#EEC60D] inline-block px-4 py-1 mb-8">
              <h1 className="text-[#1E0B36] font-bold">Pause & Play Festival</h1>
            </div>
            <h2 className="text-[#37B5FF] text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Experience the magic of theatre, music, and art
            </h2>
            <p className="text-white text-lg mb-8 max-w-2xl">
              Join us for an extraordinary celebration of arts and culture in the heart of Valletta, featuring world-class performances, interactive workshops, and unforgettable experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="https://www.eventbrite.com/e/pause-play-festival-tickets-1249939425469?aff=oddtdtcreator"
                target="_blank"
                className="inline-flex items-center px-8 py-3 bg-[#EEC60D] text-[#1E0B36] text-lg font-semibold rounded-lg hover:bg-opacity-90 transition-colors"
              >
                Book your Spot!
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/events"
                className="inline-flex items-center px-8 py-3 bg-[#1a1a1a] border border-[#37B5FF]/30 text-[#37B5FF] text-lg font-semibold rounded-lg hover:bg-[#1a1a1a]/80 transition-colors"
              >
                View Events
                <Calendar className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Shortcuts */}
      <section className="py-10 bg-[#111]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/events" className="bg-[#1a1a1a] hover:bg-[#222] p-6 rounded-lg flex items-center gap-4 transition-transform hover:-translate-y-1 group">
              <div className="bg-[#37B5FF]/10 p-3 rounded-full">
                <Calendar className="h-6 w-6 text-[#37B5FF]" />
              </div>
              <div>
                <h3 className="text-white font-bold group-hover:text-[#37B5FF] transition-colors">Events</h3>
                <p className="text-gray-400 text-sm">Browse all events</p>
              </div>
            </Link>
            
            <Link to="/getting-there" className="bg-[#1a1a1a] hover:bg-[#222] p-6 rounded-lg flex items-center gap-4 transition-transform hover:-translate-y-1 group">
              <div className="bg-[#37B5FF]/10 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-[#37B5FF]" />
              </div>
              <div>
                <h3 className="text-white font-bold group-hover:text-[#37B5FF] transition-colors">Getting There</h3>
                <p className="text-gray-400 text-sm">Venues & directions</p>
              </div>
            </Link>
            
            <Link to="/the-festival" className="bg-[#1a1a1a] hover:bg-[#222] p-6 rounded-lg flex items-center gap-4 transition-transform hover:-translate-y-1 group">
              <div className="bg-[#37B5FF]/10 p-3 rounded-full">
                <Info className="h-6 w-6 text-[#37B5FF]" />
              </div>
              <div>
                <h3 className="text-white font-bold group-hover:text-[#37B5FF] transition-colors">The Festival</h3>
                <p className="text-gray-400 text-sm">Learn more about us</p>
              </div>
            </Link>
            
            <Link to="/contact" className="bg-[#1a1a1a] hover:bg-[#222] p-6 rounded-lg flex items-center gap-4 transition-transform hover:-translate-y-1 group">
              <div className="bg-[#37B5FF]/10 p-3 rounded-full">
                <MessageSquare className="h-6 w-6 text-[#37B5FF]" />
              </div>
              <div>
                <h3 className="text-white font-bold group-hover:text-[#37B5FF] transition-colors">Contact</h3>
                <p className="text-gray-400 text-sm">Get in touch with us</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="bg-[#EEC60D] inline-block px-4 py-1 mb-6">
              <h2 className="text-[#1E0B36] font-bold">About</h2>
            </div>
            <h2 className="text-[#37B5FF] text-4xl font-bold mb-6">About the Festival</h2>
            <p className="text-white text-lg max-w-3xl mx-auto mb-4">
              Through this three-day festival, allow yourself to dive into the magic of the performing arts where artists let their imaginations run wild, and audiences get to explore, connect, and play in whatever way feels just right.
            </p>
            <p className="text-white text-lg max-w-3xl mx-auto mb-4">
              From quiet reflections to moments of pure joy, we're here to celebrate how art brings us closer to ourselves and to each other.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-[#1a1a1a] p-8 rounded-lg border-t-4 border-[#37B5FF] transition-transform hover:-translate-y-2">
              <h3 className="text-xl font-bold text-[#37B5FF] mb-4">Theatre</h3>
              <p className="text-gray-300">
                Experience captivating performances from local and international theatre companies, showcasing diverse styles and stories that inspire and entertain.
              </p>
            </div>
            <div className="bg-[#1a1a1a] p-8 rounded-lg border-t-4 border-[#EEC60D] transition-transform hover:-translate-y-2">
              <h3 className="text-xl font-bold text-[#EEC60D] mb-4">Music</h3>
              <p className="text-gray-300">
                Enjoy diverse musical performances spanning multiple genres and cultures, from classical to contemporary sounds that move and uplift.
              </p>
            </div>
            <div className="bg-[#1a1a1a] p-8 rounded-lg border-t-4 border-[#37B5FF] transition-transform hover:-translate-y-2">
              <h3 className="text-xl font-bold text-[#37B5FF] mb-4">Connection</h3>
              <p className="text-gray-300">
                This is a festival about celebrating play and creativity. This is a festival to pause and reflect, play to connect with yourself and others through art.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/team"
              className="inline-flex items-center px-8 py-3 bg-[#1a1a1a] border border-[#37B5FF]/30 text-[#37B5FF] font-semibold rounded-lg hover:bg-[#333] transition-colors"
            >
              Meet the Festival Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-24 bg-[#0c0c0c] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-1/3 h-2/3 bg-[#37B5FF]/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-[#EEC60D]/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/3"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="bg-[#EEC60D] inline-block px-4 py-1 mb-6">
              <h2 className="text-[#1E0B36] font-bold">What's On</h2>
            </div>
            <h2 className="text-[#37B5FF] text-5xl font-bold mb-8">Featured Events</h2>
            <p className="text-white text-xl max-w-3xl mx-auto mb-8">
              Explore our exciting lineup of performances and activities scheduled throughout the festival. From interactive shows to captivating performances, there's something for everyone.
            </p>
            
            <div className="flex flex-col items-center justify-center space-y-6 mt-12">
              <div className="flex items-center space-x-3 text-white">
              </div>
              
              <div className="bg-[#1a1a1a] p-8 md:p-12 rounded-xl border border-[#37B5FF]/20 max-w-3xl mx-auto text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Three Days of Artistic Exploration</h3>
                <p className="text-gray-300 mb-8">
                  Immerse yourself in a diverse program featuring theatre performances, musical showcases, and interactive experiences. Our festival brings together local and international artists for an unforgettable celebration of creativity.
                </p>
                
                <Link
                  to="/events"
                  className="inline-flex items-center px-10 py-4 bg-[#37B5FF] text-[#1E0B36] text-lg font-semibold rounded-lg hover:bg-[#37B5FF]/90 transition-colors"
                >
                  View Events
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#111] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-[#37B5FF] to-[#EEC60D]"></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-[#37B5FF] text-4xl font-bold mb-6">Join Us This Summer</h2>
            <p className="text-white text-lg mb-8">
              Don't miss out on the most exciting cultural event of the year. Book your tickets now and be part of this unforgettable experience.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="https://www.eventbrite.com/e/pause-play-festival-tickets-1249939425469?aff=oddtdtcreator"
                target="_blank"
                className="inline-flex items-center px-8 py-3 bg-[#EEC60D] text-[#1E0B36] text-lg font-semibold rounded-lg hover:bg-opacity-90 transition-colors"
              >
                Book your Spot!
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-[#1a1a1a] border border-[#37B5FF]/30 text-[#37B5FF] text-lg font-semibold rounded-lg hover:bg-[#1a1a1a]/80 transition-colors"
              >
                Contact Us
                <MessageSquare className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}