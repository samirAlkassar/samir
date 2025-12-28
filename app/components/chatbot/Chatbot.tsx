"use client";

import React, { useState, useRef, useEffect } from 'react';
import { sendMessageToGemini } from '../../api/chat/route';
import { Bot, SendHorizonal } from 'lucide-react';
import ChatHeader from './ChatHeader';
import ChatInput from './ChatInput';


export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hi! I'm Samir's AI assistant. Ask me anything about his experience, skills, or projects!" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isTyping) return;

    const userMessage = inputValue;
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInputValue('');
    setIsTyping(true);

    try {
      const response = await sendMessageToGemini(userMessage, messages);
      setMessages(prev => [...prev, { role: 'model', text: response }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, I had trouble connecting. Please try again." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-3 right-3 md:bottom-6 md:right-6 z-30 flex flex-col items-end pl-3">
      {/* Chat Window */}
      {isOpen && (
        <div className="w-full sm:w-95 h-120 rounded-lg border border-secondary/50 bg-background flex flex-col mb-4 overflow-hidden shadow-lg backdrop-blur-sm animate-fade-up">
          {/* Header */}
            <ChatHeader setIsOpen={setIsOpen}/>

          {/* Messages Container */}
          <div className="grow overflow-y-auto p-6 space-y-3 scrollbar-hide">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm border border-foreground/15 ${
                  msg.role === 'user'
                  ? 'bg-primary text-background rounded-tr-none'
                  : 'bg-background text-foreground rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-background text-foreground px-4 py-3 rounded-2xl rounded-tl-none text-sm flex gap-1 items-center opacity-70">
                  <div className="w-1.5 h-1.5 bg-foreground rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-foreground rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-foreground rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
            <ChatInput inputValue={inputValue} setInputValue={setInputValue} handleSendMessage={handleSendMessage} isTyping={isTyping}/>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-lg flex text-gray-800 items-center justify-center shadow-lg transition-all active:scale-[97%] group cursor-pointer bg-accent hover:bg-accent/80">
        <Bot size={28}/>
      </button>
      <FirstMessage showModal={isOpen}/>
    </div>
  );
};


const FirstMessage = ({ showModal }: { showModal: boolean }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const time = showModal ?  0 : 6000
    const hasSeenMessage = localStorage.getItem("firstMessageShown");

    if (!showModal && !hasSeenMessage) {
      setVisible(true);

      const timer = setTimeout(() => {
        setVisible(false);
        localStorage.setItem("firstMessageShown", "true");
      }, time);

      return () => clearTimeout(timer);
    }
  }, [showModal]);

  if (visible) {
    return (
      <div className="firstMessage bg-background border border-foreground/40 px-4 py-2 rounded-t-lg rounded-bl-lg absolute right-16 bottom-0 w-80 animate-slideInRight overflow-hidden">
        Hi! I'm Samir's AI assistant. Ask me anything about his experience, skills, or projects!
      </div>
    );
  }

  return null;
};

export default Chatbot;
