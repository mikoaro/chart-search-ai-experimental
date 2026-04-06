import React, { useState } from 'react';
import { ChatBot, SendAlt, Close } from '@carbon/icons-react';
import './MedicalBot.scss';

export const MedicalBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hello! How can I assist with patient data today?' }
  ]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage = { role: 'user', text: inputValue };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    // Simple Logic: Simulate the specific bot response
    setTimeout(() => {
      let botResponse = "I'm sorry, I can only provide specific vitals like Oxygen Saturation right now.";
      
      if (inputValue.toLowerCase().includes('oxygen saturation')) {
        botResponse = "Oxygen saturation at 95%.";
      }

      setMessages((prev) => [...prev, { role: 'bot', text: botResponse }]);
    }, 600);
  };

  return (
    <div className="medical-bot-container">
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <span>Medical Assistant</span>
            <button onClick={() => setIsOpen(false)} className="close-chat">
              <Close size={16} />
            </button>
          </div>
          <div className="chat-body">
            {messages.map((msg, i) => (
              <div key={i} className={`message ${msg.role}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input-area">
            <input 
              type="text" 
              placeholder="Ask about vitals..." 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            <button onClick={handleSend} className="send-btn">
              <SendAlt size={20} />
            </button>
          </div>
        </div>
      )}

      <button 
        className={`fab-button ${isOpen ? 'active' : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
        title="Open Medical Bot"
      >
        <ChatBot size={24} />
      </button>
    </div>
  );
};