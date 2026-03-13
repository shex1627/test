import { useState } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  .cf-wrap {
    min-height: 100vh;
    background: #1a1a2e;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    font-family: 'DM Sans', sans-serif;
    color: #f0ece4;
    position: relative;
    overflow: hidden;
  }

  .cf-wrap::before {
    content: '';
    position: fixed;
    top: -40%; right: -20%;
    width: 600px; height: 600px;
    background: radial-gradient(circle, rgba(200,169,110,0.07) 0%, transparent 70%);
    pointer-events: none;
  }

  .cf-wrap::after {
    content: '';
    position: fixed;
    bottom: -30%; left: -10%;
    width: 400px; height: 400px;
    background: radial-gradient(circle, rgba(200,169,110,0.04) 0%, transparent 70%);
    pointer-events: none;
  }

  .cf-container {
    width: 100%;
    max-width: 680px;
    animation: fadeUp 0.7s ease both;
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .cf-header { margin-bottom: 2.5rem; }

  .cf-eyebrow {
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #e07b39;
    margin-bottom: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .cf-eyebrow::before {
    content: '';
    display: block;
    width: 28px; height: 1px;
    background: #e07b39;
  }

  .cf-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2rem, 5vw, 2.8rem);
    font-weight: 400;
    line-height: 1.15;
  }

  .cf-title em {
    font-style: italic;
    color: #e07b39;
  }

  .cf-subtitle {
    margin-top: 0.9rem;
    font-size: 0.88rem;
    font-weight: 300;
    color: #6b6560;
    line-height: 1.65;
  }

  .cf-form { display: flex; flex-direction: column; gap: 1.4rem; }

  .cf-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  .cf-field { display: flex; flex-direction: column; gap: 0.45rem; }

  .cf-label {
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #6b6560;
    transition: color 0.2s;
  }

  .cf-field:focus-within .cf-label { color: #e07b39; }

  .cf-input, .cf-textarea, .cf-select {
    background: #161616;
    border: 1px solid #2a2a2a;
    border-radius: 4px;
    color: #f0ece4;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.93rem;
    font-weight: 300;
    padding: 0.82rem 1rem;
    outline: none;
    transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
    width: 100%;
  }

  .cf-input::placeholder, .cf-textarea::placeholder { color: #3a3835; }

  .cf-input:focus, .cf-textarea:focus, .cf-select:focus {
    border-color: #e07b39;
    background: rgba(224,123,57,0.06);
    box-shadow: 0 0 0 3px rgba(224,123,57,0.08);
  }

  .cf-textarea {
    resize: vertical;
    min-height: 160px;
    line-height: 1.6;
  }

  .cf-select {
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%236b6560' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 1rem center;
    cursor: pointer;
  }

  .cf-select option { background: #1e1e1e; }

  .cf-divider { height: 1px; background: #2a2a2a; margin: 0.25rem 0; }

  .cf-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  .cf-privacy {
    font-size: 0.73rem;
    color: #6b6560;
    line-height: 1.5;
  }

  .cf-privacy a { color: #e07b39; text-decoration: none; }

  .cf-btn {
    background: #e07b39;
    border: none;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    padding: 0.88rem 2rem;
    white-space: nowrap;
    transition: opacity 0.2s, transform 0.15s;
  }

  .cf-btn:hover { opacity: 0.85; transform: translateY(-1px); }
  .cf-btn:active { transform: translateY(0); }
  .cf-btn:disabled { opacity: 0.5; pointer-events: none; }

  .cf-success {
    text-align: center;
    padding: 3rem 1rem;
    animation: fadeUp 0.6s ease both;
  }

  .cf-success-icon {
    width: 56px; height: 56px;
    border: 1.5px solid #e07b39;
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    margin: 0 auto 1.5rem;
    font-size: 1.3rem;
    color: #e07b39;
  }

  .cf-success h2 {
    font-family: 'Playfair Display', serif;
    font-size: 1.8rem;
    font-weight: 400;
    margin-bottom: 0.75rem;
  }

  .cf-success p { color: #6b6560; font-size: 0.88rem; font-weight: 300; }

  @media (max-width: 480px) {
    .cf-row { grid-template-columns: 1fr; }
    .cf-footer { flex-direction: column; align-items: flex-start; }
    .cf-btn { width: 100%; text-align: center; }
  }
`;

const SUBJECTS = ["General inquiry", "Feedback", "Consulting", "Bug report", "Other"];

const ContactForm = () => {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", subject: "", message: "" });
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
              <h2>Thanks for reaching out!</h2>
              <p>We'll get back to you within 48 hours.</p>
            </div>
          ) : (
            <>
              <div className="cf-header">
                <div className="cf-eyebrow">Get in touch</div>
                <h1 className="cf-title">Let's <em>connect</em></h1>
                <p className="cf-subtitle">
                  Have a question or want to work together?<br />
                  Send us a message and we'll get back to you shortly.
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
                  <label className="cf-label" htmlFor="phone">Phone number</label>
                  <input className="cf-input" type="tel" id="phone" name="phone"
                    placeholder="+1 (555) 000-0000" value={form.phone} onChange={handleChange} />
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
                    placeholder="Describe your project or question…"
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