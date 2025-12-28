import { SendHorizonal } from "lucide-react";

type ChatInputProps = {
    inputValue: string;
    setInputValue: (value:string)=> void;
    handleSendMessage: ()=> void; 
    isTyping: boolean
}

const ChatInput = ({inputValue, setInputValue, handleSendMessage, isTyping}: ChatInputProps) => {
    return (
        <div className="p-4 bg-muted/90 border-t border-secondary/30">
            <div className="relative">
                <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask about Samir..."
                className="w-full bg-background border border-foreground/20 rounded-lg pl-4 pr-12 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                />
                <button 
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                className={`absolute right-1.5 top-1.5 w-9 h-9 rounded-lg flex items-center justify-center transition-all cursor-pointer ${
                    inputValue.trim() && !isTyping ? 'bg-primary text-background hover:bg-accent' : 'bg-muted text-foreground/50'
                }`}
                >
                <SendHorizonal />
                </button>
            </div>
        </div>
    )
};

export default ChatInput;