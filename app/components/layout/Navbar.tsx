"use client";

import { Menu, Sun, X } from "lucide-react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { BsMoonStars } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import Magnetic from "@/app/components/ui/Magnetic";

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
        <nav className="sticky top-0 z-20 backdrop-blur-sm bg-background/50">
            <div className="max-w-3xl mx-auto py-4 flex items-center justify-between px-6 sm:px-4">
                <Magnetic>
                    <button
                        onClick={toggleTheme}
                        className="group relative h-10 w-10 flex items-center justify-center rounded-xl bg-muted/20 border border-primary/10 hover:border-primary/30 transition-all duration-300 cursor-pointer overflow-hidden backdrop-blur-md shadow-sm"
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            {theme === "dark" ? (
                                <motion.div
                                    key="sun"
                                    initial={{ y: 20, opacity: 0, rotate: -90 }}
                                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                                    exit={{ y: -20, opacity: 0, rotate: 90 }}
                                    transition={{ duration: 0.3, ease: "backOut" }}
                                    className="text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.4)]">
                                    <Sun size={20} fill="currentColor" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="moon"
                                    initial={{ y: 20, opacity: 0, rotate: -90 }}
                                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                                    exit={{ y: -20, opacity: 0, rotate: 90 }}
                                    transition={{ duration: 0.3, ease: "backOut" }}
                                    className="text-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.4)]">
                                    <BsMoonStars size={18} fill="currentColor" />
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-xl ${theme === 'dark' ? 'bg-amber-400' : 'bg-blue-500'}`} />
                    </button>
                </Magnetic>
                <ul className="hidden md:flex">
                    <Magnetic><li><a className="px-4 py-2 rounded-lg hover:opacity-85 transition-opacity duration-100 ease-in text-base font-semibold" href="/">Home</a></li></Magnetic>
                    <Magnetic><li><a className="px-4 py-2 rounded-lg hover:opacity-85 transition-opacity duration-100 ease-in text-base font-semibold" href="/projects">Projects</a></li></Magnetic>
                    <Magnetic><li><a className="px-4 py-2 rounded-lg hover:opacity-85 transition-opacity duration-100 ease-in text-base font-semibold" href="/contact">Contact</a></li></Magnetic>
                </ul>
                <button
                    onClick={() => setShowModal((prev) => !prev)}
                    className="md:hidden text-foreground hover:bg-primary/60 rounded-full h-9 w-9 flex items-center justify-center transition-colors duration-75 ease-in cursor-pointer">
                    <Menu size={20} />
                </button>
                <Modal showModal={showModal} setShowModal={setShowModal} />
            </div>
        </nav>
    )
}

const Modal = ({ showModal, setShowModal }: { showModal: boolean, setShowModal: (value: boolean) => void }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return createPortal(
        <AnimatePresence>
            {showModal && (
                <motion.div
                    initial={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
                    animate={{ clipPath: 'circle(150% at calc(100% - 40px) 40px)' }}
                    exit={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
                    transition={{
                        type: "spring",
                        stiffness: 35,
                        restDelta: 0.01,
                        damping: 11
                    }}
                    className="fixed inset-0 bg-foreground z-100 md:hidden flex flex-col items-end overflow-hidden">
                    <button onClick={() => setShowModal(false)} className="text-muted w-9 h-9 m-4 cursor-pointer">
                        <X size={30} />
                    </button>
                    <ul className="flex flex-col gap-4 w-full px-6 mt-20">
                        {[
                            { name: "Home", href: "/" },
                            { name: "Projects", href: "/projects" },
                            { name: "Contact", href: "/contact" }
                        ].map((item, i) => (
                            <motion.li
                                key={item.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + (i * 0.1), duration: 0.5 }}>
                                <a
                                    onClick={() => setShowModal(false)}
                                    className="block w-full text-center py-4 text-muted rounded-lg hover:opacity-85 transition-opacity duration-100 ease-in text-4xl font-medium"
                                    href={item.href}>
                                    {item.name}
                                </a>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    )
}

export default Navbar;