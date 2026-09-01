"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import * as React from "react";
import ReactMarkdown from "react-markdown";

interface Doc {
  pageContent?: string;
  metadata?: {
    loc?: {
      pageNumber?: number;
    };
    source?: string;
  };
}

interface IMessage {
  role: "assistant" | "user";
  content?: string;
  documents?: Doc[];
}

const ChatComponent: React.FC = () => {
  const [message, setMessage] = React.useState("");
  const [messages, setMessages] = React.useState<IMessage[]>([]);
  const [loading, setLoading] = React.useState(false);

  const handleSendChatMessage = async () => {
    if (!message.trim()) return;

    const currentMessage = message;
    setMessage("");

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: currentMessage,
      },
    ]);

    try {
      setLoading(true);

      const res = await fetch(
        `http://localhost:8000/chat?message=${encodeURIComponent(
          currentMessage
        )}`
      );

      const data = await res.json();

      console.log("API RESPONSE:", data);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data?.message,
          documents: data?.docs,
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Something went wrong while fetching response.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <div className="mb-28 space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg border ${
              msg.role === "user"
                ? "bg-gray-100"
                : "bg-white"
            }`}
          >
            <h3 className="font-bold capitalize mb-2">
              {msg.role}
            </h3>

            <div className="prose max-w-none">
              <ReactMarkdown>
                {msg.content || ""}
              </ReactMarkdown>
            </div>

            {msg.documents && msg.documents.length > 0 && (
              <details className="mt-4">
                <summary className="cursor-pointer font-semibold">
                  View Retrieved Documents
                </summary>

                <div className="mt-3 space-y-3">
                  {msg.documents.map((doc, i) => (
                    <div
                      key={i}
                      className="border rounded p-3 text-sm"
                    >
                      <p>{doc.pageContent}</p>
                    </div>
                  ))}
                </div>
              </details>
            )}
          </div>
        ))}
      </div>

      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[70vw] flex gap-3 bg-white p-4 border rounded-lg">
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask anything about the PDF..."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSendChatMessage();
            }
          }}
        />

        <Button
          onClick={handleSendChatMessage}
          disabled={loading || !message.trim()}
        >
          {loading ? "Loading..." : "Send"}
        </Button>
      </div>
    </div>
  );
};

export default ChatComponent;