"use client";

import { useState } from "react";
import { motion } from "framer-motion";

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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="title">Get In Touch</h2>
        </motion.div>

        {submitted ? (
          <motion.div
            className="contact-success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="success-icon">✓</span>
            <p>Message sent! I'll get back to you shortly.</p>
          </motion.div>
        ) : (
          <div className="contact-wrapper">
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <h3>Let's work together</h3>
              <p>
                Have a project in mind? I'd love to hear about it. Let's discuss
                how I can help bring your ideas to life.
              </p>

              <div className="contact-details">
                <div className="contact-detail-item">
                  <span className="contact-icon">📧</span>
                  <div>
                    <span className="contact-label">Email</span>
                    <a href="mailto:tuongvan92@gmail.com">tuongvan92@gmail.com</a>
                  </div>
                </div>
                <div className="contact-detail-item">
                  <span className="contact-icon">📱</span>
                  <div>
                    <span className="contact-label">Phone</span>
                    <a href="tel:+84338120165">+84 338 120 165</a>
                  </div>
                </div>
                <div className="contact-detail-item">
                  <span className="contact-icon">📍</span>
                  <div>
                    <span className="contact-label">Location</span>
                    <span>Ho Chi Minh City, Vietnam</span>
                  </div>
                </div>
              </div>

              <div className="contact-social">
                <a href="https://github.com/zxck5xz" target="_blank" rel="noreferrer">
                  <img src="/icons/github.svg" alt="GitHub" />
                </a>
                <a href="https://linkedin.com/in/dotuongvan" target="_blank" rel="noreferrer">
                  <img src="/icons/linkedin.svg" alt="LinkedIn" />
                </a>
              </div>
            </motion.div>

            <motion.form
              className="contact-form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="form-group">
                <input type="text" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="text" name="subject" placeholder="Subject" />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Your Message"
                  required
                />
              </div>
              <button type="submit" className="btn btn-red btn-full">
                Send Message
              </button>
            </motion.form>
          </div>
        )}
      </div>
    </section>
  );
}
