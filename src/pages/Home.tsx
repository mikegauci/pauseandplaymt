import { ArrowRight, Calendar, MapPin, Users, Info, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '../hooks/useIsMobile';
import SEO from '../components/SEO';
import { useEffect } from 'react';

// Add image imports to ensure proper loading
import heroDesktop from '/home-page-hero-3.jpg';
import heroMobile from '/home-page-hero-mobile.jpg';

export default function Home() {
  const isMobile = useIsMobile();

  // Preload hero images
  useEffect(() => {
    const preloadImages = () => {
      const imageList = [heroDesktop, heroMobile];
      imageList.forEach((image) => {
        const img = new Image();
        img.src = image;
      });
    };
    preloadImages();
  }, []);

  return (
    <div className="min-h-screen bg-[#111]">
      <SEO 
        title="Home"
        description="Pause & Play Festival - A celebration of play and creativity in Malta. Join us for extraordinary performances, interactive shows, and captivating experiences that will make you feel, connect, and discover."
        canonical="https://pauseandplay.mt"
      />
      {/* Hero Section */}
      <div 
        className="relative min-h-[600px] h-[85vh] bg-cover bg-center bg-[#111]"
        style={{
          backgroundImage: `url(${isMobile ? heroMobile : heroDesktop})`,
          aspectRatio: isMobile ? '4/5' : '16/9',
          willChange: 'transform',
          width: '100%',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent" />
        <div className="relative max-w-6xl mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <div className="bg-[#EEC60D] inline-block px-4 py-1 mb-8 transform-gpu">
              <h1 className="text-[#1E0B36] font-bold">Pause & Play Festival</h1>
            </div>
            <h2 className="text-white text-2xl md:text-6xl font-bold mb-8 leading-tight">
              Get ready to feel, connect, and discover the extraordinary in every performance!
            </h2>
            <p className="text-white text-lg mb-8 max-w-2xl">
              This is a festival about celebrating play and creativity.<br/>
              This is a festival to pause and reflect, play to connect.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="https://www.eventbrite.com/e/pause-play-festival-tickets-1249939425469?aff=oddtdtcreator"
                target="_blank"
                className="inline-flex items-center px-8 py-3 bg-[#EEC60D] text-[#1E0B36] text-lg font-semibold rounded-lg hover:bg-opacity-90 transition-colors"
              >
                Reserve Your Spot
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
            <p className="text-gray-500 text-sm mt-4 opacity-70">Photo Credit: Darrin Zammit Lupi</p>
          </div>
        </div>
      </div>

      {/* Navigation Shortcuts */}
      <section className="py-10 bg-[#111]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
            <h2 className="text-[#37B5FF] text-2xl md:text-5xl font-bold mb-8">Featured Events</h2>
            <p className="text-white text-xl max-w-3xl mx-auto mb-8">
              Explore our exciting lineup of performances and activities scheduled throughout the festival. From interactive shows to captivating performances, there's something for everyone.
            </p>
            <Link
              to="/events"
              className="inline-flex items-center px-8 py-3 bg-[#37B5FF] text-[#1E0B36] text-lg font-semibold rounded-lg hover:bg-opacity-90 transition-colors"
            >
              View All Events
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}