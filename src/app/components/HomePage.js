import React from "react";
import Button from "./Button";

const HomePage = () => {
  return (
    <div className="fixed inset-0 w-full h-screen overflow-hidden z-10">
      {/* Video Arka Plan */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center h-full p-10 text-white">
        <h1 className="text-6xl font-archivo font-normal tracking-tight mb-6">
          Vizyonlu olunmaz. <br />
          Vizyonlu doğulur gardaş.
        </h1>

        <div className="flex items-center py-2">
            <Button>İletişim</Button>
        </div>

        <div className="py-10 pe-30 flex items-center justify-end">
            <p className="text-2xl font-medium tracking-tight max-w-3xl ">
          We partner with daring entrepreneurs leveraging <br />
          technology, artificial intelligence, and biotechnology <br />
          to redefine what’s possible.
        </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
