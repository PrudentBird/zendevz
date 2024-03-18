import React from "react";
import './ContactCard.css'

const ContactCard = () => {
  return (
    <div className="support-form-content">
      <form className="support-form-wrap">
        <label for="support-message">Send us a message</label>
        <div className="support-form">
          <input
            id="support-message"
            name="support-message"
            type="text"
            placeholder="Type your message here..."
          ></input>
          <button type="submit">Contact Us</button>
        </div>
      </form>
    </div>
  );
};

export default ContactCard;
