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
    color: 'bg-[#EEC60D]'
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
    id: 'alex-weenink',
    name: 'Alex Weenink',
    image: '/Alex-Weenink-1.jpg',
    role: 'Performer',
    color: 'bg-purple-500',
    shortBio: 'Workshop Facilitator bringing creative experiences to life.'
  },
  {
    id: 'rebecca-greca',
    name: 'Rebecca Grech',
    image: '/Rebecca-Grech-1.jpg',
    role: 'Performer',
    color: 'bg-[#EEC60D]',
    shortBio: 'Stage Manager coordinating performances with precision.'
  },
  {
    id: 'edmilson-zammit',
    name: 'Edmilson Zammit',
    image: '/Edmilson-Zammit-1.jpg',
    role: 'Performer',
    color: 'bg-amber-500',
    shortBio: 'Event Coordinator orchestrating memorable festival experiences.'
  },
  {
    id: 'charlene-galea',
    name: 'Charlene Galea',
    image: '/Charlene-Galea-1.jpg',
    role: 'Performer',
    color: 'bg-[#EEC60D]',
    shortBio: 'Technical Director ensuring seamless production execution.'
  },
  {
    id: 'malcolm-micallef',
    name: 'Malcolm Micallef',
    image: '/Malcolm-Micallef-1.jpg',
    role: 'Performer',
    color: 'bg-[#EEC60D]',
    shortBio: 'Technical Director ensuring seamless production execution.'
  },
  {
    id: 'emily-salnitro',
    name: 'Emily Salnitro',
    image: '/Emily-Salnitro-1.jpg',
    role: 'Performer',
    color: 'bg-amber-500',
    shortBio: 'Community Liaison building bridges between artists and audiences.'
  },
  {
    id: 'nicole-zammit',
    name: 'Nicole Zammit',
    image: '/Nicole-Zammit-1.jpg',
    role: 'Performer',
    color: 'bg-purple-500',
    shortBio: 'Production Assistant supporting all aspects of festival operations.'
  },
  {
    id: 'benjamin-abela',
    name: 'Benjamin Abela',
    image: '/Benjamin-Abela-1.jpg',
    role: 'Performer',
    color: 'bg-amber-500',
    shortBio: 'Community Liaison building bridges between artists and audiences.'
  }
];

export default function Team() {
  return (
    <div className="min-h-screen bg-[#111] py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <div className="bg-[#EEC60D] inline-block px-4 py-1 mb-8">
          <h1 className="text-gray-900 font-bold">Our Team</h1>
        </div>

        <h2 className="text-[#37B5FF] text-5xl font-bold mb-8">
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
                <h3 className={`text-2xl font-bold mb-2 ${member.color === 'bg-[#EEC60D]' ? 'text-[#1E0B36]' : 'text-white'}`}>
                  {member.name}
                </h3>
                <p className={member.color === 'bg-[#EEC60D]' ? 'text-[#1E0B36]/90' : 'text-white/90'}>
                  {member.role}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Festival Collaborators Section */}
        <h2 className="text-white text-4xl font-bold text-center mb-12">Festival Collaborators</h2>
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
                <h3 className={`text-2xl font-bold mb-2 ${collaborator.color === 'bg-[#EEC60D]' ? 'text-[#1E0B36]' : 'text-white'}`}>
                  {collaborator.name}
                </h3>
                <p className={collaborator.color === 'bg-[#EEC60D]' ? 'text-[#1E0B36]/90' : 'text-white/90'}>
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