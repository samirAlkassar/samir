import { SendHorizonal } from "lucide-react";
import { Calistoga } from "next/font/google";

const calistoga = Calistoga({
  subsets: ["latin"],
  weight: "400",
});

const Contact = () => {
    return (
<section id="projects">
      <div className="max-w-3xl mx-auto py-10 px-6 sm:px-4">
        <h2 className={`text-4xl font-[950] mb-6 ${calistoga.className}`}>Contact Me</h2>
        <form action="">
            <div className="flex gap-4">
                <input type="text" placeholder="Name" className="bg-muted/20 shadow-xs rounded-lg px-4 py-2 w-full border-foreground/20 border focus:ring-primary outline-none ring-1 ring-transparent"/>
                <input type="text" placeholder="Email" className="bg-muted/20 shadow-xs rounded-lg px-4 py-2 w-full border-foreground/20 border focus:ring-primary outline-none ring-1 ring-transparent"/>
            </div>
            <textarea rows={4} placeholder="Leave feedback about the site, career opportunities or just say hello." name="" id="" className="focus:ring-primary outline-none ring-1 ring-transparent bg-muted/20 shadow-xs rounded-lg px-4 py-2 w-full border-foreground/20 border mt-6"></textarea>
            <button className="flex gap-2 items-center justify-center text-muted bg-foreground w-full py-2 mt-6 rounded-lg cursor-pointer hover:bg-foreground/90 transition-colors duration-75 ease-in">
                <p>Send Message</p>
                <SendHorizonal size={20}/>
            </button>
        </form>

      </div>
    </section>
    )
}

export default Contact;