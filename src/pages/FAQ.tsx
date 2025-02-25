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
    title: "Getting to the Festival",
    questions: [
      {
        question: "Where are the festival venues located?",
        answer: "Our main venues are the Memorial Theatre and Merlin Theatre in Frome. Each event listing will specify the exact venue. Please check your tickets and event details carefully as performances take place at different locations throughout the festival."
      },
      {
        question: "What are my parking options?",
        answer: [
          "There are several parking options available in Frome:",
          "• Cork Street Car Park - Closest to Memorial Theatre",
          "• Merchants Barton Car Park - Central location",
          "• Justice Lane Car Park - Near Merlin Theatre",
          "We recommend arriving early to secure parking, especially for popular events."
        ]
      },
      {
        question: "Can I get there by public transport?",
        answer: "Yes! Regular bus services run to Frome from Bath, Bristol, and surrounding areas. The nearest train station is Frome Railway Station, with direct services from London Paddington and Bristol Temple Meads."
      }
    ]
  },
  {
    title: "Attending a Show",
    questions: [
      {
        question: "I will be attending with someone who requires assistance. What should I do?",
        answer: "Please contact our box office ahead of your visit so we can ensure your visit is as comfortable and enjoyable as possible. We're committed to making our venues accessible to all."
      },
      {
        question: "Are seats numbered? When do doors open?",
        answer: "Most seating is on a first-come, first-served basis (except for certain high-capacity shows). Venue doors typically open 30 minutes before the performance. We recommend arriving early to get your preferred seats."
      },
      {
        question: "What is your latecomers policy?",
        answer: "To avoid disruption to performers and other audience members, latecomers may not be admitted until a suitable break in the performance. Please plan to arrive with plenty of time."
      }
    ]
  },
  {
    title: "Tickets and Booking",
    questions: [
      {
        question: "How do I book tickets?",
        answer: "You can book tickets online through our website or in person at our box office. We recommend booking in advance as many events sell out quickly."
      },
      {
        question: "Do you offer group discounts?",
        answer: "Yes, we offer discounts for groups of 10 or more. Please contact our box office for details on group booking rates."
      },
      {
        question: "What is your refund policy?",
        answer: "We do not offer refunds unless a performance is cancelled. In the event of a cancellation, ticket holders will be contacted directly with information about refunds."
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
    <div className="min-h-screen bg-gray-900 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <div className="bg-[#CCFF33] inline-block px-4 py-1 mb-8">
          <h1 className="text-[#1E0B36] font-bold">FAQ</h1>
        </div>

        <h2 className="text-[#FF6B4E] text-5xl font-bold mb-8">
          Everything You Need to Know About the Festival
        </h2>

        <p className="text-white text-lg mb-16">
          We've compiled answers to the most common questions about attending the Frome Festival. 
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