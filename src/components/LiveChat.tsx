import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "./ui/button";

/**
 * Live Chat Widget
 * Simulated chat interface - replace with real integration like:
 * - Intercom (intercom.com)
 * - Tawk.to (tawk.to) - Free
 * - Crisp (crisp.chat)
 * - Drift (drift.com)
 * 
 * For real implementation, load their script and use their API
 */
export function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasNewMessage, setHasNewMessage] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; sender: "user" | "bot"; time: string }>>([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    // Show notification bubble after 10 seconds
    const timer = setTimeout(() => {
      if (!isOpen && messages.length === 0) {
        setHasNewMessage(true);
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, [isOpen, messages.length]);

  useEffect(() => {
    // Send welcome message when chat opens for the first time
    if (isOpen && messages.length === 0) {
      const welcomeMessage = {
        text: "Hi there! 👋 Got questions about AI? I'm here to help folks in Bournemouth, Poole and Dorset understand how AI can help their business. Fire away!",
        sender: "bot" as const,
        time: new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })
      };
      setMessages([welcomeMessage]);
      setHasNewMessage(false);
    }
  }, [isOpen, messages.length]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setHasNewMessage(false);
    
    if ((window as any).trackEvent) {
      (window as any).trackEvent(isOpen ? "chat_closed" : "chat_opened");
    }
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      text: inputValue,
      sender: "user" as const,
      time: new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");

    // Simulate bot response
    setTimeout(() => {
      const botMessage = {
        text: "Thanks for your message! This is a demo chat widget. In the real version, you'd be connected to our team or an AI assistant. For now, please book a free consultation or drop us an email at hello@aigency.limited",
        sender: "bot" as const,
        time: new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);

    if ((window as any).trackEvent) {
      (window as any).trackEvent("chat_message_sent");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={handleToggle}
        className="fixed bottom-6 left-6 z-50 p-4 rounded-full border-2 border-purple-500 hover:scale-110 transition-transform duration-300 brutalist-shadow-lg group"
        style={{
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          background: "rgba(160, 45, 255, 0.2)",
          boxShadow: "0 8px 32px rgba(160, 45, 255, 0.4)"
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" style={{ color: "#a02dff" }} aria-hidden="true" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-6 h-6" style={{ color: "#a02dff" }} aria-hidden="true" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {hasNewMessage && !isOpen && (
          <motion.div
            className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring" }}
          />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-24 left-6 z-50 w-[90vw] sm:w-96 h-[500px] rounded-3xl border-2 border-cyan-500 brutalist-shadow-lg overflow-hidden flex flex-col"
            style={{
              backdropFilter: "blur(24px) saturate(200%)",
              WebkitBackdropFilter: "blur(24px) saturate(200%)",
              background: "rgba(5, 5, 5, 0.95)",
              boxShadow: "0 8px 32px rgba(0, 217, 255, 0.3), 0 0 0 1px rgba(0, 217, 255, 0.2)"
            }}
          >
            {/* Header */}
            <div className="p-4 border-b-2 border-cyan-500" style={{
              background: "rgba(0, 217, 255, 0.1)"
            }}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border-2 border-cyan-500 flex items-center justify-center" style={{
                    background: "rgba(0, 217, 255, 0.2)"
                  }}>
                    <MessageCircle className="w-5 h-5" style={{ color: "#a02dff" }} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-sm">AIGENCY Support</h3>
                    <p className="text-xs opacity-60">We typically reply instantly</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl border-2 ${
                      message.sender === "user"
                        ? "border-purple-500"
                        : "border-border"
                    }`}
                    style={{
                      background: message.sender === "user" 
                        ? "rgba(160, 45, 255, 0.2)" 
                        : "rgba(255, 255, 255, 0.1)",
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)"
                    }}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className="text-xs opacity-50 mt-1">{message.time}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t-2 border-cyan-500" style={{
              background: "rgba(0, 217, 255, 0.05)"
            }}>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 rounded-xl border-2 border-border focus:border-cyan-500 focus:outline-none transition-colors text-sm"
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)"
                  }}
                  aria-label="Type your message"
                />
                <Button
                  onClick={handleSend}
                  size="sm"
                  className="px-4"
                  disabled={!inputValue.trim()}
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" aria-hidden="true" />
                </Button>
              </div>
              <p className="text-xs opacity-50 mt-2 text-center">
                Press Enter to send
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
