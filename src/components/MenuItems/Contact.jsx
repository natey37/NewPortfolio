import React, { useState } from 'react';
import "./MenuItems.css"

function Contact({ contactIndex, copied }) {
  const [isCopied, setIsCopied] = useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText("nathanbrickett@gmail.com");
    setIsCopied(true);
  }

  return (
    <div className='contact-container'>
      <h1 id="contact-title" className={`contact-title ${contactIndex === 0 && "underline"}`}>Contact</h1>
      <p className='contact-email'>nathanbrickett@gmail.com</p>
      <button id="contact-email-button" className={`contact-button ${contactIndex === 1 && "underline"}`} onClick={() => window.location.href = "mailto:nathanbrickette@gmail.com"}>Email Me</button>
      <button id="contact-copy-button" className={`contact-button ${contactIndex === 2 && "underline"}`} onClick={() => handleCopy()}>{isCopied || copied ? 'Copied!' : 'Copy Email'}</button>
    </div>
  );
}

export default Contact;
