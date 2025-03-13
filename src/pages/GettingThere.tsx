import { Link } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  Bus,
  Ship,
  Car,
  Building,
  ExternalLink,
  Navigation,
} from "lucide-react";

export default function GettingThere() {
  // Function to scroll to section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Google Maps venue coordinates
  const venues = [
    {
      id: "valletta-campus",
      name: "Valletta Campus Theatre",
      address: "Triq San Pawl, Il-Belt Valletta",
      description:
        "The Valletta Campus Theatre is located within the historic University of Malta Valletta Campus, a stunning baroque building in the heart of Valletta.",
      coordinates: "35.89754,14.511698",
      color: "#EEC60D",
      isMain: true,
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3232.7978535352865!2d14.511698!3d35.89754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130e45257a20f57f%3A0xd77e882f484d0aee!2sValletta%20Campus%20Theatre!5e0!3m2!1sen!2smt!4v1721145847186!5m2!1sen!2smt",
    },
    {
      id: "wild-honey",
      name: "Wild Honey Beer House & Bistro",
      address: "Saint Lucia Street, Valletta",
      description:
        "Wild Honey is a popular venue known for its craft beers and excellent food, situated in a charming historic building in Valletta.",
      coordinates: "35.898654,14.512673",
      color: "#FFD700",
      isMain: false,
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3232.730744253809!2d14.512673!3d35.898654999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130e452d2e0acd9d%3A0xc85a666e56de8348!2sWild%20Honey!5e0!3m2!1sen!2smt!4v1721145894071!5m2!1sen!2smt",
    },
    {
      id: "maewest",
      name: "MaeWest",
      address: "51, Straight Street, Valletta",
      description:
        "MaeWest is located on the famous Strait Street, known for its vibrant nightlife and artistic atmosphere.",
      coordinates: "35.899272,14.515134",
      color: "#37B5FF",
      isMain: false,
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3232.70863636353!2d14.515134!3d35.899272999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130e45268f4e3c53%3A0x1dc04ca04eaf0bcf!2sMaewst!5e0!3m2!1sen!2smt!4v1721145925444!5m2!1sen!2smt",
    },
  ];

  return (
    <div className="min-h-screen bg-[#111] py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-[#EEC60D] inline-block px-4 py-1 mb-6">
          <h1 className="text-[#1E0B36] font-bold">Getting There</h1>
        </div>

        <h2 className="text-[#37B5FF] text-5xl font-bold mb-6">
          Explore magical places in Valletta
          <br />
          with the Festival
        </h2>

        <p className="text-white mb-8 max-w-4xl text-lg">
          Our festival will take place across three venues. Our venue is the
          Valletta Campus Theatre, and the other two venues are Wild Honey Beer
          House & Bistro, and MaeWest.
          <br />
          <br />
          With sustainability in mind, we strongly recommend the use of public
          transport, and carpooling to get to our festival.
        </p>

        {/* Quick Navigation */}
        <div className="flex flex-wrap gap-4 mb-16">
          <button
            onClick={() => scrollToSection("venues")}
            className="bg-[#1a1a1a] hover:bg-[#333] transition-colors px-6 py-3 rounded-full text-white flex items-center"
          >
            <Building className="w-5 h-5 mr-2 text-[#EEC60D]" />
            Venues
          </button>
          <button
            onClick={() => scrollToSection("transportation")}
            className="bg-[#1a1a1a] hover:bg-[#333] transition-colors px-6 py-3 rounded-full text-white flex items-center"
          >
            <Bus className="w-5 h-5 mr-2 text-[#EEC60D]" />
            Transportation
          </button>
        </div>

        {/* Venues Section */}
        <div id="venues" className="mb-20 scroll-mt-24">
          <h2 className="text-[#37B5FF] text-3xl font-bold mb-8 border-l-4 border-[#EEC60D] pl-4">
            Festival Venues
          </h2>

          {/* Venues Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {venues.map((venue) => (
              <div
                key={venue.id}
                className="bg-[#1a1a1a] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:translate-y-[-5px] group"
              >
                <div className="relative">
                  <iframe
                    src={venue.mapUrl}
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="z-0"
                  />
                  {venue.isMain && (
                    <div className="absolute top-0 right-0 bg-[#EEC60D] text-[#1E0B36] font-bold px-3 py-1">
                      Main Venue
                    </div>
                  )}
                </div>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${venue.coordinates}&travelmode=driving`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div
                    className="p-6 border-t-4 border-[#37B5FF]"
                  >
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#37B5FF] transition-colors">
                      {venue.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-6">
                      <MapPin
                        className="h-5 w-5 flex-shrink-0 text-[#37B5FF]"
                      />
                      <p className="text-[#37B5FF] text-sm">{venue.address}</p>
                    </div>

                    <div className="inline-flex items-center bg-[#1E1E1E] hover:bg-[#333] text-[#EEC60D] py-2 px-4 rounded-lg transition-colors">
                      <Navigation
                        className="h-4 w-4 mr-2 text-[#EEC60D]"
                      />
                      <span>Get Directions</span>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Transportation Options */}
        <div id="transportation" className="mb-20 scroll-mt-24">
          <h2 className="text-[#37B5FF] text-3xl font-bold mb-8 border-l-4 border-[#EEC60D] pl-4">
            Transportation Options
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Bus Transportation */}
            <div className="bg-[#1a1a1a] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:translate-y-[-5px] group">
              <div className="relative h-56 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800"
                  alt="Bus Transportation"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center">
                  <Bus className="w-6 h-6 text-[#FF6B4E] mr-2" />
                  <h3 className="text-white text-2xl font-bold">
                    Travelling by Bus
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <div className="text-gray-300 space-y-2">
                  <p>Information coming soon...</p>
                </div>
              </div>
            </div>

            {/* Ferry Transportation */}
            <div className="bg-[#1a1a1a] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:translate-y-[-5px] group">
              <div className="relative h-56 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800"
                  alt="Ferry Transportation"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center">
                  <Ship className="w-6 h-6 text-[#EEC60D] mr-2" />
                  <h3 className="text-white text-2xl font-bold">
                    Travelling by Ferry
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <div className="text-gray-300 space-y-2">
                  <p>Information coming soon...</p>
                </div>
              </div>
            </div>

            {/* Taxi */}
            <div className="bg-[#1a1a1a] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:translate-y-[-5px] group">
              <div className="relative h-56 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581262177000-8139a463e531?w=800"
                  alt="Taxi Transportation"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center">
                  <Car className="w-6 h-6 text-[#FFD700] mr-2" />
                  <h3 className="text-white text-2xl font-bold">
                    Travelling by Taxi
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <div className="text-gray-300 space-y-2">
                  <p>Information coming soon...</p>
                </div>
              </div>
            </div>

            {/* Parking Spots */}
            <div className="bg-[#1a1a1a] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:translate-y-[-5px] group">
              <div className="relative h-56 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=800"
                  alt="Parking Spots"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center">
                  <Car className="w-6 h-6 text-[#FF6B4E] mr-2" />
                  <h3 className="text-white text-2xl font-bold">
                    Parking Spots
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <div className="text-gray-300 space-y-2">
                  <p>Information coming soon...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
