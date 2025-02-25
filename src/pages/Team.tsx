import { Link } from 'react-router-dom';

const teamMembers = [
  {
    id: 'sarah-johnson',
    name: 'Sarah Johnson',
    role: 'Festival Director',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    shortBio: 'Festival Director, with over 15 years of experience in theatre production and arts management.',
    color: 'bg-purple-500'
  },
  {
    id: 'michael-chen',
    name: 'Michael Chen',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    shortBio: 'Award-winning theatre director whose productions have been featured worldwide.',
    color: 'bg-[#CCFF33]'
  },
  {
    id: 'elena-rodriguez',
    name: 'Elena Rodriguez',
    role: 'Production Manager',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
    shortBio: 'Production manager with extensive experience in leading theatre companies.',
    color: 'bg-amber-500'
  }
];

const festivalCollaborators = [
  {
    name: 'Emma Thompson',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80',
    role: 'Workshop Facilitator'
  },
  {
    name: 'James Wilson',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
    role: 'Technical Director'
  },
  {
    name: 'Maria Garcia',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80',
    role: 'Community Liaison'
  }
];

export default function Team() {
  return (
    <div className="min-h-screen bg-gray-900 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <div className="bg-[#CCFF33] inline-block px-4 py-1 mb-8">
          <h1 className="text-gray-900 font-bold">Our Team</h1>
        </div>

        <h2 className="text-[#FF6B4E] text-5xl font-bold mb-8">
          Learn about the people behind this festival
        </h2>

        {/* Mission Statement */}
        <div className="text-white space-y-6 mb-20">
          <p>
            Behind the scenes of the Frome Festival, is an international team of dedicated artists who 
            strive to create a fresh and exciting event every year, one that resonates with people from 
            all walks of life. A festival that is sensitive to the challenges we all face and that inspires 
            all of us to make the changes we need to overcome these challenges.
          </p>
          <p>
            We unfortunately don't have a magic wand to conjure up the festival. What we do have is an 
            incredible team of creative thinkers and problem solvers, working tirelessly to bring you 
            the best possible experience.
          </p>
        </div>

        {/* Core Team Section */}
        <h2 className="text-white text-4xl font-bold text-center mb-12">The Core Team</h2>
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
                <h3 className={`text-2xl font-bold mb-2 ${member.color === 'bg-[#CCFF33]' ? 'text-[#1E0B36]' : 'text-white'}`}>
                  {member.name}
                </h3>
                <p className={member.color === 'bg-[#CCFF33]' ? 'text-[#1E0B36]/90' : 'text-white/90'}>
                  {member.role}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Festival Collaborators Section */}
        <h2 className="text-white text-4xl font-bold text-center mb-12">Festival Collaborators</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {festivalCollaborators.map((collaborator) => (
            <div 
              key={collaborator.name}
              className="rounded-lg overflow-hidden"
            >
              <img 
                src={collaborator.image}
                alt={collaborator.name}
                className="w-full aspect-square object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}