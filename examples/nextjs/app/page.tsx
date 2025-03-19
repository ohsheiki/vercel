"use client";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    if (message.trim() === "") return;
    setMessages([...messages, { name, message }]);
    setMessage("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-100 p-4">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-red-600 mb-4">
          Você Presente!
        </h1>

        {/* Formulário de Cadastro */}
        <input
          type="text"
          placeholder="Seu Nome"
          className="w-full p-2 mb-2 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Seu Email"
          className="w-full p-2 mb-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Caixa de Mensagem */}
        <textarea
          placeholder="Escreva uma mensagem motivacional..."
          className="w-full p-2 mb-2 border rounded"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        {/* Botão de Envio */}
        <button
          onClick={handleSendMessage}
          className="w-full bg-red-500 text-white p-2 rounded-lg hover:bg-red-600"
        >
          Enviar Mensagem
        </button>

        {/* Lista de Mensagens */}
        <div className="mt-4">
          <h2 className="text-lg font-bold">Mensagens enviadas:</h2>
          <ul className="mt-2">
            {messages.map((msg, index) => (
              <li
                key={index}
                className="p-2 bg-gray-100 rounded-md mb-2 shadow-sm"
              >
                <strong>{msg.name}:</strong> {msg.message}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
