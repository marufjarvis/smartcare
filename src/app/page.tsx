"use client";

import { useState } from "react";
import "./home.css";

export default function Home() {
  const [messages, setMessages] = useState([
    { id: 1, type: "bot", text: "Hello! I'm your SmartCare AI assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMsg = { id: Date.now(), type: "user", text: input };
    setMessages((prev) => [...prev, newMsg]);
    setInput("");

    // Mock AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, type: "bot", text: "I've noted your symptoms. Based on your current vitals and history, your predictive risk remains low, but please ensure you get adequate rest." }
      ]);
    }, 1000);
  };

  return (
    <main className="container animate-fade-in">
      <section className="hero-section">
        <h1 className="hero-title">
          Welcome to <span className="text-gradient">SmartCare</span>
        </h1>
        <p className="hero-subtitle">
          Your personal AI-driven health assistant. We analyze your data to provide predictive diagnostics and real-time wellness insights.
        </p>
      </section>

      <div className="dashboard-grid">
        {/* Chatbot Interface */}
        <div className="glass-panel">
          <div className="panel-header">
            <h2>✨ AI Health Assistant</h2>
          </div>
          <div className="panel-body">
            <div className="chat-messages">
              {messages.map((msg) => (
                <div key={msg.id} className={`chat-bubble ${msg.type}`}>
                  {msg.text}
                </div>
              ))}
            </div>
            <form className="chat-input-area" onSubmit={handleSend}>
              <input
                type="text"
                className="input-field"
                placeholder="Describe your symptoms or ask a question..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button type="submit" className="btn btn-primary">
                Send
              </button>
            </form>
          </div>
        </div>

        {/* Predictive Diagnostics */}
        <div className="glass-panel">
          <div className="panel-header">
            <h2>📊 Predictive Diagnostics</h2>
          </div>
          <div className="panel-body">
            <div className="metric-grid">
              <div className="metric-item">
                <div className="metric-value">98%</div>
                <div className="metric-label">Overall Health Score</div>
              </div>
              <div className="metric-item">
                <div className="metric-value text-gradient">72 bpm</div>
                <div className="metric-label">Avg Resting Heart Rate</div>
              </div>
            </div>

            <h3 style={{ marginBottom: "1rem", color: "var(--text-main)" }}>Risk Assessments</h3>
            
            <div className="risk-card">
              <div className="risk-info">
                <h3>Cardiovascular Risk</h3>
                <p>Based on recent vitals & history</p>
              </div>
              <div className="risk-score score-low">Low</div>
            </div>

            <div className="risk-card">
              <div className="risk-info">
                <h3>Stress & Fatigue</h3>
                <p>Detected from sleep patterns</p>
              </div>
              <div className="risk-score score-medium">Medium</div>
            </div>

            <div className="risk-card">
              <div className="risk-info">
                <h3>Respiratory Irregularities</h3>
                <p>Seasonal allergy impact</p>
              </div>
              <div className="risk-score score-low">Low</div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
