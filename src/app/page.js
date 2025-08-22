import React from "react";
import HomePage from "./components/HomePage";

const Page = () => {
  return (
    <>
      <HomePage />
      <div className="h-screen"></div>
      <main className="relative z-20">
        <section className="w-full h-screen bg-neutral-800 flex items-center justify-center text-white text-4xl">
          Section 1
        </section>
        <section className="w-full h-screen bg-neutral-700 flex items-center justify-center text-white text-4xl">
          Section 2
        </section>
        <section className="w-full h-screen bg-neutral-600 flex items-center justify-center text-white text-4xl">
          Section 3
        </section>
      </main>
    </>
  );
};

export default Page;
