import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client";

export default function Post() {
  const [postData, setPost] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  return (
    <main className="bg-blue-300 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl text-gray-800 flex justify-center cursive" style={{paddingTop: "2%"}}>Words</h1>
        <h2 className="text-lg text-gray-800 flex justify-center mb-12" style={{paddingTop: "2%"}}>
          My Blog Posts
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postData && postData.map((post, index) => (
            <article key={index}>
              <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                <span
                  className="block h-64 relative rounded shadow-2xl leading-snug bg-white border-l-8 border-purple-500"
                >
                  <img
                    src={post.mainImage.asset.url}
                    alt={post.mainImage.alt}
                    className="w-full h-full rounded-r object-cover absolute"
                  />
                  <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                    <h3 className="text-gray-800 text-lg font-bold px-3 py-4 bg-blue-100 text-gray-500 bg-opacity-75 rounded">
                      {post.title}
                    </h3>
                  </span>
                </span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
