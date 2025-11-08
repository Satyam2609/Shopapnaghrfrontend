"use client";
import { JSX, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

type Message = {
  sender: string;
  text: string;
};

export default function Chat(): JSX.Element {
  const [Allusers, setAllusers] = useState<string[]>([]);
  const [socket, setSocket] = useState<Socket | null>(null);
  const [message, setMessage] = useState<string[]>([]);
  const [messageInput, setMessageInput] = useState("");
  const [receiverId, setReceiverId] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const username = user?.username || "Guest";
    setUserId(username);

    const newSocket = io("http://localhost:5000");
    setSocket(newSocket);

    newSocket.emit("register", username);

    newSocket.on("Alluser", (list: string[]) => {
      setAllusers(list.filter((u) => u !== username));
    });

    newSocket.on("receviermsg", ({ senderId, text }: { senderId: string; text: string }) => {
      setMessage((prev) => [...prev, `${senderId} -> ${text}`]);
    });

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const handleSend = () => {
    if (receiverId && messageInput && socket) {
      socket.emit("privatemessage", {
        senderId: userId,
        receiverId,
        text: messageInput,
      });
      setMessage((prev) => [...prev, `me -> ${messageInput}`]);
      setMessageInput("");
    }
  };

  return (
    <div className="h-full w-full flex flex-col gap-4 p-4">
      <div className="flex gap-4 flex-1">
        {/* Users list */}
        <div className="h-full max-w-xs p-4 shadow-2xl flex flex-col gap-2">
          {Allusers.map((u) => (
            <div
              key={u}
              onClick={() => setReceiverId(u)}
              className={`cursor-pointer p-2 rounded hover:bg-gray-200 ${
                receiverId === u ? "bg-gray-300 font-bold" : ""
              }`}
            >
              {u}
            </div>
          ))}
        </div>

        {/* Chat messages */}
        <div className="h-full flex-1 shadow-2xl p-4 flex flex-col gap-2 overflow-y-auto">
          {message.map((m, i) => {
            const isMe = m.startsWith("me ->");
            return (
              <div
                key={i}
                className={`flex ${isMe ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`p-2 rounded-lg max-w-[60%] ${
                    isMe ? "bg-blue-500 text-white" : "bg-gray-300 text-black"
                  }`}
                >
                  {m}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Input */}
      <div className="flex gap-2 mt-4">
        <input
          type="text"
          placeholder="Send message"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          className="flex-1 p-2 border rounded"
        />
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  );
}
