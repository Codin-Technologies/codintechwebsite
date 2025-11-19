import React from "react";

export default function Hero(): JSX.Element {
  return (
    <section
      aria-label="Hero"
      className="relative w-full h-[70vh] md:h-[80vh] flex items-center"
      style={{
        backgroundImage:
          "url('/5g-networking-technology-background-with-blue-digital-line.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay to ensure text contrast */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-black/40"
        style={{ pointerEvents: "none" }}
      />

      {/* Content container */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-3xl text-white">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Building reliable 5G-ready solutions
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/90">
            We design and deliver scalable network applications and integrations
            that power the next generation of connectivity.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="#services"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-5 rounded-md shadow"
            >
              Our Services
            </a>
            <a
              href="#contact"
              className="inline-block bg-white/20 hover:bg-white/30 text-white font-medium py-3 px-5 rounded-md"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
