import React, { useRef, useEffect } from 'react';
import './Contact.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          contactRef.current.classList.add('show-contact');
          observer.unobserve(contactRef.current);
        }
      },
      { threshold: 0.2 }
    );
    if (contactRef.current) observer.observe(contactRef.current);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Message sent successfully! 🚀');
    e.target.reset();
  };

  return (
    <section className="contact-section-new" ref={contactRef}>
      <h2 className="contact-heading">📬 Contact Info</h2>

      <div className="contact-container">
        {/* LEFT BOX */}
        <div className="contact-box glass-card">
           <div className="get-in-touch-box">
             <h3 className="touch-title">Get in Touch</h3>
             <p className="touch-text">I'm open for collaborations, opportunities, or just a quick chat!</p>
           </div>
          <p><FaMapMarkerAlt className="c-icon fa-map-marker-alt" /> <strong>Location: </strong> Chennai, Tamil Nadu, India</p>
          <p><FaPhone className="c-icon fa-phone" /> <strong>Phone:</strong> +91 9566387910</p>
          <p><FaEnvelope className="c-icon fa-envelope" /> <strong>Email:</strong> ajithjaya1000@gmail.com</p>
          <p><FaLinkedin className="c-icon fa-linkedin" /> <strong>LinkedIn:</strong>
            <a href="https://www.linkedin.com/in/ajith-s-bb0661248/" target="_blank" rel="noopener noreferrer">@ajithkumar</a>
          </p>
          <p><FaInstagram className="c-icon fa-instagram" /> <strong>Instagram:</strong>
            <a href="https://www.instagram.com/sachin_ajith_10_7?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">@sachin_ajith_10_7</a>
          </p>
          <p><FaWhatsapp className="c-icon fa-whatsapp" /> <strong>WhatsApp:</strong>
            <a href="https://wa.me/919566387910" target="_blank" rel="noopener noreferrer">Chat with me</a>
          </p>
        </div>

        {/* RIGHT BOX */}
        <form className="contact-form-box glass-card" onSubmit={handleSubmit}>
          <h3>Send Message</h3>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>

      {/* Toast Container */}
      <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar theme="colored" />
    </section>
  );
};

export default Contact;
