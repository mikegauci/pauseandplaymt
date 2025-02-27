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
  },
  'alex-weenink': {
    name: 'Alex Weenink',
    role: 'Workshop Facilitator',
    image: '/Alex-Weenink-1.jpg',
    bio: `Alex Weenink is a dynamic Workshop Facilitator who brings creativity and innovation to every session. With a background in interactive theatre and educational programming, Alex specializes in creating engaging and transformative workshop experiences.

Alex has developed numerous successful workshop programs that blend traditional theatre techniques with contemporary approaches. Their work focuses on making theatre accessible and engaging for participants of all backgrounds and experience levels.

As Workshop Facilitator for Festival 2024, Alex designs and leads interactive sessions that encourage participants to explore their creativity and develop new skills. Their workshops are known for their inclusive approach and ability to bring out the best in participants.

Alex's commitment to arts education and community engagement has made them a valuable member of the festival team, helping to bridge the gap between performers and audiences through hands-on learning experiences.`,
    achievements: [
      'Developed innovative workshop programs for diverse audiences',
      'Led over 100 successful theatre workshops',
      'Created inclusive theatre education programs',
      'Received Excellence in Arts Education Award'
    ],
    productions: [
      'Interactive Theatre Workshop Series (2023)',
      'Community Theatre Development Program (2022)',
      'Youth Theatre Initiative (2021)'
    ]
  },
  'charlene-galea': {
    name: 'Charlene Galea',
    role: 'Technical Director',
    image: '/Charlene-Galea-1.jpg',
    bio: `Charlene Galea is an accomplished Technical Director with extensive experience in theatre production and technical management. Her expertise spans lighting design, sound engineering, and stage management.

With a background in both traditional and contemporary theatre technologies, Charlene ensures that each production meets the highest technical standards while supporting artistic vision.

As Technical Director for Festival 2024, Charlene oversees all technical aspects of productions, from initial planning to final execution. Her innovative approaches to technical challenges have helped create some of the festival's most memorable performances.

Charlene's dedication to excellence and ability to solve complex technical challenges makes her an invaluable member of the festival team.`,
    achievements: [
      'Led technical direction for major international productions',
      'Implemented innovative stage technologies',
      'Developed sustainable technical practices',
      'Excellence in Technical Theatre Award'
    ],
    productions: [
      'International Theatre Festival (2023)',
      'Modern Dance Technical Production (2022)',
      'Experimental Theatre Series (2021)'
    ]
  },
  'emily-salnitro': {
    name: 'Emily Salnitro',
    role: 'Community Liaison',
    image: '/Emily-Salnitro.jpg-1.jpg',
    bio: `Emily Salnitro serves as the vital link between the festival and the local community. With a background in community arts and cultural programming, Emily excels at creating meaningful connections between artists and audiences.

Her work focuses on developing partnerships with local organizations, schools, and community groups to ensure the festival remains accessible and relevant to diverse audiences.

As Community Liaison for Festival 2024, Emily coordinates outreach programs and develops initiatives that bring theatre into the community. Her work has been instrumental in expanding the festival's reach and impact.

Emily's passion for community engagement and ability to build lasting relationships has helped create a more inclusive and welcoming festival environment.`,
    achievements: [
      'Established successful community partnership programs',
      'Increased community participation by 200%',
      'Developed youth engagement initiatives',
      'Community Arts Leadership Award'
    ],
    productions: [
      'Community Arts Festival (2023)',
      'Neighborhood Theatre Program (2022)',
      'Schools Outreach Initiative (2021)'
    ]
  },
  'rebecca-grech-1': {
    name: 'Rebecca Grech',
    role: 'Production Assistant',
    image: '/Rebecca-Grech-1.jpg',
    bio: `Rebecca Grech brings efficiency and organization to her role as Production Assistant. Her attention to detail and strong organizational skills ensure smooth operations across all festival productions.

Working closely with the production team, Rebecca coordinates various aspects of show preparation and execution, from rehearsal scheduling to performance support.

Her role is crucial in maintaining communication between different departments and ensuring all production elements come together seamlessly.`,
    achievements: [
      'Coordinated multiple successful production runs',
      'Streamlined production processes',
      'Developed efficient scheduling systems',
      'Excellence in Production Support Award'
    ],
    productions: [
      'Main Stage Productions (2023)',
      'Festival Workshop Series (2022)',
      'Youth Theatre Program (2021)'
    ]
  },
  'rebecca-grech-2': {
    name: 'Rebecca Grech',
    role: 'Stage Manager',
    image: '/Rebecca-Grech-11.jpg',
    bio: `As Stage Manager, Rebecca Grech demonstrates exceptional leadership in coordinating all aspects of stage productions. Her expertise in stage management ensures flawless execution of performances.

With a keen eye for detail and strong communication skills, Rebecca maintains high standards of production quality while managing complex technical requirements.

Her ability to handle multiple tasks under pressure and coordinate various production elements makes her an essential part of the festival team.`,
    achievements: [
      'Managed over 50 successful stage productions',
      'Implemented innovative stage management systems',
      'Excellence in Stage Management Award',
      'Led multiple international productions'
    ],
    productions: [
      'International Theatre Festival (2023)',
      'Contemporary Dance Series (2022)',
      'Classical Theatre Productions (2021)'
    ]
  },
  'rebecca-grech-3': {
    name: 'Rebecca Grech',
    role: 'Event Coordinator',
    image: '/Rebecca-Grech-111.jpg',
    bio: `Rebecca Grech excels in her role as Event Coordinator, bringing creativity and precision to festival event planning and execution. Her expertise in event management ensures memorable experiences for all attendees.

She oversees the planning and coordination of various festival events, from opening ceremonies to special performances and workshops.

Rebecca's ability to anticipate needs and solve problems quickly has made her invaluable to the festival's success.`,
    achievements: [
      'Coordinated major festival events',
      'Developed innovative event concepts',
      'Increased event attendance by 150%',
      'Event Management Excellence Award'
    ],
    productions: [
      'Festival Opening Gala (2023)',
      'Special Performance Series (2022)',
      'Community Events Program (2021)'
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