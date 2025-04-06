import { Link } from "react-router-dom";
import SEO from "../components/SEO";
const teamMembers = [
  {
    id: "angelique-attard",
    name: "Angelique Attard",
    image: "/Angelique-1.jpg",
    color: "bg-[#37b5ff]",
  },
  {
    id: "brendon-joseph-thearle",
    name: "Brendon Joseph Thearle",
    image: "/Brendon-1.jpg",
    color: "bg-[#37b5ff]",
  },
  {
    id: "monique-alexandra-falzon",
    name: "Monique Alexandra Falzon",
    image: "/Monique-1.jpg",
    color: "bg-[#37b5ff]",
  },
];

const festivalCollaborators = [
  // Performers
  {
    id: "alex-weenink",
    name: "Alex Weenink",
    image: "/Alex-Weenink-1.jpg",
    role: "Performer",
    color: "bg-[#EEC60D]",
    shortBio: "Workshop Facilitator bringing creative experiences to life.",
  },
  {
    id: "rebecca-grech",
    name: "Rebecca Grech",
    image: "/Rebecca-Grech-1.jpg",
    role: "Performer",
    color: "bg-[#EEC60D]",
    shortBio: "Stage Manager coordinating performances with precision.",
  },
  {
    id: "edmilson-zammit",
    name: "Edmilson Zammit",
    image: "/Edmilson-Zammit-1.jpg",
    role: "Performer",
    color: "bg-[#EEC60D]",
    shortBio: "Event Coordinator orchestrating memorable festival experiences.",
  },
  {
    id: "charlene-galea",
    name: "Charlene Galea",
    image: "/Charlene-Galea-1.jpg",
    role: "Performer",
    color: "bg-[#EEC60D]",
    shortBio: "Technical Director ensuring seamless production execution.",
  },
  {
    id: "malcolm-micallef",
    name: "Malcolm Micallef",
    image: "/Malcolm-Micallef-1.jpg",
    role: "Performer",
    color: "bg-[#EEC60D]",
    shortBio: "Technical Director ensuring seamless production execution.",
  },
  {
    id: "nicole-zammit",
    name: "Nicole Zammit",
    image: "/Nicole-Zammit-1.jpg",
    role: "Performer",
    color: "bg-[#EEC60D]",
    shortBio:
      "Production Assistant supporting all aspects of festival operations.",
  },
  {
    id: "benjamin-abela",
    name: "Benjamin Abela",
    image: "/Benjamin-Abela-1.jpg",
    role: "Performer",
    color: "bg-[#EEC60D]",
    shortBio:
      "Community Liaison building bridges between artists and audiences.",
  },
  {
    id: "sarah-fofana",
    name: "Sarah Fofana",
    image: "/Sarah-Fofana.jpg",
    role: "Performer",
    color: "bg-[#EEC60D]",
  },
  {
    id: "alice-bertolasi",
    name: "Alice Bertolasi",
    image: "/Alice-Bertolasi.jpg",
    role: "Performer",
    color: "bg-[#EEC60D]",
  },
  {
    id: "giorgia-ionescu",
    name: "Giorgia Ionescu",
    image: "/Giorgia-Ionescu-1.jpg",
    role: "Performer",
    color: "bg-[#EEC60D]",
  },
  {
    id: "anna-issajeva",
    name: "Anna Issajeva",
    image: "/Anna-Issajeva.jpg",
    role: "Performer",
    color: "bg-[#EEC60D]",
  },
  {
    id: "faye-mifsud-midolo",
    name: "Faye Mifsud Midolo",
    image: "/Faye-Mifsud-Midolo.jpg",
    role: "Performer",
    color: "bg-[#EEC60D]",
  },
  // {
  //   id: "d-shows",
  //   name: "D Shows",
  //   image: "/D-Shows.jpg",
  //   role: "Performers",
  //   color: "bg-[#EEC60D]",
  // },
  {
    id: "starcroseed",
    name: "Starcroseed",
    image: "/starcrossed-2.jpg",
    role: "Musicians",
    color: "bg-teal-500",
  },
  // Artists
  {
    id: "emily-salnitro",
    name: "Emily Salnitro",
    image: "/Emily-Salnitro-1.jpg",
    role: "Artist",
    color: "bg-amber-500",
    shortBio:
      "Community Liaison building bridges between artists and audiences.",
  },
  {
    id: "elena-marie-sciberras",
    name: "Elena Marie Sciberras",
    image: "/Elena-Marie-Sciberras-1.jpg",
    role: "Artist",
    color: "bg-amber-500",
    shortBio:
      "Community Liaison building bridges between artists and audiences.",
  },
  {
    id: "lara-vella",
    name: "Lara Vella",
    image: "/Lara-Vella.jpg",
    role: "Artist",
    color: "bg-amber-500",
  },

  // Drag artists
  {
    id: "kiki-valentine",
    name: "Kiki Valentine",
    image: "/Kiki-Valentine.jpg",
    role: "Drag Artist",
    color: "bg-purple-500",
  },
  {
    id: "celeste-samodiva",
    name: "Celeste Samodiva",
    image: "/Celeste-Samodiva.jpg",
    role: "Drag Artist",
    color: "bg-purple-500",
  },
  {
    id: "ben-n-syder",
    name: "Ben N. Syder",
    image: "/ben-n-syder-1.jpg",
    role: "Drag Artist",
    color: "bg-purple-500",
  },
];
export default function Team() {
  return (
    <div className="min-h-screen bg-[#111] py-16">
      <SEO
        title="Meet the Festival Team"
        description="Meet the creative minds behind Pause & Play Festival - from our core student organizers to performers, artists, and drag performers. Discover the diverse team making Malta's innovative performing arts festival possible."
        canonical="https://pauseandplay.mt/team"
      />
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <div className="bg-[#EEC60D] inline-block px-4 py-1 mb-8">
          <h1 className="text-gray-900 font-bold">Our Team</h1>
        </div>

        <h2 className="text-[#37B5FF] text-2xl md:text-5xl font-bold mb-8">
          Learn about the people behind this festival
        </h2>

        {/* Mission Statement */}
        <div className="text-white space-y-6 mb-20">
          <p>
            Behind the scenes of the Pause & Play festival, are Brendon,
            Monique, and Angelique - three students who are currently in their
            third and final year of the Bachelor in Theatre (Honours) degree at
            the School of Performing Arts within the University of Malta. This
            festival is a part of their final year project and through this,
            they want to create a space to pause, reflect, and ultimately
            connect people and young artists together in order to celebrate
            creativity.
          </p>
        </div>

        {/* Core Team Section */}
        <h2 className="text-white text-4xl font-bold text-center mb-12">
          The Festival Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {teamMembers.map((member) => (
            <Link
              key={member.id}
              to={`/team/${member.id}`}
              className="rounded-lg overflow-hidden block transition-transform hover:scale-105"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full aspect-square object-cover"
              />
              <div className={`${member.color} p-6`}>
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    member.color === "bg-[#EEC60D]"
                      ? "text-[#1E0B36]"
                      : "text-white"
                  }`}
                >
                  {member.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Festival Collaborators Section */}
        <h2 className="text-white text-4xl font-bold text-center mb-12">
          Festival Collaborators
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-[420px]:grid-cols-1">
          {festivalCollaborators.map((collaborator) => (
            <Link
              key={collaborator.id}
              to={`/team/${collaborator.id}`}
              className="rounded-lg overflow-hidden block transition-transform hover:scale-105"
            >
              <img
                src={collaborator.image}
                alt={collaborator.name}
                className="w-full aspect-square object-cover"
              />
              <div className={`${collaborator.color} p-6`}>
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    collaborator.color === "bg-[#EEC60D]"
                      ? "text-[#1E0B36]"
                      : "text-white"
                  }`}
                >
                  {collaborator.name}
                </h3>
                <p
                  className={
                    collaborator.color === "bg-[#EEC60D]"
                      ? "text-[#1E0B36]/90"
                      : "text-white/90"
                  }
                >
                  {collaborator.role}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
