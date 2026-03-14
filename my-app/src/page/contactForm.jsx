import { useState } from "react";

const SUBJECTS = ["Product question", "Partnership", "Press inquiry", "Careers", "Other"];

const ContactForm = () => {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1400);
  };

  return (
    <>
      <style>{styles}</style>
      <div className="cf-wrap">
        <div className="cf-container">
          {submitted ? (
            <div className="cf-success">
              <div className="cf-success-icon">✦</div>
              <h2>Message received</h2>
              <p>Our team will follow up within 1 business day.</p>
            </div>
          ) : (
            <>
              <div className="cf-header">
                <div className="cf-eyebrow">Get in touch</div>
                <h1 className="cf-title">Say <em>hello</em></h1>
                <p className="cf-subtitle">
                  We'd love to hear from you.<br />
                  Fill in the form below and we'll be in touch soon.
                </p>
              </div>

              <form className="cf-form" onSubmit={handleSubmit}>
                <div className="cf-row">
                  <div className="cf-field">
                    <label className="cf-label" htmlFor="firstName">First name</label>
                    <input className="cf-input" id="firstName" name="firstName" placeholder="Jane"
                      value={form.firstName} onChange={handleChange} required />
                  </div>
                  <div className="cf-field">
                    <label className="cf-label" htmlFor="lastName">Last name</label>
                    <input className="cf-input" id="lastName" name="lastName" placeholder="Smith"
                      value={form.lastName} onChange={handleChange} required />
                  </div>
                </div>

                <div className="cf-field">
                  <label className="cf-label" htmlFor="email">Email address</label>
                  <input className="cf-input" type="email" id="email" name="email"
                    placeholder="jane@example.com" value={form.email} onChange={handleChange} required />
                </div>

                <div className="cf-field">
                  <label className="cf-label" htmlFor="subject">Subject</label>
                  <select className="cf-select" id="subject" name="subject"
                    value={form.subject} onChange={handleChange}>
                    <option value="" disabled>Select a topic…</option>
                    {SUBJECTS.map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>

                <div className="cf-field">
                  <label className="cf-label" htmlFor="message">Message</label>
                  <textarea className="cf-textarea" id="message" name="message"
                    placeholder="What's on your mind?"
                    value={form.message} onChange={handleChange} required />
                </div>

                <div className="cf-divider" />

                <div className="cf-footer">
                  <p className="cf-privacy">By submitting you agree to our <a href="#">Privacy Policy</a>.</p>
                  <button className="cf-btn" type="submit" disabled={loading}>
                    {loading ? "Sending…" : "Send message"}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default ContactForm;