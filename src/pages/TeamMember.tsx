import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SEO from "../components/SEO";

interface TeamMember {
  name: string;
  image: string;
  bio: string;
  role?: string;
  credit?: string;
  color: string;
}

const teamMembersData: Record<string, TeamMember> = {
  "brendon-joseph-thearle": {
    name: "Brendon Joseph Thearle",
    image: "/Brendon-1.jpg",
    credit: "Photo Credit: Mike Paris",
    color: "bg-[#37b5ff]",
    bio: `Brendon entered the world of theatre at the age of five and since then has performed in various productions such as; MADC's traditional Shakespeare classics; The Merry Wives of Windsor (2022) as Frank Ford, as Mr. Scruples in Manoel Theatre's opera for 2019's ŻiguŻajg in The Impresario (2019), as Captain Barbuljatu in FM Theatre Productions' Christmas pantomime; The Little Mermaid - The Panto Under the Sea (2019), as Gary in MADC's A Kick in the Baubles (2022), as Jeremy in Ħassle Mejjet Theatre Collective's Popolazzjoni: 4 (2023), as Dame Widow Twankey in Teatru Manoel's Learning & Participation Programme: TOI TOI's The Great Little Panto Show (2023, 2024), and in MADC's The Coarse Acting Show (2025), among many others. He has also delved into the directorial seat with such projects as Pandora (2019), L-Aħħar Siġra (2021), The Fourth Wall (2022) for MADC's One Act Play Festival in which The Fourth Wall won; Best Actor, Most Promising Actor, Best Director and Best Production and was nominated for; Most Promising Actress and most recently; Nostrum (2023). He is also currently studying for a Bachelor in Theatre (Honours) degree at the School of Performing Arts within the University of Malta.`,
  },
  "angelique-attard": {
    name: "Angelique Attard",
    image: "/Angelique-1.jpg",
    credit: "Photo Credit: Mike Paris",
    color: "bg-[#37b5ff]",
    bio: `From a very young age, Angelique has always been drawn to the performing arts, as she pursued tap dance and jazz for seven years. However, theatre and acting stole the spotlight and she decided to enrol herself for the Bachelor in Theatre (Honours) degree at the School of Performing Arts within the University of Malta. Since then, she's thrown herself into all sorts of productions, exploring new roles beyond acting — from stage management to light and sound design. Every experience has been a chance to learn, grow, and expand her skills both on and off the stage.`,
  },
  "monique-alexandra-falzon": {
    name: "Monique Alexandra Falzon",
    image: "/Monique-1.jpg",
    credit: "Photo Credit: Mike Paris",
    color: "bg-[#37b5ff]",
    bio: `Monique Alexandra Falzon has always shown a great appreciation for theatre since she was a child. Her interest peaked in secondary school when she started getting involved in her school's musical productions, from playing Cinderella's Fairy Godmother in Nugrufella, to Mr. Warbucks in Annie. Monique fell in love with the atmosphere and sense of belonging that is brought on by being on stage and from then on, decided to pursue a career in theatre. She is currently in her final year studying for a Bachelor in Theatre Studies (Honors) at the School of Performing at the University of Malta, where she wishes to continue exploring different theatrical styles and learn more about what theatre is.`,
  },
  "alex-weenink": {
    name: "Alex Weenink",
    role: "Performer",
    image: "/Alex-Weenink-1.jpg",
    color: "bg-[#EEC60D]",
    bio: `Alex is a multidisciplinary artist, exploring the intersections between artistic mediums and contexts while investigating themes of expression, emotion, identity, and communication. With a prominent background and career as a theatre-maker, he is curious about how live performance, written text, and spoken word can engage with visual, musical, and interactive mediums such as drawing, song, and conversation. He is also the Artistic Director of Chewing Productions - a platform for original and innovative theatrical work with a focus on twenty-first-century forms and realities. Its portfolio includes ensemble-driven plays, collections of new writing, site-specific 'performance parties', creative development workshops, and open-mic nights.`,
  },
  "charlene-galea": {
    name: "Charlene Galea",
    role: "Performer",
    image: "/Charlene-Galea-1.jpg",
    color: "bg-[#EEC60D]",
    bio: `Charlene Galea is a dynamic multidisciplinary artist whose performances uniquely blend body, identity, and contemporary experiences. With a profound sensitivity to space, sound, and movement, she transforms her body into a vessel for storytelling, exploring themes like the contrast between online personas and physical realities. Through her performances, she boldly confronts societal restrictions, challenging traditional views of the body, particularly for women and artists. Her politically charged work, often infused with humour, invites deeper engagement. Charlene's diverse education and commitment to artistic freedom foster intimate connections with audiences, whether in live performances or on social media platforms.`,
  },
  "emily-salnitro": {
    name: "Emily Salnitro",
    role: "Artist",
    image: "/Emily-Salnitro-1.jpg",
    color: "bg-amber-500",
    bio: `Emily has been creating art since childhood, drawn to abstract, vibrant, and dreamlike expressions inspired by her thoughts, nature, and music. While primarily a visual artist, her background in Performing Arts education deepens her appreciation for the intersection of art forms. She holds a Bachelor's in Fine Art and is pursuing a Master's in Teaching and Learning Art to share her passion with students. Though trained in various mediums, Emily feels most connected to mixed media, where layers communicate emotion. Abstraction, to her, invites reflection—asking viewers to pause and consider: How does this make me feel? Why?`,
  },
  "nicole-zammit": {
    name: "Nicole Zammit",
    role: "Performer",
    image: "/Nicole-Zammit-1.jpg",
    color: "bg-[#EEC60D]",
    bio: `Nicole is a freelance contemporary dance artist from Malta with a passion for performance and choreography. She began training in Latin American and contemporary dance and she graduated with a Bachelor in Dance Studies (Honours). She has trained internationally, performed in various choreographies, and worked with renowned choreographers. During her degree, Nicole had the opportunity to participate in a dance tour in Malta and Budapest in 2023/24. In addition, she choreographed her own work in Malta which was premiered in Valletta Campus Theatre. Later, Nicole restages her choreographed piece for the Prague New Generation Dance Festival 2024. Nicole teaches dance, aerial, and facilitates dance sessions.`,
  },
  "rebecca-grech": {
    name: "Rebecca Grech",
    role: "Performer",
    image: "/Rebecca-Grech-1.jpg",
    color: "bg-[#EEC60D]",
    bio: `Rebecca Grech is a versatile performer with extensive experience as a dancer, singer, and actress, contributing to various productions on and off stage. She began ballet at the age of 5 at The School of Dance tutored by Ms Joanna Vella and explored contemporary dance in 2022 at Nova Studios, expanding into Jazz, and Commercial Hip-Hop. Her recent participation includes Dance Festival Malta Community Project - Urban Symphonies, and Affinity (Dis)connection UM dance project. Graduating with a Bachelor's degree in Performing Arts, her thesis integrated Yoga with Contemporary Dance to depict the Five Earth Elements. Her research culminated in her performance - Prana at the ICA Festival in 2024.`,
  },
  "edmilson-zammit": {
    name: "Edmilson Zammit",
    role: "Performer",
    image: "/Edmilson-Zammit-1.jpg",
    color: "bg-[#EEC60D]",
    bio: `Edmilson is a dynamic performing arts student at MCAST, specializing in dance and design elements. His creative journey weaves together a holistic approach to movement, blending the worlds of ritualistic clowning, light design, and therapeutic practices. With a passion for pushing artistic boundaries, Edmilson explores dance as a transformative medium that connects body, space, and emotion. for dementia people.`,
  },
  "malcolm-micallef": {
    name: "Malcolm Micallef",
    role: "Performer",
    image: "/Malcolm-Micallef-1.jpg",
    color: "bg-[#EEC60D]",
    bio: `Malcolm is an artist that likes to create pieces that involve the self. His inspiration comes from existential philosophy and touches upon the absurd. He likes to create and idea-generate concepts for theatre, film, and any other artistic medium.`,
  },
  "benjamin-abela": {
    name: "Benjamin Abela",
    role: "Performer",
    image: "/Benjamin-Abela-1.jpg",
    color: "bg-[#EEC60D]",
    bio: `Over the years, Benjamin has participated in countless productions and, subsequently, played dozens of different roles. These include Pete in 'Dear Pete', Lamb in 'Is-Serra', Max in 'Ineż Kienet Perfetta', David in 'Il-Pożittivi', Grillu in 'Il-Giddieb Għomru Twil', and David in 'Id-Dnub tal-Magħżulin'. Benjamin's role within the local theatre industry goes beyond that of an actor. Over the years, he has written and co-written a number of scripts, such as 'NOSTRUM', 'Popolazzjoni: 4', '90 SEKONDA', 'Pandora', 'L-Aħħar Siġra', 'Help! Barbetti go Bohemian!', and 'iLand'. In 2017, Benjamin co- founded the Ħassle Mejjet Theatre Collective with Gianluca Mifsud and Brendon Thearle.`,
  },
  "elena-marie-sciberras": {
    name: "Elena Marie Sciberras",
    role: "Artist",
    image: "/Elena-Marie-Sciberras-1.jpg",
    color: "bg-amber-500",
    bio: `Elena Sciberras is a twenty-year-old fine arts student currently in her third year at the University of Malta, where she is pursuing a BA in Fine Arts and Music Studies. She draws inspiration from the vast array of media that surrounds her daily—from the films she watches to the music playing as she travels from place to place. Despite often feeling overwhelmed by this endless curiosity, she finds relief in the knowledge that creating and discovering art ensures she will almost never experience boredom. Through her work, Elena hopes to inspire a deeper appreciation of the art embedded in everyday life. She aims to emphasize the significance of each passing moment, encouraging others to slow down and truly take it all in.`,
  },
  "lara-vella": {
    name: "Lara Vella",
    role: "Artist",
    image: "/Lara-Vella.jpg",
    color: "bg-amber-500",
    bio: `Lara Vella is a Maltese oil and acrylic painter who is deeply inspired by the vibrant warmth of her homeland; Malta. The artist strives to portray her subjects in saturated, dreamlike tones; an aesthetic choice which serves the dual purpose of not only accentuating the lively colours of our island but also providing the viewer with the opportunity to experience the subjects through a childlike lens. Lara's most common themes are seascapes, sunsets, rural landscapes and traditional food still lifes all of which highlight Malta's unique, natural beauty and culture. Before her most recent solo exhibition at the Phoenicia in August 2024, Lara's journey into the arts began with her formal education in fine arts, where she honed her skills and developed a unique artistic voice. Lara completed a Master Course in Visual Arts in Florence, Italy, leaving Malta soon after she completed a Bachelor's Degree in Fine Arts and History of Art from the Department of Art and Art History at the University of Malta.`,
  },
  "sarah-fofana": {
    name: "Sarah Fofana",
    role: "Performer",
    image: "/Sarah-Fofana.jpg",
    color: "bg-[#EEC60D]",
    bio: `Sarah is a third-year Performing Arts student at the University of Malta. She discovered a passion for the field at a young age, which motivated her to pursue formal education in theatre, dance, and music. Sarah has been part of several theatre plays and dance performances, each experience helping her grow as an artist. She appreciates opportunities to develop her skills and expand her artistic knowledge.`,
  },
  "alice-bertolasi": {
    name: "Alice Bertolasi",
    role: "Performer",
    image: "/Alice-Bertolasi.jpg",
    color: "bg-[#EEC60D]",
    bio: `Alice Bertolasi studied painting at ABA Brera (Milan), MA, and she took part in the Erasmus programme at NCAD, Dublin, and UM, Malta. In 2019 she gave birth to 'In Parole Pòlvere': an artistic quest around the metaphorical potential of dust. Her work has been exhibited in Germany, Ireland, Italy and China. Her practice feeds on hybrid and crossed languages such as installation, poetry, drawing, rudimentary audio and video production, meditative body research practices and feminist thought, aiming to transform the visual apparatus into an emotional dimension of relational experience and vice versa.`,
  },
  "giorgia-ionescu": {
    name: "Giorgia Ionescu",
    role: "Performer",
    image: "/Giorgia-Ionescu-1.jpg",
    color: "bg-[#EEC60D]",
    bio: `Giorgia Ionescu is a young upcoming actress from Romania. From an early age she has been eager to explore and learn from different cultures—starting with an exchange to Finland, pursuing a theatre degree in cork, and finally studying abroad in Malta. With her experience in not only short-films and traditional theatre, but also devised avant-garde movement-based work, Giorgia is both figuratively and literally— a boundary pusher.`,
  },
  "anna-issajeva": {
    name: "Anna Issajeva",
    role: "Performer",
    image: "/Anna-Issajeva.jpg",
    color: "bg-[#EEC60D]",
    bio: `Anna Issajeva is a dedicated theatre artist with extensive acting experience. Originally from Ireland, she has been passionate about performance from an early age, exploring a range of theatrical forms. Currently pursuing a degree in Theatre and Performative Practices at University College Cork, she is expanding her practice while studying abroad in Malta. With a background spanning traditional theatre, devised work, and avant-garde movement-based performance, Anna is drawn to experimentation and pushing creative boundaries. Whether on stage or behind the scenes, she continues to explore new ways of engaging audiences and bringing bold ideas to life.`,
  },
  "kiki-valentine": {
    name: "Kiki Valentine",
    role: "Drag artist",
    image: "/Kiki-Valentine.jpg",
    color: "bg-purple-500",
    bio: `A fearless trans Maltese drag queen serving stunts, shock, and fierce femininity with a twist!`,
  },
  "celeste-samodiva": {
    name: "Celeste Samodiva",
    role: "Drag artist",
    image: "/Celeste-Samodiva.jpg",
    color: "bg-purple-500",
    bio: `She's kooky, she's crazy, and she's here to slay! Celeste Samodiva is a drag queen who lives for camp, concept, and a touch of chaos. Whether it's a high-energy banger or a soul-stirring ballad, she delivers versatility with a twist, always keeping audiences on their toes. This crafty queen loves a good gag—reveal after reveal, she's got tricks up her sleeve and then some. With a playful spirit and a fearless attitude, Celeste Samodiva isn't afraid to make a fool of herself, all while serving unforgettable performances that blend creativity, comedy, and charisma. Buckle up—she's just getting started!`,
  },
  "ben-n-syder": {
    name: "Ben N. Syder",
    role: "Drag artist",
    image: "/ben-n-syder-1.jpg",
    color: "bg-purple-500",
    bio: `Spooking audiences with his vampiric flare and enthralling preferences - It's your resident drag thing, Ben N. Syder!`,
  },
  "faye-mifsud-midolo": {
    name: "Faye Mifsud Midolo",
    role: "Performer",
    image: "/Faye-Mifsud-Midolo.jpg",
    color: "bg-[#EEC60D]",
    bio: `Faye Mifsud Midolo is a passionate performing artist dedicated to storytelling through theatre and music. With a background in acting, singing, and stage production, her work spans from performing and directing to writing for the stage. She has collaborated with various theatre collectives, bringing narratives to life through innovative performances and immersive productions. She aims to produce engaging, thought-provoking experiences that audiences can relate to through her work.`,
  },
  "d-shows": {
    name: "D Shows",
    role: "Performer",
    image: "/d-shows-1.jpg",
    color: "bg-[#EEC60D]",
    bio: `Introducing D Shows, a dynamic performance company co-founded by Dino Torlakovic and Diellza Ilgner, both distinguished graduates in Performing Arts. Dino with a focus on acting creative writing script writing and Diellza, a transdisciplinary artist specializing in theatre and multimedia, have successfully created and performed three original shows (The Language of the Deaf, SOLART and Hurray our World is ending!) to date. These productions have not only captivated audiences but have also turned the stage into a vibrant platform for political and social discourse. By blending their unique artistic skills, D Shows challenges audiences to critically engage with contemporary issues, aiming to inspire societal change through compelling and transformative performances.<br /><br />
          Diellza Ilgner is a Malta-based transdisciplinary performance artist working across theatre, multimedia, and audience-engaged art. Her work addresses social themes like migration, disability, and environmental issues. As a co-founder of ConsciousArtDuo and D Shows, she combines art therapy with political themes, often collaborating with diverse communities. Diellza has written and directed plays, including BLACKOUT, a piece on media addiction, and her practice reflects her personal experience with disability, offering fresh perspectives on accessibility and movement. She's also dedicated to community engagement, leading intercultural workshops and eco-activist art projects.`,
  },
  "starcrossed": {
    name: "Starcrossed",
    role: "Musicians",
    image: "/starcrossed-2.jpg",
    color: "bg-teal-500",
    bio: `Starcrossed is a five-piece band that plays a variety of music genres such as soft rock and alternative indie. Formed in 2023, the band draws inspiration from artists such as Radiohead and Fleetwood Mac.`,
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
      <SEO
        title={`${member.name}`}
        description={`Learn more about ${member.name} from the Pause & Play Festival team`}
        canonical={`https://pauseandplay.mt/team/${member.name}`}
      />
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
          </div>

          <div className="mt-8 md:mt-0">
            <div className={`w-64 h-64 rounded-full overflow-hidden border-4 ${member.color.replace('bg-', 'border-')}`}>
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            {member.credit && (
              <p className="text-gray-500 text-sm mt-4 opacity-70 text-center">{member.credit}</p>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="prose prose-lg prose-invert max-w-none">
          <div
            className="text-gray-300 mb-6 text-lg leading-relaxed"
            dangerouslySetInnerHTML={{ __html: member.bio }}
          />
        </div>
      </div>
    </div>
  );
}
