"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("https://formspree.io/f/yourFormID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) setSubmitted(true);
    } catch {
      setSubmitted(true);
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-title">
          <h2 className="title">Contact</h2>
        </div>

        {submitted ? (
          <div style={{ maxWidth: 500, margin: "20px auto", padding: 20, border: "1px solid var(--gray-2)" }}>
            <p>Message sent. I&apos;ll get back to you shortly.</p>
          </div>
        ) : (
          <>
            <div className="contact-content">
              <p>
                Let&apos;s discuss your project and how I can help.
                <br />
                Feel free to reach out!
              </p>
              <div style={{ marginTop: "20px", fontSize: "14px", color: "var(--gray)" }}>
                <p>📞 +84 338 120 165</p>
                <p>✉️ tuongvan92@gmail.com</p>
                <p>🔗 linkedin.com/in/dotuongvan</p>
                <p>📍 Ho Chi Minh City, Vietnam</p>
              </div>
            </div>

            <form className="contactForm" onSubmit={handleSubmit}>
              <div className="input-box">
                <input type="text" name="name" placeholder="Name" required />
                <input type="email" name="email" placeholder="Email Address" required />
              </div>
              <textarea name="message" cols={30} rows={10} placeholder="Your Message" required />
              <div className="contact-button">
                <button type="submit" className="btn btn-red">Send Message</button>
              </div>
            </form>
          </>
        )}

        <div className="response" />
      </div>
    </section>
  );
}
