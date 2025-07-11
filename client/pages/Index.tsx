import { useState, useEffect } from "react";

export default function Index() {
  const [showMessage, setShowMessage] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowMessage(true), 500);
    const timer2 = setTimeout(() => setShowDetails(true), 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const FloatingElement = ({
    type,
    top,
    left,
    animationDelay = 0,
    size = "text-xl",
  }: {
    type: "heart" | "star" | "cloud";
    top: string;
    left: string;
    animationDelay?: number;
    size?: string;
  }) => {
    const symbols = {
      heart: "💖",
      star: "✨",
      cloud: "☁️",
    };

    const animations = {
      heart: "animate-heart-beat",
      star: "animate-sparkle",
      cloud: "animate-cloud-drift",
    };

    return (
      <div
        className={`absolute ${size} ${animations[type]}`}
        style={{
          top,
          left,
          animationDelay: `${animationDelay}s`,
        }}
      >
        {symbols[type]}
      </div>
    );
  };

  const photos = [
    "https://cdn.builder.io/api/v1/image/assets%2F255dfe5a0c1d4dd8bb061c415aa25eed%2F92a09376ea794e9e92cbc8e4b945d7eb?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2F255dfe5a0c1d4dd8bb061c415aa25eed%2F9c33c1d5298c4f4d877c182bfd22c0ce?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2F255dfe5a0c1d4dd8bb061c415aa25eed%2Fb44347142dd1451b85b323443139f08b?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2F255dfe5a0c1d4dd8bb061c415aa25eed%2F00447d57ebf541deb1daa0165e801648?format=webp&width=800",
  ];

  const PhotoCard = ({ src, index }: { src: string; index: number }) => (
    <div className="relative group">
      <div className="aspect-square rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
        <img
          src={src}
          alt={`Our memory ${index + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen romantic-gradient relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="floating-hearts">
        <FloatingElement type="heart" top="10%" left="15%" animationDelay={0} />
        <FloatingElement type="heart" top="20%" left="85%" animationDelay={1} />
        <FloatingElement type="heart" top="70%" left="10%" animationDelay={2} />
        <FloatingElement
          type="heart"
          top="80%"
          left="90%"
          animationDelay={0.5}
        />

        <FloatingElement
          type="star"
          top="15%"
          left="75%"
          animationDelay={1.5}
        />
        <FloatingElement
          type="star"
          top="25%"
          left="25%"
          animationDelay={0.8}
        />
        <FloatingElement
          type="star"
          top="60%"
          left="80%"
          animationDelay={2.2}
        />
        <FloatingElement
          type="star"
          top="75%"
          left="20%"
          animationDelay={1.8}
        />

        <FloatingElement
          type="cloud"
          top="5%"
          left="50%"
          animationDelay={0}
          size="text-2xl md:text-3xl"
        />
        <FloatingElement
          type="cloud"
          top="85%"
          left="60%"
          animationDelay={4}
          size="text-xl md:text-2xl"
        />
        <FloatingElement
          type="cloud"
          top="40%"
          left="5%"
          animationDelay={2}
          size="text-sm md:text-lg"
        />
        <FloatingElement
          type="cloud"
          top="30%"
          left="95%"
          animationDelay={6}
          size="text-lg md:text-xl"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 md:py-12 text-center">
        {/* Magical Congratulations Message */}
        <div
          className={`mb-12 md:mb-16 transition-all duration-1000 ${showMessage ? "animate-fade-in-up opacity-100" : "opacity-0"}`}
        >
          <h1 className="font-elegant text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-romantic-pink-600 mb-4 md:mb-6 animate-heart-beat px-2">
            🎉 CONGRATULATIONS! 🎉
          </h1>
          <h2 className="font-readable text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-romantic-purple-600 mb-3 md:mb-4 px-2 font-semibold">
            You're My Date Today!
          </h2>
          <div className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl animate-heart-beat">
            ❤️
          </div>
          <div className="mt-4 flex justify-center space-x-1 md:space-x-2">
            <span className="text-xl md:text-2xl animate-float">💕</span>
            <span className="text-xl md:text-2xl animate-float-slow">💖</span>
            <span className="text-xl md:text-2xl animate-float">💗</span>
          </div>
        </div>

        {/* Date Details Box */}
        <div
          className={`max-w-2xl mx-auto mb-12 md:mb-16 px-4 transition-all duration-1000 delay-500 ${showDetails ? "animate-fade-in-up opacity-100" : "opacity-0"}`}
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 shadow-2xl border border-romantic-pink-200">
            <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
              {/* When */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-romantic-pink-100 rounded-full mb-3 md:mb-4 animate-float">
                  <span className="text-xl md:text-2xl">🗓️</span>
                </div>
                <h3 className="font-readable text-xl md:text-2xl text-romantic-purple-600 mb-2 font-semibold">
                  When
                </h3>
                <div className="space-y-1">
                  <p className="text-romantic-pink-700 font-medium text-sm md:text-base">
                    Today!
                  </p>
                  <p className="text-romantic-pink-600 text-xs md:text-sm">
                    Saturday Evening
                  </p>
                  <p className="text-romantic-pink-600 text-xs md:text-sm">
                    7:00 PM
                  </p>
                </div>
              </div>

              {/* Where */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-romantic-purple-100 rounded-full mb-3 md:mb-4 animate-float-slow">
                  <span className="text-xl md:text-2xl">📍</span>
                </div>
                <h3 className="font-readable text-xl md:text-2xl text-romantic-purple-600 mb-2 font-semibold">
                  Where
                </h3>
                <div className="space-y-1">
                  <p className="text-romantic-pink-700 font-medium text-sm md:text-base">
                    Our Secret Spot
                  </p>
                  <p className="text-romantic-pink-600 text-xs md:text-sm">
                    The rooftop garden
                  </p>
                  <p className="text-romantic-pink-600 text-xs md:text-sm">
                    Under the stars ✨
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-romantic-pink-200">
              <p className="font-readable text-base md:text-lg text-romantic-purple-700 px-2 italic">
                "Every love story is beautiful, but ours is my favorite" 💕
              </p>
            </div>
          </div>
        </div>

        {/* Photo Gallery Section */}
        <div
          className={`max-w-4xl mx-auto px-4 transition-all duration-1000 delay-1000 ${showDetails ? "animate-fade-in-up opacity-100" : "opacity-0"}`}
        >
          <h3 className="font-readable text-2xl md:text-3xl lg:text-4xl text-romantic-purple-600 mb-6 md:mb-8 font-semibold">
            Our Magical Moments ✨
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
            {photos.map((photo, index) => (
              <PhotoCard key={index} src={photo} index={index} />
            ))}
          </div>
        </div>

        {/* Bottom Message */}
        <div
          className={`mt-12 md:mt-16 px-4 transition-all duration-1000 delay-1500 ${showDetails ? "animate-fade-in-up opacity-100" : "opacity-0"}`}
        >
          <p className="font-readable text-lg md:text-xl lg:text-2xl text-romantic-pink-600 mb-4 font-medium">
            Get ready for the most romantic evening ever! 🌹
          </p>
          <div className="flex justify-center space-x-2 mb-6">
            <span className="animate-heart-beat text-xl md:text-2xl">💖</span>
            <span
              className="animate-heart-beat text-xl md:text-2xl"
              style={{ animationDelay: "0.5s" }}
            >
              💕
            </span>
            <span
              className="animate-heart-beat text-xl md:text-2xl"
              style={{ animationDelay: "1s" }}
            >
              💗
            </span>
          </div>
          <p className="font-readable text-base md:text-lg text-romantic-purple-600 opacity-80 italic">
            With all my love... 💌
          </p>
        </div>
      </div>
    </div>
  );
}
