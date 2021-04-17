import React from "react";
import uielement from "../images/uielement.svg";

export default function Home() {
  return (
    <main>
      <div className="bg-blue-500">
        <img
          src={uielement}
          alt="design-element"
          className="absolute right-10 object-cover"
          style={{ padding: "5rem 1rem", width: "30rem", opacity: "0.75" }}
        />
        <section className="relative min-h-screen pt-48 lg:pt-64">
          <h1
            className="text-6xl text-white leading-none lg:leading-snug"
            style={{ paddingLeft: "10%" }}
          >
            Coffee, Words and Code
          </h1>
          <h3
            className="text-4xl text-indigo-200"
            style={{ paddingLeft: "10%", paddingTop: "5%" }}
          >
            Making the perfect blend
          </h3>
        </section>
      </div>
    </main>
  );
}
