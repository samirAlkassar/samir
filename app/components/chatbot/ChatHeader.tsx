import { Bot } from "lucide-react";
import { Calistoga } from "next/font/google";

const calistoga = Calistoga({
  subsets: ["latin"],
  weight: "400",
});

const ChatHeader = ({setIsOpen}:{setIsOpen: (value: boolean)=>void}) => {
    return (
        <div className="bg-accent px-4 py-2 flex justify-between items-center border-b border-secondary/30">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-muted/40 rounded-full flex items-center justify-center">
                <Bot />
                </div>
                <div>
                <h4 className={`text-sm font-bold text-gray-800 ${calistoga.className}`}>Samir AI Support</h4>
                <span className="text-xs text-foreground/70">Online</span>
                </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-foreground/60 hover:text-foreground transition-colors">
                <i className="fa-solid fa-xmark text-lg"></i>
            </button>
        </div>
    )
};

export default ChatHeader;