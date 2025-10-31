
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const DayBoardingBenefits = () => {


  const benefits = [
    {
      title: "DAILY TABLET-BASED TESTS",
      description:
        "Daily tablet-based tests will be conducted to monitor your daily performance. The results will be shared with your parents and teachers on a daily basis",
      icon: "./images/tab.png",
      color: "from-blue-50 to-cyan-50",
    },
    {
      title: "ONE-ON-ONE VIVA SESSIONS",
      description:
        "Students will be called for viva and one-on-one sessions with teachers based on their daily test reports. This guidance will help them improve their performance.",
      icon: "./images/doubt.png",
      color: "from-orange-50 to-amber-50",
    },
    {
      title: "PEER LEARNING",
      description:
        "Students can benefit from peer learning and group study sessions, helping them understand concepts better and also learn from their peers.",
      icon: "./images/brainstorming.png",
      color: "from-green-50 to-emerald-50",
    },
    {
      title: "TIME MANAGEMENT SKILLS",
      description:
        "Students acquire essential time management skills, such as managing multiple subjects simultaneously and effectively managing exam time, which are crucial during examinations.",
      icon: "./images/time.png",
      color: "from-purple-50 to-indigo-50",
    },
    {
      title: "AWAY FROM DISTRACTIONS",
      description:
        "Students dedicate their time here to learning and problem-solving, which ultimately reduces their exposure to social media and other distractions.",
      icon: "./images/dis.png",
      color: "from-teal-50 to-cyan-50",
    },
    {
      title: "DISCIPLINE",
      description:
        "Attending classes six days a week helps develop the discipline necessary to easily crack such a challenging exam and also places you ahead of other competitors.",
      icon: "./images/DISCIPLINE.png",
      color: "from-blue-50 to-indigo-50",
    },
    {
      title: "STRUCTURED LEARNING ENVIRONMENT",
      description:
        "In this program, you'll receive daily tasks with structured timelines, which will enhance your problem-solving skills for exams.",
      icon: "./images/learning.png",
      color: "from-pink-50 to-rose-50",
    },
    {
      title: "EXPERT GUIDANCE",
      description:
        "After class, you will receive guidance directly from the main faculty, whether it's for doubt-solving or completing homework. Your teachers will be available for 12 hours a day daily.",
      icon: "./images/expert.png",
      color: "from-yellow-50 to-orange-50",
    },
  ];

  const eventDetails = {
    event: "Seminar on the implementation of Day Boarding",
    date: "December 22, 2025",
    time: "2:00 pm",
    venue: "Edukul Classes, Above Shere Punjab restaurant, City Centre, Gwalior (MP)",
    purpose: "Discuss and unveil plans for implementing Day Boarding",
    experience:
      "Enjoy a beautiful setting and enriching discussions about innovative education practices.",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section with Video */}
      <section className="bg-gradient-to-br from-[#1d8dc4] to-[#076da0] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white text-center mb-4">
            Day Boarding <span className="text-[#fd9b36]">Benefits</span>
          </h1>
          <p className="text-center text-white/90 text-lg mb-8 max-w-3xl mx-auto">
            Experience a structured learning environment with expert guidance,
            daily tests, and personalized attention for your success
          </p>

          {/* Video Placeholder */}
          <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-black">
            <div className="aspect-video w-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/X31lDzIxwSQ?si=PxsN5asSDSbB-QOW"
                title="Day Boarding Benefits Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Our{" "}
            <span className="text-[#1d8dc4]">Day Boarding Program?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br ${benefit.color} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100`}
              >
                <div className="flex flex-col items-center md:flex-row  md:items-start gap-6">
                  <div className="text-5xl flex-shrink-0 group-hover:scale-110 transition-transform">
                    <img className="w-32 h-32" src={benefit.icon} alt="" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Want to Know More About{" "}
            <span className="text-[#1d8dc4]">The Concept?</span>
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Join us for an exclusive seminar on Day Boarding implementation
          </p>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#fd9b36] rounded-full mt-2"></div>
                <div>
                  <span className="font-bold text-gray-900">Event: </span>
                  <span className="text-gray-700">{eventDetails.event}</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#fd9b36] rounded-full mt-2"></div>
                <div>
                  <span className="font-bold text-gray-900">Date: </span>
                  <span className="text-gray-700">{eventDetails.date}</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#fd9b36] rounded-full mt-2"></div>
                <div>
                  <span className="font-bold text-gray-900">Time: </span>
                  <span className="text-gray-700">{eventDetails.time}</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#fd9b36] rounded-full mt-2"></div>
                <div>
                  <span className="font-bold text-gray-900">Venue: </span>
                  <span className="text-gray-700">{eventDetails.venue}</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#fd9b36] rounded-full mt-2"></div>
                <div>
                  <span className="font-bold text-gray-900">Purpose: </span>
                  <span className="text-gray-700">{eventDetails.purpose}</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#fd9b36] rounded-full mt-2"></div>
                <div>
                  <span className="font-bold text-gray-900">Experience: </span>
                  <span className="text-gray-700">
                    {eventDetails.experience}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-10 flex justify-center">
              <a href="https://calendly.com/simphy/30min" className="bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold px-10 py-4 rounded-full shadow-lg hover:from-orange-700 hover:to-red-700 transition-all transform hover:scale-105">
                Book  the Seminar
              </a>
            </div>
          </div>
        </div>
      </section>

   

      <Footer />
    </div>
  );
};

export default DayBoardingBenefits;