import React, { useRef } from "react";
import "../components/Contact/Contact.css";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_us6s24p", "template_qppp4jx", formRef.current, {
        publicKey: "4G1zuCH7_ES82eJJ0",
      })
      .then(
        () => {
          console.log("Form Submitted!");
          toast.success("Form Submitted!");
        },
        (error) => {
          console.log("Something Went Wrong!...", error.text);
          toast.error("Something Went Wrong!");
        }
      );
  };

  return (
    <div className="contact-wrapper">
      <Nav />
      <div className="contact-wrap">
        <div className="contact-heading">
          <h3>Contact Us</h3>
          <p>Fill the form below to send us a message</p>
        </div>
        <div className="contact-form-wrap">
          <form method="post" className="contact-form" ref={formRef}>
            <div className="contact-form-input-wrap">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="user_name"
                required
                placeholder="John Doe"
              />
            </div>
            <div className="contact-form-input-wrap">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="user_email"
                required
                placeholder="johndoe@gmail.com"
              />
            </div>
            <div className="contact-form-input-wrap">
              <label htmlFor="message">Message</label>
              <input
                id="message"
                name="message"
                required
                placeholder="Your message here"
              />
            </div>
            <button type="button" onClick={handleSubmit}>
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Contact;
