import { Facebook, Github, Linkedin, Mail } from "lucide-react"

const Footer = () => {
    return (
        <footer>
            <div className="max-w-3xl mx-auto py-14 flex flex-col-reverse gap-2 md:gap-0 md:flex-row items-center justify-between px-6 sm:px-4">
                <p className="text-sm font-medium">© 2025 samir-elkassar.com | privacy?</p>
                <div className="flex gap-2">
                    <a 
                        href="https://www.linkedin.com/in/samir-elkassar-17a3a523a/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-10 w-10 bg-muted/5 flex items-center justify-center rounded-full cursor-pointer hover:bg-muted transition-colors duration-100 ease-in">
                        <Linkedin size={20}/>
                    </a>
                    <a 
                        href="https://github.com/samirAlkassar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-10 w-10 bg-muted/5 flex items-center justify-center rounded-full cursor-pointer hover:bg-muted transition-colors duration-100 ease-in">
                        <Github size={20}/>
                    </a>
                    <a 
                        href="https://www.facebook.com/samir.elkassr/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-10 w-10 bg-muted/5 flex items-center justify-center rounded-full cursor-pointer hover:bg-muted transition-colors duration-100 ease-in">
                        <Facebook size={20}/>
                    </a>
                    <a 
                        href="samir.alkcar@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-10 w-10 bg-muted/5 flex items-center justify-center rounded-full cursor-pointer hover:bg-muted transition-colors duration-100 ease-in">
                        <Mail size={20}/>
                    </a>
                </div> 
            </div>
        </footer>
    )
}

export default Footer;