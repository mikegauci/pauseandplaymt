import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, AlertTriangle, Info } from "lucide-react";

// Define a type for the event data structure
type EventData = {
  id: string;
  title: string;
  duration?: string;
  time?: string;
  disclaimer?: string;
  image: string;
  description: string;
  isExhibition?: boolean;
  exhibitionInfo?: string;
};

const eventsData: Record<string, EventData> = {
  "story-circle-play-time": {
    id: "story-circle-play-time",
    title: "Story Circle & Play Time",
    duration: "30 minutes",
    time: "7:30 PM - 9:00 PM",
    disclaimer: "15+, may contain strong language",
    image: "/Story-Circle-Play-Time-Main-Photo.jpg",
    description: `Combining poetry and storytelling, Alex will be guiding audience-participants through a series of simple interactive activities, all around a table top in an intimate environment. Expect doodling, LEGO bricks, sound effects, and general silliness. Storytelling and playfulness are fundamental aspects of human nature - we are never too old to gather in a circle, share stories, and play the fool.`,
  },
  "no-name-no-past": {
    id: "no-name-no-past",
    title: "No Name. No Past",
    duration: "25 minutes",
    time: "7:30 PM - 9:00 PM",
    disclaimer: "13+, there may be some flashing lights",
    image: "/No-Name-No-Past-1.jpg",
    description: `Three strangers jolt awake in a cold, unfamiliar room—no names, no memories, no clue how they got there.`,
  },
  "when-good-enough-is-enough": {
    id: "when-good-enough-is-enough",
    title: "When Good Enough is Enough",
    duration: "30 minutes",
    time: "7:30 PM - 9:00 PM",
    disclaimer: "Audience interaction may occur",
    image: "/When-Good-Enough-is-Enough-1.jpg",
    description: `When Good Enough is Enough is a research-based performance that explores the intersection of personal history, creative industry expectations, and the limitations of standardized learning. This work is not merely a technical display of skill, but rather a nuanced exploration of the performer's journey through dance and identity. Charlene's early aspirations were marked by a desire to become a pom-pom dancer, later evolving into a deep passion into rave culture. However, in her thirties, when she began taking dance classes, she confronted the realization that conventional dance training was inherently incompatible with her own learning style. Despite repeated attempts, she struggled to conform to expectations, leading her to reconnect with the feeling of inadequacy she experienced as a child when she was punished for writing her name "wrong". This constant pressure to meet external standards of "correctness" triggered burnout and frustration. Yet from this struggle emerged a powerful act of rebellion, offering a voice to those who learn differently and advocating for the validation of non-conventional pathways within professional spaces. The performance challenges society's narrow definition of 'good enough' and celebrates what might be perceived as "failure," reframing it as an alternative way of being and doing.`,
  },
  "90-sekonda": {
    id: "90-sekonda",
    title: "90 Sekonda",
    duration: "45 minutes",
    time: "7:30 PM - 9:00 PM",
    disclaimer: "16+, strong language, implied drug use",
    image: "/90-Sekonda.jpg",
    description: `90 SEKONDA follows a nameless protagonist-narrator who sets off on a hedonistic mission of self-destruction in the wake of his eco-extremist brother Luca's sudden passing. The circumstances surrounding Luca's death - paired with the discovery of his extreme beliefs - force our protagonist to come to terms with the hypocrisy of his actions as a corporate slave, and subsequently challenge the status quo. 90 SEKONDA offers a nuanced critique of the ongoing climate crisis as it explores the futility of our own actions in light of corporate greed.`,
  },
  "the-language-of-the-deaf": {
    id: "the-language-of-the-deaf",
    title: "The Language of the Deaf & Hooray, Our World is Ending",
    duration: "30 minutes",
    time: "7:30 PM - 9:00 PM",
    disclaimer:
      "18+, the performance contains and talks about aspects of sexual violence",
    image: "/Hooray-the-world-is-over.jpg",
    exhibitionInfo: "The exhibition is open to the general public throughout the festival",
    description: `##D Shows presents two performances in one sitting

###The Language of the Deaf

The Language of the Deaf explores topics of greed and unspoken taboos in society, gravity of silence and fear of words. How can we challenge societal cliches? Shed light onto subconscious patterns? A performance piece by D Shows. A piece that provokes and intentionally questions conventional paradigms.

###Hooray, Our World is Ending

To the end of the world! And to whatever comes after

This performance piece, set in a bar, dives into the sentiment of being paralyzed by frustration.

The grumpy regular ranting about the world, while drinking through another night of forgetting.

"My mind is in: Palestine, Congo, Ethiopia, Sudan. It's on one of the boats that might arrive at our shores tomorrow. Or yesterday? and I haven't even kept up with the news to carry this knowledge like a burden."

But how can we do something about it?

**D Shows invites all the spectators to connect.**`,
  },
  "contact": {
    id: "contact",
    title: "Contact",
    duration: "30 minutes",
    time: "7:30 PM - 9:00 PM",
    disclaimer: "16+",
    image: "/TED-Talk.jpg",
    description: `A “TED Talk” about how one can see the connectivity within connection.`,
  },
  "pause-and-reflect": {
    id: "pause-and-reflect",
    title: "Pause & Reflect",
    isExhibition: true,
    exhibitionInfo: "The exhibition is open to the general public throughout the festival",
    image: "/Pause-and-reflect-12.jpg",
    description: `Emily's work explores the balance between chaos and calm, capturing the need to pause in anxious moments and reflect on the good. Through painterly, abstract, and vibrant compositions, she creates a sense of movement that represents life's unpredictability—its rush, its worries, its intensity. This dynamic energy is then balanced by areas of stillness, inviting a feeling of peace and mindfulness. Colour plays a key role, reflecting different moods and emotions, from tension to tranquillity. Each piece serves as a visual reminder to slow down, breathe, and find beauty in both the turbulence and the quiet moments of life.`,
  },
  "first-year-performance": {
    id: "first-year-performance",
    title: "First Year Performance",
    image: "/First-year-performance.jpg",
    description: "Which news items catch our attention? How do we deal with them? Using the dramatised, living newspaper model, First Year Theatre Studies students are excited to 'pause and play' by sharing a programme of five short performances on a variety of themes: power, security, status, loss, and empathy. How real are our stories? Do they mix with abstract ideas or dreams? Come and find out!",
    duration: "1 Hour",
  },
  "the-pigs-in-a-parlour": {
    id: "the-pigs-in-a-parlour",
    title: "The Pigs in a Parlour: A PaR Performance",
    image: "/the-pigs-in-a-parlour-1.jpg",
    description: `'Four Practice Researchers trying to find the Pigs in a Parlour. 'The Pigs in a Parlour' formed part of 'Practice Research', which is a Theatre Studies study-unit at the University of Malta in 2024. The performance follows Duration 56, a concept developed by Prof. Frank Camilleri, and explores the concept and practice of duration, repetition, and improvisation. Moreover, it explores its impact on the attention and work of performers within a structure of actions and tasks performed in an installation-type setting involving chairs and lanes.`,
    duration: "30 minutes",
    disclaimer: "A majority of the performance will be in the dark",
  },
  "bahar": {
    id: "bahar",
    title: "Bahar",
    image: "/Bahar.jpg",
    description: `An intimate view of Malta's sea: where light is refracted into a variety of unique works of art.`,
    isExhibition: true,
    exhibitionInfo: "The exhibition is open to the general public throughout the festival",
  },
  "to-be-confirmed": {
    id: "to-be-confirmed",
    title: "Name: TBC",
    image: "/E-Image.jpg",
    description: `TBC`,
    isExhibition: true,
    exhibitionInfo: "The exhibition is open to the general public throughout the festival",
  },
};

export default function EventsDetails() {
  const { id } = useParams();
  const event = eventsData[id as keyof typeof eventsData];

  if (!event) {
    return (
      <div className="min-h-screen bg-[#111] py-16 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Event not found</h1>
          <Link
            to="/events"
            className="text-purple-400 hover:text-purple-300 inline-flex items-center"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Events
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#111] pt-12">
      {/* Navigation */}
      <div className="max-w-6xl mx-auto px-4 mb-6">
        <Link
          to="/events"
          className="inline-flex items-center text-[#37B5FF] hover:text-purple-300 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Events
        </Link>
      </div>

      {/* Hero Section with Title and Image */}
      <div className="relative mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E0B36]/90 to-transparent z-10"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-20">
          <div className="flex flex-col md:flex-row items-center md:items-start py-16">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
                {event.title}
              </h1>

              {!event.isExhibition && (
                <div className="grid grid-cols-1 mb-6">
                  <div className="bg-[#1a1a1a] p-4 rounded-lg border-l-4 border-[#37B5FF]">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-[#37B5FF] mr-3" />
                      <div>
                        <div className="text-gray-400 text-sm">Duration</div>
                        <div className="text-white font-medium">
                          {event.duration}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {event.isExhibition && event.exhibitionInfo && (
                <div className="bg-[#1a1a1a] p-4 rounded-lg border-l-4 border-[#37B5FF] mb-6">
                  <div className="flex items-center">
                    <Info className="h-5 w-5 text-[#37B5FF] mr-3 mt-0.5 flex-shrink-0" />
                    <div className="text-white">
                      {event.exhibitionInfo}
                    </div>
                  </div>
                </div>
              )}

              {event.disclaimer && !event.isExhibition && (
                <div className="bg-[#1a1a1a] p-4 rounded-lg border-l-4 border-red-500 mt-4">
                  <div className="flex items-center">
                    <AlertTriangle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-gray-400 text-sm">Disclaimer</div>
                      <div className="text-white">{event.disclaimer}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <img
            src={event.image}
            alt=""
            className="w-full h-full object-cover opacity-15 blur-xl grayscale"
          />
        </div>
      </div>

      {/* Description Section */}
      <div className="max-w-4xl mx-auto px-4 mb-16">
        <div className="bg-[#1a1a1a] rounded-xl p-8 shadow-lg">
          <div className="prose prose-lg prose-invert max-w-none">
            {event.description.split("\n\n").map((paragraph, index) => {
              // Check if paragraph starts with markdown heading syntax
              if (paragraph.startsWith("##") && !paragraph.startsWith("###")) {
                // Main title (h2)
                return (
                  <h2 key={index} className="text-2xl font-bold text-white mb-6 text-center">
                    {paragraph.replace(/^##/, '')}
                  </h2>
                );
              } else if (paragraph.startsWith("###")) {
                // Subheading (h3)
                return (
                  <h3 key={index} className="text-xl font-bold text-white mt-8 mb-4 border-b border-gray-700 pb-1 text-center">
                    {paragraph.replace(/^###/, '')}
                  </h3>
                );
              } else if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                // Bold paragraph
                return (
                  <p key={index} className="text-gray-300 text-lg leading-relaxed mb-4 font-bold">
                    {paragraph.replace(/^\*\*|\*\*$/g, '')}
                  </p>
                );
              }
              return (
                <p key={index} className="text-gray-300 text-lg leading-relaxed mb-4">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </div>
      </div>

      {/* Additional Images for No Name. No Past Event */}
      {event.id === "no-name-no-past" && (
        <div className="max-w-6xl mx-auto px-4 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
              <img
                src="/No-Name-No-Past-Main-photo-2.jpg"
                alt="No Name. No Past - Image 1"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
              <img
                src="/No-Name-No-Past-Main-photo.jpg"
                alt="No Name. No Past - Image 2"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      )}

      {/* Call to action */}
      <div
        className="bg-gradient-to-r from-[#1E0B36] to-[#37B5FF]/20 py-16"
        id="book-now"
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Experience {event.title}?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Don't miss this unique performance at the Pause & Play Festival.
          </p>
          <a
            href="https://www.eventbrite.com/e/pause-play-festival-tickets-1249939425469?aff=oddtdtcreator"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#EEC60D] text-[#1E0B36] font-bold px-8 py-4 rounded-lg text-lg hover:bg-[#f5d02e] transition-colors inline-block"
          >
            Reserve Your Spot
          </a>
        </div>
      </div>
    </div>
  );
}
