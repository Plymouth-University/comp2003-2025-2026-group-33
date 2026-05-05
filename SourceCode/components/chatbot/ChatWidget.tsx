"use client";

import { useState, useRef, useEffect } from "react";
import ChatWindow from "./ChatWindow";
import { Bot } from "lucide-react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  const chatRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;

      // Ignore clicks inside chat OR button
      if (
        chatRef.current?.contains(target) ||
        buttonRef.current?.contains(target)
      ) {
        return;
      }

      setOpen(false);
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {open && (
        <div
          ref={chatRef}
          className="fixed bottom-20 right-2 sm:right-4 z-50 transition-all duration-300 ease-out"
        >
          <ChatWindow />
        </div>
      )}

      <button
      ref={buttonRef}
      onClick={() => setOpen((prev) => !prev)}
      className="fixed bottom-4 right-4 sm:right-6 
             bg-yellow-400 text-black 
             px-4 sm:px-5 py-2.5 sm:py-3 
             rounded-2xl 
             shadow-lg hover:bg-yellow-500 
             transition-all hover:scale-105 
             flex items-center gap-2 z-50"
      >
      <Bot size={22} />
      <span className="hidden sm:inline font-semibold">Chat</span>
      </button>
    </>
  );
}