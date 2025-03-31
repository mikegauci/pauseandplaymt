import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQSection {
  title: string;
  questions: {
    question: string;
    answer: string | string[];
  }[];
}

const faqSections: FAQSection[] = [
  {
    title: "Festival Information",
    questions: [
      {
        question: "When will the festival be taking place?",
        answer: "The festival will take place over three days, beginning on the evening of Friday 9th, and continuing throughout Saturday 10th and Sunday 11th May."
      },
      {
        question: "Where will the festival be taking place?",
        answer: "There will be three venues for the festival. The main venue will be the University's Valletta Campus, with performances distributed across the ground floor. Additional external venues will also host performances for the festival, namely Wild Honey Beer House & Bistro and MaeWest and are within walking distance from the main festival venue."
      },
      {
        question: "How much do tickets cost?",
        answer: "The festival is entirely free of charge throughout the three days (except for the external performances), however a donation at the festival venue would be much appreciated."
      },
      {
        question: "What is the age rating of the festival?",
        answer: "The festival itself does not have an age rating and is suitable for everyone, however the individual performances may be unsuitable for younger audiences and its under the discretion of parents and/or guardians to decide whether the performance in question is suitable or not."
      },
      {
        question: "Are there any content warnings?",
        answer: "The festival itself is suitable for everyone, however certain performances may deal with sensitive and/or mature topics. We highly recommend checking before attending a performance to see whether said performance will have any content warnings or not and deciding then."
      }
    ]
  },
  {
    title: "External Performances",
    questions: [
      {
        question: "What are the external performances?",
        answer: "External performances are evening performances that will be taking place outside of the main festival venue. An additional external venue in Valletta will host these performances that are with a more risqué and/or feel-good atmosphere."
      },
      {
        question: "Where are the external performances?",
        answer: "The external performances will be at two separate locations in Valletta, those being; Wild Honey Beer House & Bistro on Merchants' Street and MaeWest on Strait Street and not at Valletta Campus itself."
      },
      {
        question: "How much are the external performances?",
        answer: "The external performances will be free of charge with a €5 donation at the door which will also entitle you to a free drink at the venue. You can still attend without paying a €5 donation, but you will not be entitled to a drink. The donation is there to pay the external artists who are taking part."
      }
    ]
  },
  {
    title: "Accessibility",
    questions: [
      {
        question: "Is there disabled-friendly access?",
        answer: "Valletta Campus is disabled-friendly, please contact: conferences@um.edu.mt for more information. Unfortunately, Wild Honey Beer House and Bistro and MaeWest are not disabled-friendly, we apologise for the inconvenience."
      },
      {
        question: "Is the venue suitable for elderly or persons with mobility issues?",
        answer: "Valletta Campus has a step-free access and can be accommodating for elderly/persons with mobility issues, please contact: conferences@um.edu.mt for more information. MaeWest may be accommodating for elderly/persons with mobility issues, we strongly suggest contacting the venue to query on this. Unfortunately, Wild Honey Beer House and Bistro may not be accommodating for elderly/persons with mobility issues, we apologise for the inconvenience."
      }
    ]
  },
  {
    title: "Other Questions",
    questions: [
      {
        question: "I have more questions, who do I contact?",
        answer: "If you have more questions about the festival, the external performances or want more information, please contact the Pause & Play Festival Team on our contact page."
      }
    ]
  }
];

export default function FAQ() {
  const [openQuestions, setOpenQuestions] = useState<{[key: string]: boolean}>({});

  const toggleQuestion = (sectionTitle: string, questionIndex: number) => {
    const key = `${sectionTitle}-${questionIndex}`;
    setOpenQuestions(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="min-h-screen bg-[#111] py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <div className="bg-[#EEC60D] inline-block px-4 py-1 mb-8">
          <h1 className="text-[#1E0B36] font-bold">FAQ</h1>
        </div>

        <h2 className="text-[#37B5FF] text-2xl md:text-5xl font-bold mb-8">
          Everything You Need to Know About the Festival
        </h2>

        <p className="text-white text-lg mb-16">
          We've compiled answers to the most common questions about attending the Pause & Play Festival. 
          If you can't find what you're looking for, please don't hesitate to contact us.
        </p>

        {/* FAQ Sections */}
        {faqSections.map((section) => (
          <section key={section.title} className="mb-16">
            <h2 className="text-2xl font-semibold text-purple-400 mb-8">
              {section.title}
            </h2>

            <div className="space-y-4">
              {section.questions.map((item, index) => {
                const key = `${section.title}-${index}`;
                const isOpen = openQuestions[key];

                return (
                  <div key={index} className="bg-gray-800 rounded-lg">
                    <button
                      onClick={() => toggleQuestion(section.title, index)}
                      className="w-full p-6 flex justify-between items-center text-left hover:bg-gray-700/50 transition-colors rounded-lg"
                    >
                      <h3 className="text-xl font-bold text-white pr-8">
                        {item.question}
                      </h3>
                      {isOpen ? (
                        <ChevronUp className="w-6 h-6 text-purple-400 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-purple-400 flex-shrink-0" />
                      )}
                    </button>
                    
                    {isOpen && (
                      <div className="px-6 pb-6 mt-2">
                        {Array.isArray(item.answer) ? (
                          <ul className="text-gray-300 space-y-2">
                            {item.answer.map((line, i) => (
                              <li key={i}>{line}</li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-gray-300">
                            {item.answer}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}