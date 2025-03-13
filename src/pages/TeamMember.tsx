import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const teamMembersData = {
  "sarah-johnson": {
    name: "Sarah Johnson",
    role: "Festival Director",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    bio: `Sarah Johnson brings over 15 years of experience in theatre production and arts management to her role as Festival Director. Her journey in the performing arts began at the Royal Academy of Dramatic Art, where she honed her understanding of theatrical craft and production.

Throughout her career, Sarah has directed major arts festivals across Europe, including the Edinburgh Fringe Festival and the Amsterdam Theatre Festival. Her innovative approach to festival curation has earned her numerous accolades, including the Arts Council Award for Excellence in Festival Management.

Sarah's vision for Festival 2024 is to create a platform that celebrates both traditional theatrical forms and cutting-edge performances, while making the arts accessible to diverse audiences. Under her leadership, the festival has expanded its community outreach programs and established partnerships with leading international theatre companies.

In addition to her role as Festival Director, Sarah is a frequent speaker at arts management conferences and has published several articles on the future of performing arts festivals in a digital age.`,
  },
  "michael-chen": {
    name: "Michael Chen",
    role: "Creative Director",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    bio: `Michael Chen is an award-winning theatre director whose innovative productions have captivated audiences worldwide. After graduating from the Yale School of Drama, Michael began his career as an assistant director at the Public Theater in New York.

His unique approach to storytelling combines traditional theatrical elements with modern technology and immersive experiences. Michael's productions are known for breaking conventional boundaries and creating meaningful connections with audiences.

As Creative Director of Festival 2024, Michael oversees the artistic vision of the festival, curating a program that pushes creative boundaries while honoring theatrical traditions. His commitment to nurturing emerging talent has led to the creation of several development programs within the festival.

Michael's work has been recognized with multiple awards, including the Regional Theatre Tony Award and the Drama Desk Award for Outstanding Direction.`,
  },
  "elena-rodriguez": {
    name: "Elena Rodriguez",
    role: "Production Manager",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
    bio: `Elena Rodriguez is a seasoned production manager with a remarkable track record in executing complex theatrical productions. With a background in both technical theatre and project management, Elena brings a unique combination of creative understanding and organizational expertise to her role.

Elena's career began in Madrid's prestigious Teatro Real, where she worked her way up from stage crew to assistant production manager. Her international experience includes work with the Royal Shakespeare Company and the Sydney Theatre Company.

As Production Manager for Festival 2024, Elena oversees all technical aspects of production, ensuring seamless execution of performances across multiple venues. Her innovative approaches to production challenges have resulted in more efficient and sustainable theatre practices.

Elena is also passionate about mentoring the next generation of theatre technicians and regularly conducts workshops on production management.`,
  },
  "alex-weenink": {
    name: "Alex Weenink",
    role: "Performer",
    image: "/Alex-Weenink-1.jpg",
    bio: `I am a multidisciplinary artist, exploring the intersections between artistic mediums and contexts while investigating themes of expression, emotion, identity, and communication. With a prominent background and career as a theatre-maker, I am curious about how live performance, written text, and spoken word can engage with visual, musical, and interactive mediums such as drawing, song, and conversation. I'm also the Artistic Director of Chewing Productions - a platform for original and innovative theatrical work with a focus on twenty-first-century forms and realities. Its portfolio includes ensemble-driven plays, collections of new writing, site-specific 'performance parties', creative development workshops, and open-mic nights.`,
  },
  "charlene-galea": {
    name: "Charlene Galea",
    role: "Performer",
    image: "/Charlene-Galea-1.jpg",
    bio: `Charlene Galea is a dynamic multidisciplinary artist whose performances uniquely blend body, identity, and contemporary experiences. With a profound sensitivity to space, sound, and movement, she transforms her body into a vessel for storytelling, exploring themes like the contrast between online personas and physical realities. Through her performances, she boldly confronts societal restrictions, challenging traditional views of the body, particularly for women and artists. Her politically charged work, often infused with humour, invites deeper engagement. Charlene's diverse education and commitment to artistic freedom foster intimate connections with audiences, whether in live performances or on social media platforms.`
  },
  "emily-salnitro": {
    name: "Emily Salnitro",
    role: "Performer",
    image: "/Emily-Salnitro-1.jpg",
    bio: `I've been creating art since childhood, drawn to abstract, vibrant, and dreamlike expressions inspired by my thoughts, nature, and music. While primarily a visual artist, my background in Performing Arts education deepens my appreciation for the intersection of art forms. I hold a Bachelor's in Fine Art and am pursuing a Master's in Teaching and Learning Art to share my passion with students. Though trained in various mediums, I feel most connected to mixed media, where layers communicate emotion. Abstraction, to me, invites reflection—asking viewers to pause and consider: How does this make me feel? Why?`
    },
  "nicole-zammit": {
    name: "Nicole Zammit",
    role: "Performer",
    image: "/Nicole-Zammit-1.jpg",
    bio: `Nicole is a freelance contemporary dance artist from Malta with a passion for performance and choreography. She began training in Latin American and contemporary dance and she graduated with a Bachelor in Dance Studies (Honours). She has trained internationally, performed in various choreographies, and worked with renowned choreographers. During her degree, Nicole had the opportunity to participate in a dance tour in Malta and Budapest in 2023/24. In addition, she choreographed her own work in Malta which was premiered in Valletta Campus Theatre. Later, Nicole restages her choreographed piece for the Prague New Generation Dance Festival 2024. Nicole teaches dance, aerial, and facilitates dance sessions`},
  "rebecca-grech": {
    name: "Rebecca Grech",
    role: "Performer",
    image: "/Rebecca-Grech-1.jpg",
    bio: `Rebecca Grech is a versatile performer with extensive experience as a dancer, singer, and actress, contributing to various productions on and off stage. She began ballet at age 5 at The School of Dance tutored by Ms Joanna Vella and explored contemporary dance in 2022 at Nova Studios, expanding into Jazz, and Commercial Hip-Hop. Her recent participation includes Dance Festival Malta Community Project - Urban Symphonies, and Affinity (Dis)connection UM dance project. Graduating with a Bachelor's degree in Performing Arts, her thesis integrated Yoga with Contemporary Dance to depict the Five Earth Elements. Her research culminated in her performance - Prana at the ICA Festival in 2024.`
  },
  "edmilson-zammit": {
    name: "Edmilson Zammit",
    role: "Performer",
    image: "/Edmilson-Zammit-1.jpg",
    bio: `Edmilson is a dynamic performing arts student at MCAST, specializing in dance and design elements. His creative journey weaves together a holistic approach to movement, blending the worlds of ritualistic clowning, light design, and therapeutic practices. With a passion for pushing artistic boundaries, Edmilson explores dance as a transformative medium that connects body, space, and emotion. for dementia people.`,
  },
  "malcolm-micallef": {
    name: "Edmilson Zammit",
    role: "Performer",
    image: "/Edmilson-Zammit-1.jpg",
    bio: `I'm an artist that likes to create pieces that involve the self. My inspiration comes from existential philosophy and touches upon the absurd.I like to create and idea-generate concepts for theatre, film, and any other artistic medium.`,
  },
  "benjamin-abela": {
    name: "Benjamin Abela",
    role: "Performer",
    image: "/Benjamin-Abela-1.jpg",
    bio: `Over the years, Benjamin has participated in countless productions and, subsequently, played dozens of different roles. These include Pete in 'Dear Pete', Lamb in 'Is-Serra', Max in 'Ineż Kienet Perfetta', David in 'Il-Pożittivi', Grillu in 'Il-Giddieb Għomru Twil', and David in 'Id-Dnub tal-Magħżulin'. Benjamin's role within the local theatre industry goes beyond that of an actor. Over the years, he has written and co-written a number of scripts, such as 'NOSTRUM', 'Popolazzjoni: 4', '90 SEKONDA', 'Pandora', 'L-Aħħar Siġra', 'Help! Barbetti go Bohemian!', and 'iLand'. In 2017, Benjamin co- founded the Ħassle Mejjet Theatre Collective with Gianluca Mifsud and Brendon Thearle..`,
  },
};

export default function TeamMember() {
  const { id } = useParams();
  const member = teamMembersData[id as keyof typeof teamMembersData];

  if (!member) {
    return <div>Member not found</div>;
  }

  return (
    <div className="min-h-screen bg-[#111] py-16">
      <div className="max-w-6xl mx-auto px-4">
        <Link
          to="/team"
          className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Team
        </Link>

        {/* Hero Section with Title and Image */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <div className="md:max-w-[60%]">
            <h1 className="text-6xl font-bold text-white mb-4">
              {member.name}
            </h1>
            <h2 className="text-2xl text-purple-400">{member.role}</h2>
          </div>

          <div className="mt-8 md:mt-0">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-purple-400">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="prose prose-lg prose-invert max-w-none">
          {member.bio.split("\n\n").map((paragraph, index) => (
            <p
              key={index}
              className="text-gray-300 mb-6 text-lg leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
