const AppPromo = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left Side - Text */}
        <div>
          <h3 className="inline-block text-2xl md:text-3xl bg-gradient-to-r from-[#e6821f] via-[#f59e0b] to-[#f97316] text-white  font-semibold px-4 py-2 rounded-bl-2xl rounded-tr-2xl mb-4">
            Edukul Learning App
          </h3>
          <h2 className="text-2xl md:text-3xl font-extrabold leading-snug mb-3">
            Best Exam Prep App For{" "}
          </h2>
          <h2 className="text-lg md:text-xl font-semibold  leading-none mb-3 text-[#076da0] flex items-center gap-2">
            {" "}
            <span className="">JEE</span> |
            <span className="">NEET</span> |
            <span className="">Foundation</span> |
            <span className="">Olympiad</span>
          </h2>
          <p className="text-gray-600 mb-6">
            Download the Edukul Learning App & enhance your exam preparation
            anytime, anywhere!
          </p>

          {/* Store Buttons */}
          <div className="flex gap-4">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src="./images/google.png"
                alt="Get it on Google Play"
                className="h-12 w-auto hover:scale-105 transition"
              />
            </a>
         
          </div>
        </div>

        {/* Right Side - Mobile Image */}
        <div className="flex justify-center">
          <img
            src="./images/erasebg-transformed.png"
            alt="Edukul Learning App"
            className=" size-100 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default AppPromo;
