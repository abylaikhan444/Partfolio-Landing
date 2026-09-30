import "react";
import emailjs from "@emailjs/browser";
import githubIcon from "../../assets/icons/bxl-github.svg";
import telegaIcon from "../../assets/icons/bxl-telega.png";
import linkedinIcon from "../../assets/icons/bxl-linkedin.svg";
import { useState } from "react";

export default function FooterSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setStatus("sent");
        setForm({ name: "", email: "", subject: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        setStatus("error");
      });
  };
  return (
    <div className="footer-section">
      <div className="footer-section__left-side">
        <div className="footer-section__left-side__items">
          <h3 className="footer-section__left-side__items-h3">LET`S CONNECT</h3>
          <p className="footer-section__left-side__items-p">
            Say hello at fifa77882@gmail.com For more info, here`s my <a href="#">resume</a>
          </p>
          <div className="footer-section__left-side__items-icons">
            <img src={githubIcon} alt="github icon" />
            <img src={linkedinIcon} alt="linkedin icon" />
            <img src={telegaIcon} alt="telega icon" />
          </div>
        </div>
      </div>
      <div className="footer-section__rigth-side">
        <form className="footer-section__rigth-side__contact-form" onSubmit={handleSubmit}>
          <label>Name</label>
          <input name="name" value={form.name} onChange={handleChange} placeholder="Abylaikhan" required />

          <label>Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} required />

          <label>Subject</label>
          <input name="subject" value={form.subject} onChange={handleChange} required />

          <label>Message</label>
          <textarea name="message" value={form.message} onChange={handleChange} rows={6} required />

          <button type="submit" disabled={status === "sending"}>
            {status === "sending" ? "SENDING..." : "SUBMIT"}
          </button>

          {status === "sent" && <p>Message sent!</p>}
          {status === "error" && <p>Something went wrong, try again.</p>}
        </form>
      </div>
    </div>
  );
}
