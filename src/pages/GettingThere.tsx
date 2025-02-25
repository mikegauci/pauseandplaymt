export default function GettingThere() {
  return (
    <div className="min-h-screen bg-gray-900 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-[#CCFF33] inline-block px-4 py-1 mb-8">
          <h1 className="text-[#1E0B36] font-bold">Getting There</h1>
        </div>

        <h2 className="text-[#FF6B4E] text-5xl font-bold mb-8">
          Explore magical places in Frome<br />
          with the Festival
        </h2>

        <p className="text-white mb-12">
          Our festival will take place across two venues, based in Frome. One venue is Memorial Theatre, one is Merlin Theatre.<br /><br />
          Here are the addresses and directions to both venues. With sustainability in mind we strongly recommend that you use public transport to get to our Festival. The last bus departing from Frome is at 1:30. (Friday/Saturday and Saturday/Sunday nights).
        </p>

        {/* Memorial Theatre Venue Card */}
        <div className="bg-[#CCFF33] rounded-lg p-6 mb-12">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.686891052898!2d-2.3234813!3d51.2308273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48721b6589b4eb33%3A0x44a8b9e891fd0c86!2sFrome%20Memorial%20Theatre!5e0!3m2!1sen!2suk!4v1710337284099!5m2!1sen!2suk"
            width="100%" 
            height="300" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="mb-6"
          />
          
          <h3 className="text-[#1E0B36] text-3xl font-bold mb-2">Memorial Theatre</h3>
          <p className="text-[#1E0B36] mb-4">Christchurch Street West, Frome BA11 1EB</p>
          
          <div className="flex items-start gap-2">
            <div className="mt-1">📍</div>
            <p className="text-[#1E0B36]">
              Memorial Theatre is located in the heart of Frome. The venue extends onto the beautiful Christchurch gardens.
            </p>
          </div>
          
          <p className="text-[#1E0B36] mt-4 italic">
            Keep in mind that due to other events happening in the same area, there might be excessive noise and congestion on the streets.
          </p>
        </div>

        {/* Merlin Theatre Venue Card */}
        <div className="bg-[#FFD700] rounded-lg p-6">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.7676546619854!2d-2.3114415!3d51.2297444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48721b7cf2bb0e2d%3A0x3a2503a543162f12!2sMerlin%20Theatre!5e0!3m2!1sen!2suk!4v1710337321167!5m2!1sen!2suk"
            width="100%" 
            height="300" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="mb-6"
          />
          
          <h3 className="text-[#1E0B36] text-3xl font-bold mb-2">Merlin Theatre</h3>
          <p className="text-[#1E0B36] mb-4">Bath Road, Frome BA11 2HG</p>
          
          <div className="flex items-start gap-2">
            <div className="mt-1">📍</div>
            <p className="text-[#1E0B36]">
              Walk to the college entrance and straight to the theatre. Turn right at the main entrance, and the theatre is clearly signposted.
            </p>
          </div>
        </div>

        {/* Transportation Options Grid */}
        <div className="mt-16 mb-12">
          <h2 className="text-[#FF6B4E] text-3xl font-bold mb-8">Transportation Options</h2>
          <div className="grid grid-cols-2 gap-8">
            {/* Bus Transportation */}
            <div className="bg-[#FF6B4E] rounded-lg p-6">
              <img 
                src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800"
                alt="Bus Transportation"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-white text-2xl font-bold mb-2">Travelling by Bus</h3>
              <div className="text-white space-y-2">
                <p>Regular services from:</p>
                <ul className="list-disc list-inside">
                  <li>Bath (D2 Service)</li>
                  <li>Bristol (X2 Service)</li>
                  <li>Warminster (267 Service)</li>
                </ul>
              </div>
            </div>

            {/* Train Transportation */}
            <div className="bg-[#CCFF33] rounded-lg p-6">
              <img 
                src="https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800"
                alt="Train Transportation"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-[#1E0B36] text-2xl font-bold mb-2">By Train</h3>
              <div className="text-[#1E0B36] space-y-2">
                <p>Direct services from:</p>
                <ul className="list-disc list-inside">
                  <li>London Paddington</li>
                  <li>Bristol Temple Meads</li>
                  <li>Weymouth</li>
                </ul>
              </div>
            </div>

            {/* Car Parking */}
            <div className="bg-[#FFD700] rounded-lg p-6">
              <img 
                src="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=800"
                alt="Car Parking"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-[#1E0B36] text-2xl font-bold mb-2">Car Parking</h3>
              <div className="text-[#1E0B36] space-y-2">
                <p>Available parking at:</p>
                <ul className="list-disc list-inside">
                  <li>Cork Street Car Park</li>
                  <li>Merchants Barton</li>
                  <li>Justice Lane</li>
                </ul>
              </div>
            </div>

            {/* Walking Routes */}
            <div className="bg-[#FF6B4E] rounded-lg p-6">
              <img 
                src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800"
                alt="Walking Routes"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-white text-2xl font-bold mb-2">Walking Routes</h3>
              <div className="text-white space-y-2">
                <p>Easy walking distance:</p>
                <ul className="list-disc list-inside">
                  <li>5 mins from town center</li>
                  <li>10 mins from train station</li>
                  <li>Connected by footpaths</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}