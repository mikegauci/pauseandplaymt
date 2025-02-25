import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const teamMembersData = {
  'sarah-johnson': {
    name: 'Sarah Johnson',
    role: 'Festival Director',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    bio: `Sarah Johnson brings over 15 years of experience in theatre production and arts management to her role as Festival Director. Her journey in the performing arts began at the Royal Academy of Dramatic Art, where she honed her understanding of theatrical craft and production.

Throughout her career, Sarah has directed major arts festivals across Europe, including the Edinburgh Fringe Festival and the Amsterdam Theatre Festival. Her innovative approach to festival curation has earned her numerous accolades, including the Arts Council Award for Excellence in Festival Management.

Sarah's vision for Festival 2024 is to create a platform that celebrates both traditional theatrical forms and cutting-edge performances, while making the arts accessible to diverse audiences. Under her leadership, the festival has expanded its community outreach programs and established partnerships with leading international theatre companies.

In addition to her role as Festival Director, Sarah is a frequent speaker at arts management conferences and has published several articles on the future of performing arts festivals in a digital age.`,
    achievements: [
      'Arts Council Award for Excellence in Festival Management (2022)',
      'Successfully directed 5 major European theatre festivals',
      'Established innovative community outreach programs',
      'Published thought leader in arts management'
    ],
    productions: [
      'Edinburgh Fringe Festival (2019-2021)',
      'Amsterdam Theatre Festival (2017-2018)',
      'London Contemporary Theatre Series (2015-2016)'
    ]
  },
  'michael-chen': {
    name: 'Michael Chen',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    bio: `Michael Chen is an award-winning theatre director whose innovative productions have captivated audiences worldwide. After graduating from the Yale School of Drama, Michael began his career as an assistant director at the Public Theater in New York.

His unique approach to storytelling combines traditional theatrical elements with modern technology and immersive experiences. Michael's productions are known for breaking conventional boundaries and creating meaningful connections with audiences.

As Creative Director of Festival 2024, Michael oversees the artistic vision of the festival, curating a program that pushes creative boundaries while honoring theatrical traditions. His commitment to nurturing emerging talent has led to the creation of several development programs within the festival.

Michael's work has been recognized with multiple awards, including the Regional Theatre Tony Award and the Drama Desk Award for Outstanding Direction.`,
    achievements: [
      'Regional Theatre Tony Award',
      'Drama Desk Award for Outstanding Direction',
      'Innovative use of technology in theatrical productions',
      'Mentor to emerging theatre directors'
    ],
    productions: [
      'Hamlet (2023) - Modern reimagining',
      'The Glass Menagerie (2022)',
      'Original production: "Digital Dreams" (2021)'
    ]
  },
  'elena-rodriguez': {
    name: 'Elena Rodriguez',
    role: 'Production Manager',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
    bio: `Elena Rodriguez is a seasoned production manager with a remarkable track record in executing complex theatrical productions. With a background in both technical theatre and project management, Elena brings a unique combination of creative understanding and organizational expertise to her role.

Elena's career began in Madrid's prestigious Teatro Real, where she worked her way up from stage crew to assistant production manager. Her international experience includes work with the Royal Shakespeare Company and the Sydney Theatre Company.

As Production Manager for Festival 2024, Elena oversees all technical aspects of production, ensuring seamless execution of performances across multiple venues. Her innovative approaches to production challenges have resulted in more efficient and sustainable theatre practices.

Elena is also passionate about mentoring the next generation of theatre technicians and regularly conducts workshops on production management.`,
    achievements: [
      'Technical Innovation Award - Theatre Production Guild',
      'Developed sustainable production practices',
      'Successfully managed 100+ international productions',
      'Mentor in Theatre Technical Training Program'
    ],
    productions: [
      'Royal Shakespeare Company World Tour (2022)',
      'Sydney Theatre Company Season (2021)',
      'Teatro Real Opera Season (2019-2020)'
    ]
  }
};

export default function TeamMember() {
  const { id } = useParams();
  const member = teamMembersData[id as keyof typeof teamMembersData];

  if (!member) {
    return <div>Member not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 py-16">
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
            <h2 className="text-2xl text-purple-400">
              {member.role}
            </h2>
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
          {member.bio.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-gray-300 mb-6 text-lg leading-relaxed">
              {paragraph}
            </p>
          ))}

          {/* Achievements Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-white mb-6">Key Achievements</h2>
            <ul className="list-disc list-inside space-y-3 text-gray-300">
              {member.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>

          {/* Productions Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-white mb-6">Notable Productions</h2>
            <ul className="list-disc list-inside space-y-3 text-gray-300">
              {member.productions.map((production, index) => (
                <li key={index}>{production}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}