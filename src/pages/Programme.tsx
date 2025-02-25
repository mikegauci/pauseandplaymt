export default function Programme() {
  return (
    <div className="min-h-screen bg-gray-900 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <div className="bg-[#CCFF33] inline-block px-4 py-1 mb-8">
          <h1 className="text-gray-900 font-bold">Programme</h1>
        </div>

        <h2 className="text-[#FF6B4E] text-5xl font-bold mb-8">
          What's On at Frome Festival 2024
        </h2>

        <p className="text-white text-lg mb-16">
          Join us for three days of extraordinary performances and experiences. 
          All events take place between September 27-29, 2024.
        </p>

        <div className="space-y-12">
          {/* Day 1 */}
          <div>
            <h2 className="text-2xl font-bold text-purple-400 mb-6">
              Friday, September 27
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gray-800 rounded-lg p-6">
                <div>
                  <h3 className="text-xl font-bold text-white">Opening Ceremony: Science Meets Art</h3>
                  <p className="text-purple-400 mt-1">18:00 - 19:00 | St. George's Square</p>
                  <p className="text-gray-300 mt-2">Join us for the grand opening featuring a spectacular light show and musical performance combining science and art.</p>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-6">
                <div>
                  <h3 className="text-xl font-bold text-white">The Future of AI Exhibition</h3>
                  <p className="text-purple-400 mt-1">19:30 - 21:30 | Mediterranean Conference Centre</p>
                  <p className="text-gray-300 mt-2">Interactive exhibition showcasing the latest developments in artificial intelligence and its impact on society.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Day 2 */}
          <div>
            <h2 className="text-2xl font-bold text-purple-400 mb-6">
              Saturday, September 28
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gray-800 rounded-lg p-6">
                <div>
                  <h3 className="text-xl font-bold text-white">Kids Science Workshop</h3>
                  <p className="text-purple-400 mt-1">10:00 - 12:00 | MCAST Institute</p>
                  <p className="text-gray-300 mt-2">Hands-on experiments and fun activities for children aged 6-12. Discover the wonders of chemistry and physics.</p>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-6">
                <div>
                  <h3 className="text-xl font-bold text-white">Climate Change Forum</h3>
                  <p className="text-purple-400 mt-1">14:00 - 16:00 | University of Malta Valletta Campus</p>
                  <p className="text-gray-300 mt-2">Expert panel discussion on climate change impacts and solutions for Mediterranean islands.</p>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-6">
                <div>
                  <h3 className="text-xl font-bold text-white">Science Street Performance</h3>
                  <p className="text-purple-400 mt-1">17:00 - 19:00 | Republic Street</p>
                  <p className="text-gray-300 mt-2">Street performers demonstrate scientific principles through entertaining shows and experiments.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Day 3 */}
          <div>
            <h2 className="text-2xl font-bold text-purple-400 mb-6">
              Sunday, September 29
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gray-800 rounded-lg p-6">
                <div>
                  <h3 className="text-xl font-bold text-white">Marine Biology Exhibition</h3>
                  <p className="text-purple-400 mt-1">10:00 - 13:00 | Maritime Museum</p>
                  <p className="text-gray-300 mt-2">Explore Mediterranean marine life and learn about ocean conservation efforts.</p>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-6">
                <div>
                  <h3 className="text-xl font-bold text-white">Robotics Demonstration</h3>
                  <p className="text-purple-400 mt-1">14:00 - 16:00 | Esplora Interactive Science Centre</p>
                  <p className="text-gray-300 mt-2">Watch robots in action and learn about the future of automation and robotics.</p>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-6">
                <div>
                  <h3 className="text-xl font-bold text-white">Science Film Festival</h3>
                  <p className="text-purple-400 mt-1">16:30 - 18:30 | Spazju Kreattiv</p>
                  <p className="text-gray-300 mt-2">Screening of award-winning science documentaries followed by Q&A sessions.</p>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-6">
                <div>
                  <h3 className="text-xl font-bold text-white">Astronomy Night</h3>
                  <p className="text-purple-400 mt-1">20:00 - 22:00 | Upper Barrakka Gardens</p>
                  <p className="text-gray-300 mt-2">Stargazing session with professional astronomers. Telescopes provided.</p>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-6">
                <div>
                  <h3 className="text-xl font-bold text-white">Closing Ceremony</h3>
                  <p className="text-purple-400 mt-1">22:30 - 23:00 | St. George's Square</p>
                  <p className="text-gray-300 mt-2">Festival finale with drone light show celebrating science and innovation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}