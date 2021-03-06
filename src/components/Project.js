import React, { useEffect, useState } from "react";
import sanityClient from "../client";

export default function Project() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
            title,
            date,
            description,
            link
        }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);
  return (
    <main className="bg-blue-100 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive" style={{paddingTop: "2%"}}>Code</h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12" style={{paddingTop: "2%"}}>
          My Projects
        </h2>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectData &&
            projectData.map((project, index) => (
              <article className="relative rounded-lg shadow-xl bg-white p-16" key={index}>
                <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-blue-700">
                  <a
                    href={project.link}
                    alt={project.title}
                    target="_blank"
                    rel="noopener noreferrer"
                    
                  >
                    {project.title}
                  </a>
                </h3>
                <div className="text-gray-500 text-xs space-x-4">
                  <span>
                    <strong className="font-bold">Completed on</strong>{" "}
                    {new Date(project.date).toLocaleDateString()}
                  </span>
                  <p className="my-6 text-lg text-gray-700 leading-relaxed" >
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-blue-500 hover:underline"
                    
                  >
                    View The Project{" "}
                    <span role="img" aria-label="right pointer">
                      ????
                    </span>
                  </a>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
}
