import React from "react"
import { NavLink } from "react-router-dom"
import { SocialIcon } from "react-social-icons"

export default function NavBar() {
    return (
        <header className="bg-blue-600 sticky top-0 z-50">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/" exact 
                    activeClassName="text-red-700"
                    className="inline-flex cursive items-center py-6 px-3 mr-4 text-blue-100 hover:text-white text-4xl font-bold tracking-widest">
                        Ayush Ashish
                    </NavLink>
                    <NavLink to="/post"
                    activeClassName="text-white bg-blue-700"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-100 hover:text-white">
                        Blog
                    </NavLink>
                    <NavLink to="/project"
                    activeClassName="text-white bg-blue-700"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-100 hover:text-white">
                        Projects
                    </NavLink>
                    <NavLink to="/about"
                    activeClassName="text-white bg-blue-700"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-100 hover:text-white">
                        About!
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://www.linkedin.com/in/ayushashish/" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                    <SocialIcon url="https://www.instagram.com/resilientfortitude/" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                    <SocialIcon url="https://www.youtube.com/channel/UCNJxOw8AINkkaTwS3VPCaNA/videos" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                </div>
            </div>
        </header>
    )
}