interface Event {
  id: string;
  title: string;
  image: string;
  category?: string;
  isFree?: boolean;
}

const events: Event[] = [
  {
    id: 'teddy-bear-hospital',
    title: "Queen Mary University of London's Teddy Bear Hospital",
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=800',
    category: 'Workshop'
  },
  {
    id: 'science-of-sleep',
    title: 'Science of Sleep',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800',
    category: 'Festival'
  },
  {
    id: 'buddies-experiment',
    title: 'Buddies Experiment Workshop',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800',
    isFree: true,
    category: 'Festival'
  },
  {
    id: 'justice-nature',
    title: 'Justice 4 People and Nature – become a Friend of the Earth',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=800',
    category: 'Theatre'
  },
  {
    id: 'start-in-malta',
    title: 'Start in Malta',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800',
    category: 'Theatre',
    isFree: true
  },
  {
    id: 'hunting-higgs',
    title: 'Hunting the Higgs',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=800',
    category: 'Theatre',
    isFree: true
  }
];

export default function Events() {
  return (
    <div className="min-h-screen bg-gray-900 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <div className="bg-[#CCFF33] inline-block px-4 py-1 mb-8">
          <h1 className="text-[#1E0B36] font-bold">2024</h1>
        </div>

        <h2 className="text-[#FF6B4E] text-5xl font-bold mb-8">
          What's Happening at Frome Festival 2024?
        </h2>

        <p className="text-white text-lg mb-16 max-w-3xl">
          Research and the arts storm the city for a weekend of fun, theatre and creativity. 
          Join us to learn how Justice, Equity, Diversity and Inclusion play into the work 
          of performers and what we all can do to make life better for all communities.
        </p>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div 
              key={event.id}
              className="group relative rounded-lg overflow-hidden bg-gray-800"
            >
              <div className="aspect-w-16 aspect-h-12">
                <img 
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                {event.isFree && (
                  <div className="absolute top-4 right-4 bg-pink-500 text-white px-4 py-1 rounded-full">
                    FREE
                  </div>
                )}
              </div>
              <div className="p-6">
                {event.category && (
                  <span className="text-purple-400 text-sm mb-2 block">
                    {event.category}
                  </span>
                )}
                <h3 className="text-white text-xl font-bold">
                  {event.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}