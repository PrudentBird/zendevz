import React from "react";
import "../components/Contact/Contact.css";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";

const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted');
  }

  return (
    <div className="contact-wrapper">
      <Nav />
      <div className="contact-wrap">
        <div className="contact-heading">
          <h3>Contact Us</h3>
          <p>Fill the form below to send us a message</p>
        </div>
        <div className="contact-form-wrap">
          <form method="post" action="/" className="contact-form">
            <div className="contact-form-input-wrap">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required placeholder="John Doe"/>
            </div>
            <div className="contact-form-input-wrap">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required placeholder="johndoe@gmail.com" />
            </div>
            <div className="contact-form-input-wrap">
              <label htmlFor="message">Message</label>
              <input id="message" name="message" required placeholder="Your message here" />
            </div>
            <button type="button" onClick={handleSubmit}>Send Message</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
