"use client";

import { SendHorizonal } from "lucide-react";
import { Calistoga } from "next/font/google";
import { useForm, ValidationError } from '@formspree/react';
import Toast from "../components/ui/Toast";

const calistoga = Calistoga({
  subsets: ["latin"],
  weight: "400",
});

const Contact = () => {
  const [state, handleSubmit] = useForm("xlddawva");

    return (
      <section id="projects">
        <div className="max-w-3xl mx-auto py-10 px-6 sm:px-4">
          <h2 className={`text-4xl font-[950] mb-6 ${calistoga.className}`}>Contact Me</h2>
          <form onSubmit={handleSubmit}>
              <div className="flex gap-4">
                  <input type="text" id="name" name="name" placeholder="Name" className="bg-muted/20 shadow-xs rounded-lg px-4 py-2 w-full border-foreground/20 border focus:ring-primary outline-none ring-1 ring-transparent"/>
                  <input id="email" type="email" name="email" placeholder="Email" className="bg-muted/20 shadow-xs rounded-lg px-4 py-2 w-full border-foreground/20 border focus:ring-primary outline-none ring-1 ring-transparent"/>
              </div>
              <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
              />
              <textarea rows={4} placeholder="Leave feedback about the site, career opportunities or just say hello." name="message" id="message" className="focus:ring-primary outline-none ring-1 ring-transparent bg-muted/20 shadow-xs rounded-lg px-4 py-2 w-full border-foreground/20 border mt-6"></textarea>
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
              />
              <button type="submit" disabled={state.submitting} className="flex gap-2 items-center justify-center text-muted bg-foreground w-full py-2 mt-6 rounded-lg cursor-pointer hover:bg-foreground/90 transition-colors duration-75 ease-in">
                  <p>Send Message</p>
                  <SendHorizonal size={20}/>
              </button>
              {state.succeeded && <Toast message="message sent successfully"/>}
          </form>
      </div>
    </section>
    )
}

export default Contact;