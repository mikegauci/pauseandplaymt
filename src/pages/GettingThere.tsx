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
      address: "Merchants Street, Valletta",
      description:
        "The Valletta Campus Theatre is located within the historic University of Malta Valletta Campus, a stunning baroque building in the heart of Valletta.",
      coordinates: "35.8986576,14.5152355",
      color: "#EEC60D",
      isMain: true,
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d520.8464503221766!2d14.51510604956509!3d35.89874689148582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130e452bb44faf19%3A0x7e227ae89c3f7071!2sValletta%20Campus%20Theatre%20VCT%20(Ex%20MITP)!5e1!3m2!1sen!2smt!4v1743139734472!5m2!1sen!2smt",
    },
    {
      id: "wild-honey",
      name: "Wild Honey Beer House & Bistro",
      address: "Merchants Street, Valletta",
      description:
        "Wild Honey is a popular venue known for its craft beers and excellent food, situated in a charming historic building in Valletta.",
      coordinates: "35.8998415,14.5169268",
      color: "#FFD700",
      isMain: false,
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d951.9202066524996!2d14.516755811224634!3d35.899769434722444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130e452c6e948a8b%3A0x97581ca2c3a8af22!2sWild%20Honey%20Beer%20House%20%26%20Bistro!5e1!3m2!1sen!2smt!4v1743139666772!5m2!1sen!2smt",
    },
    {
      id: "maewest",
      name: "MaeWest",
      address: "Strait Street, Valletta",
      description:
        "MaeWest is located on the famous Strait Street, known for its vibrant nightlife and artistic atmosphere.",
      coordinates: "35.900372,14.5148146",
      color: "#37B5FF",
      isMain: false,
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d185.4240727670084!2d14.51481809942219!3d35.90041243829037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130e455dfe83cf4d%3A0xdba2eb6efedee27d!2sMaeWest!5e1!3m2!1sen!2smt!4v1743139325758!5m2!1sen!2smt",
    },
  ];

  return (
    <div className="min-h-screen bg-[#111] py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-[#EEC60D] inline-block px-4 py-1 mb-6">
          <h1 className="text-[#1E0B36] font-bold">Getting There</h1>
        </div>

        <h2 className="text-[#37B5FF] text-5xl font-bold mb-6">
          Sustainable ways to get to the festival
        </h2>

        <p className="text-white mb-8 max-w-4xl text-lg">
          There will be three venues for the festival.
          <br />
          <br />
          The main festival venue will be the University's Valletta Campus, with
          performances distributed across the ground floor.
          <br />
          <br />
          Additional external venues will also host performances for the
          festival, namely Wild Honey Beer House & Bistro and MaeWest and are
          within walking distance from the main festival venue.
          <br />
          <br />
          With sustainability in mind, we strongly recommend the use of public
          transport, getting a taxi or carpooling to get to our festival.
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
                  <div className="p-6 border-t-4 border-[#37B5FF]">
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#37B5FF] transition-colors">
                      {venue.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-6">
                      <MapPin className="h-5 w-5 flex-shrink-0 text-[#37B5FF]" />
                      <p className="text-[#37B5FF] text-sm">{venue.address}</p>
                    </div>

                    <div className="inline-flex items-center bg-[#1E1E1E] hover:bg-[#333] text-[#EEC60D] py-2 px-4 rounded-lg transition-colors">
                      <Navigation className="h-4 w-4 mr-2 text-[#EEC60D]" />
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
              <div className="p-6 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-[#222] flex items-center justify-center mb-4 border-2 border-[#FF6B4E]">
                  <Bus className="w-10 h-10 text-[#FF6B4E]" />
                </div>
                <h3 className="text-white text-2xl font-bold mb-4 text-center">
                  Travelling by Bus
                </h3>
                <div className="text-gray-300 space-y-2">
                  <p>
                    Almost all buses travel to Valletta from pretty much
                    everywhere in Malta, to check bus times and where the
                    nearest bus stop from your location is, we strongly advise
                    visiting the Malta Public Transport website or downloading
                    the Tallinja app
                  </p>
                </div>
              </div>
            </div>

            {/* Ferry Transportation */}
            <div className="bg-[#1a1a1a] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:translate-y-[-5px] group">
              <div className="p-6 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-[#222] flex items-center justify-center mb-4 border-2 border-[#EEC60D]">
                  <Ship className="w-10 h-10 text-[#EEC60D]" />
                </div>
                <h3 className="text-white text-2xl font-bold mb-4 text-center">
                  Travelling by Ferry
                </h3>
                <div className="text-gray-300 space-y-2">
                  <p>
                    You can catch the ferry from; The Strand in Sliema directly
                    to Valletta and from Valletta to the Three Cities
                    (Vittoriosa, Senglea and Cospicua). The ferry service runs
                    daily from early morning till late at night, we strongly
                    advise visiting the Valletta Ferry Services website for more
                    information and for ferry times
                  </p>
                </div>
              </div>
            </div>

            {/* Taxi */}
            <div className="bg-[#1a1a1a] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:translate-y-[-5px] group">
              <div className="p-6 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-[#222] flex items-center justify-center mb-4 border-2 border-[#FFD700]">
                  <Car className="w-10 h-10 text-[#FFD700]" />
                </div>
                <h3 className="text-white text-2xl font-bold mb-4 text-center">
                  Travelling by Taxi
                </h3>
                <div className="text-gray-300 space-y-2">
                  <p>
                    Taxis are incredibly easy to book from anywhere in Malta,
                    the main taxi providers in Malta are; Bolt, Uber and eCabs
                    (among others), there are also white cabs which are
                    available too. All taxi services vary in pricing, so we
                    strongly recommend visiting their respective website and/or
                    download their app to book.
                  </p>
                </div>
              </div>
            </div>

            {/* Parking Spots */}
            <div className="bg-[#1a1a1a] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:translate-y-[-5px] group">
              <div className="p-6 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-[#222] flex items-center justify-center mb-4 border-2 border-[#FF6B4E]">
                  <div className="w-10 h-10 flex items-center justify-center text-[#FF6B4E] font-bold text-3xl">P</div>
                </div>
                <h3 className="text-white text-2xl font-bold mb-4 text-center">
                  Parking Spots
                </h3>
                <div className="text-gray-300 space-y-2">
                  <p>
                    While we encourage more sustainable uses of getting to the
                    festival, Valletta offers numerous parking spots (subject to
                    a CVA charge) and a car park (MCP Car Park) can be located
                    just outside of Valletta's main gates in Floriana. If you
                    choose to park in the car park, Valletta Campus (and other
                    external venues) is easily accessible by foot and should
                    only take you 15 minutes to get there.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
