"use client";

import { Menu, Sun, X } from "lucide-react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { BsMoonStars } from "react-icons/bs";

const Navbar = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [theme, setTheme] = useState<"light" | "dark">("light");

    useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;

    if (savedTheme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
        setTheme("dark");
    }
    }, []);


    const toggleTheme = () => {
    const root = document.documentElement;

    if (theme === "dark") {
        root.removeAttribute("data-theme");
        localStorage.setItem("theme", "light");
        setTheme("light");
    } else {
        root.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        setTheme("dark");
    }
    };


    return (
        <nav className="sticky top-0 z-10 backdrop-blur-sm bg-background/50">
            <div className="max-w-3xl mx-auto py-4 flex items-center justify-between px-6 sm:px-4">
                <button 
                    onClick={toggleTheme}
                    className={`cursor-pointer h-8 w-8 flex items-center justify-center rounded-lg ${theme === "dark" ? "hover:bg-white/20 text-amber-500" : "hover:bg-primary/20 text-blue-400"}`}>
                    {theme === "dark" ? <Sun /> : <BsMoonStars />}
                </button>
                <ul className="hidden md:flex">
                    <li><a className="px-4 py-2 rounded-lg hover:opacity-85 transition-opacity duration-100 ease-in text-base font-medium" href="/">Home</a></li>
                    <li><a className="px-4 py-2 rounded-lg hover:opacity-85 transition-opacity duration-100 ease-in text-base font-medium" href="/projects">Projects</a></li>
                    <li><a className="px-4 py-2 rounded-lg hover:opacity-85 transition-opacity duration-100 ease-in text-base font-medium" href="/contact">Contact</a></li>
                </ul>
                <button 
                    onClick={()=>setShowModal((prev)=> !prev)}
                    className="md:hidden text-foreground hover:bg-primary/60 rounded-full h-9 w-9 flex items-center justify-center transition-colors duration-75 ease-in cursor-pointer">
                    <Menu size={20}/>
                </button>
                <Modal showModal={showModal} setShowModal={setShowModal}/>
            </div>
        </nav>
    )
}

const Modal = ({showModal, setShowModal}:{showModal:boolean, setShowModal: (value: boolean)=> void}) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;
    return createPortal(
        <>
        {showModal && (
            <div className="fixed inset-0 bg-foreground z-100 md:hidden flex flex-col items-end">
                <button onClick={()=>setShowModal(false)} className="text-muted w-9 h-9 m-4"><X size={30}/></button>
                <ul className="flex flex-col gap-4 w-full px-6 mt-20">
                    <li><a onClick={()=>setShowModal(false)} className="block w-full text-center py-4 text-muted rounded-lg hover:opacity-85 transition-opacity duration-100 ease-in text-4xl font-medium" href="/">Home</a></li>
                    <li><a onClick={()=>setShowModal(false)} className="py-4 block w-full text-center text-muted rounded-lg hover:opacity-85 transition-opacity duration-100 ease-in text-4xl font-medium" href="/projects">Projects</a></li>
                    <li><a onClick={()=>setShowModal(false)} className="py-4 block w-full text-center text-muted rounded-lg hover:opacity-85 transition-opacity duration-100 ease-in text-4xl font-medium" href="/contact">Contact</a></li>
                </ul>
            </div>
        )}
        </>,
        document.body
    )
}

export default Navbar;