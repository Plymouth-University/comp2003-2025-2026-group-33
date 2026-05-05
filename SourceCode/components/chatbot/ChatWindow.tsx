"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { sendMessage } from "@/services/chatbotService";
type Message = {
  role: "user" | "bot";
  text: string;
  action?: {
    label: string;
    route: string;
  };
};
export default function ChatWindow() {
  const getGreeting = () => {
  if (typeof window !== "undefined") {
    const path = window.location.pathname;

    if (path.includes("pricing")) return "Looking for pricing plans? I can help!";
    if (path.includes("contact")) return "Need help? You can contact us here.";
    if (path.includes("faq")) return "Have questions? I can guide you.";
  }

  return "Hi! 👋 How can I help you today?";
};

const [messages, setMessages] = useState<Message[]>([
  { role: "bot", text: getGreeting() }
]);

  const [input, setInput] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>(["pricing", "contact"]);
  const [showCTA, setShowCTA] = useState(false);
  const endRef = useRef<HTMLDivElement | null>(null);

  const handleSend = async (customInput?: string) => {
  const messageToSend = customInput || input;

  if (!messageToSend.trim()) return;

  const userMsg: Message = { role: "user", text: messageToSend };
  setMessages(prev => [...prev, userMsg]);

  setInput("");
  setLoading(true);

  await new Promise((res) => setTimeout(res, 600)); // typing delay
  const res = await sendMessage(messageToSend);

  const lower = messageToSend.toLowerCase();
  
  let botMessage: Message = { role: "bot", text: res };
  
if (
  lower.includes("price") ||
  lower.includes("pricing") ||
  lower.includes("plan") ||
  lower.includes("plans")
) {
  botMessage.action = {
    label: "View Pricing",
    route: "/pricing"
  };
} else if (
  lower.includes("contact") ||
  lower.includes("support") ||
  lower.includes("help")
) {
  botMessage.action = {
    label: "Contact Us",
    route: "/contact"
  };
} else if (
  lower.includes("trial") ||
  lower.includes("start") ||
  lower.includes("free")
) {
  botMessage.action = {
    label: "Start Free Trial 🚀",
    route: "/pricing"
  };
}

setMessages(prev => [...prev, botMessage]);

  setLoading(false);
};
useEffect(() => {
  endRef.current?.scrollIntoView({ behavior: "smooth" });
}, [messages, loading]);
  return (
    <div className="w-[90vw] sm:w-80 h-[70vh] sm:h-96 bg-white text-black shadow-xl rounded-xl flex flex-col border border-gray-300">
      <div className="p-3 border-b border-gray-200 font-semibold bg-yellow-400 text-black rounded-t-xl">
        AI Assistant
        </div>
        <div className="p-2 flex gap-2 flex-wrap">
            {suggestions.map((s, i) => (
            <button
            key={i}
            onClick={() => handleSend(s)}
            className="bg-yellow-100 hover:bg-yellow-200 text-black px-3 py-1 rounded-full text-sm"
            >
            {s}
            </button>
        ))}
        </div>

      <div className="flex-1 p-2 overflow-y-auto">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
            className={`max-w-[70%] px-3 py-2 rounded-lg m-1 text-sm ${
    m.role === "user"
      ? "bg-yellow-400 text-black"
      : "bg-gray-200 text-black"
}`}
>
              <div>
                {m.text}
                
                {m.action && (
                  <button
                  onClick={() => router.push(m.action!.route)}
                  className="mt-2 bg-yellow-400 hover:bg-yellow-500 text-black px-3 py-1 rounded-md text-xs font-semibold"
                  >
                    {m.action.label}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
        {loading && (
            <div className="text-sm text-gray-500 flex gap-1 ml-2">
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
            </div>
        )}
        <div ref={endRef} />
      </div>
      {showCTA && (
        <div className="p-2">
            <button
            onClick={() => window.location.href = "#"}
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-2 rounded font-semibold"
            >
            Start Free Trial 🚀
            </button>
        </div>
)}
      <div className="p-2 flex gap-2">
        <input
        className="border border-gray-300 rounded px-2 py-1 flex-1 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
            if (e.key === "Enter") {
                handleSend();
            }
        }}
        />
        <button onClick={() => handleSend()} className="bg-yellow-400 hover:bg-yellow-500 text-black px-3 rounded font-semibold">
          Send
        </button>
      </div>
    </div>
  );
}