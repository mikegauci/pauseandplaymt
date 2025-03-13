import { Link } from "react-router-dom";
import { Clock } from "lucide-react";

interface Event {
  id: string;
  title: string;
  image: string;
  category?: string;
  isFree?: boolean;
  ageRestriction?: string;
  duration?: string;
}

interface ExternalEvent {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  image: string;
}

const events: Event[] = [
  {
    id: 'story-circle-play-time',
    title: "Story Circle & Play Time",
    image: "/Story-Circle-Play-Time-Main-Photo.jpg",
    category: 'Workshop',
    ageRestriction: '15+',
    duration: '30 minutes'
  },
  {
    id: 'no-name-no-past',
    title: 'No Name. No Past',
    image: "/No-Name-No-Past.jpg",
    category: 'Festival',
    ageRestriction: '13+',
    duration: '25 minutes'
  },
  {
    id: 'when-good-enough-is-enough',
    title: 'When Good Enough is Enough',
    image: "/When-Good-Enough-is-Enough.jpg",
    category: 'Festival',
    duration: '30 minutes'
  },
  {
    id: '90-sekonda',
    title: '90 Sekonda',
    image: "/90-Sekonda.jpg",
    category: 'Theatre',
    ageRestriction: '16+',
    duration: '20 minutes'
  },
  {
    id: 'the-language-of-the-deaf',
    title: 'The Language of the Deaf',
    image: "/90-Sekonda.jpg",
    category: 'Theatre',
    ageRestriction: '18+',
    duration: '45 minutes'
  },
  {
    id: 'ted-talk',
    title: 'TED talk',
    image: "/TED-Talk.jpg",
    category: 'Theatre',
    ageRestriction: '16+',
    duration: '15 minutes'
  },
  {
    id: 'pause-and-reflect',
    title: 'Pause & Reflect',
    image: "/TED-Talk.jpg",
    category: 'Theatre',
    duration: '30 minutes'
  }
];

const externalEvents: ExternalEvent[] = [
  {
    id: 'lets-have-a-drag-show',
    title: "Let's Have a Drag Show",
    description: "Join us for an evening of drinks, fun and a bit of diva at this external performance taking part in the Pause & Play Festival!",
    location: "Wild Honey Beer House & Bistro",
    date: "9th May 2025",
    image: "/lets-have-a-drag-show.jpg"
  },
  {
    id: 'music-blues-with-tonation',
    title: "Music Blues with Tonation",
    description: "Join us for an evening of music, drinks and fun at this external performance taking part in the Pause & Play Festival!",
    location: "MaeWest",
    date: "10th May 2025",
    image: "/music-blues-with-tonation.jpg"
  },
  {
    id: 'laugh-out-loud-comedy',
    title: "Laugh Out Loud Comedy",
    description: "Join us for an evening of laughter, drinks, fun and a bit of naughty at this external performance taking part in the Pause & Play Festival!",
    location: "MaeWest",
    date: "11th May 2025",
    image: "/laugh-out-loud-comedy.jpg"
  }
];

export default function Events() {
  return (
    <div className="min-h-screen bg-[#111] py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <div className="bg-[#EEC60D] inline-block px-4 py-1 mb-8">
          <h1 className="text-[#1E0B36] font-bold">Events</h1>
        </div>

        <h2 className="text-[#37B5FF] text-5xl font-bold mb-8">
          What’s happening at the Pause & Play Festival
        </h2>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <Link
              key={event.id}
              to={`/events/${event.id}`}
              className="rounded-lg overflow-hidden block transition-transform hover:scale-105 group relative"
            >
              <div className="aspect-w-16 aspect-h-12 relative">
                <img 
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                {event.isFree && (
                  <div className="absolute top-4 left-4 bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium z-10">
                    FREE
                  </div>
                )}
                
                {event.ageRestriction && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold z-10 shadow-lg">
                    {event.ageRestriction}
                  </div>
                )}
              </div>
              
              <div className="p-6 bg-[#1a1a1a] border-t-2 border-[#37B5FF] relative z-10">
                <h3 className="text-white text-xl font-bold mb-2 group-hover:text-[#37B5FF] transition-colors">
                  {event.title}
                </h3>
                
                {event.duration && (
                  <div className="flex items-center text-gray-300 text-sm">
                    <Clock className="w-4 h-4 mr-2 text-[#EEC60D]" />
                    {event.duration}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* External Events Section */}
        <div className="mt-24 mb-8">
          <div className="border-l-4 border-[#EEC60D] pl-4 mb-12">
            <h2 className="text-4xl font-bold text-white">External Events</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {externalEvents.map((event) => (
              <div
                key={event.id}
                className="rounded-lg overflow-hidden bg-[#1a1a1a] border border-[#333] transition-transform hover:scale-105"
              >
                <div className="aspect-w-16 aspect-h-12 relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-white text-xl font-bold mb-3">
                    {event.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 min-h-[80px]">
                    {event.description}
                  </p>
                  <div className="flex items-center text-[#37B5FF] text-sm mb-2">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                    </svg>
                    {event.location}
                  </div>
                  <div className="flex items-center text-[#EEC60D] text-sm">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                    </svg>
                    {event.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}