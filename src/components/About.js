import React, {useEffect, useState} from "react"
import sanityClient from "../client"
import BlockContent from "@sanity/block-content-to-react"

export default function About() {
    const [author, setAuthor] = useState(null)
    useEffect(() => {
        sanityClient
        .fetch(
            `*[_type == "author"]{
                name,
                bio,
                "authorImage": image.asset->url
            }`
        ).then((data) => setAuthor(data[0])).catch(console.error)
    }, []);
    if (!author) return <div>Loading...</div>
    return (
        <main className="relative">
            <div className="p-10 lg:pt-48 container mx-auto relative">
                <section className="bg-blue-800 rounded-lg shadow 2xl lg:flex p-20">
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="cursive text-6xl text-blue-100 mb-4">Hello! This is Ayush</h1>
                        <div className="prose lg:prose-xl text-white">
                            <BlockContent blocks={author.bio} projectId="lcopgj9z" dataset="production"/>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )


        
}