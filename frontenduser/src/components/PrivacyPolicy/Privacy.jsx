import React from 'react';
import './Privacy.css';
import { FaWhatsapp, FaInstagram, FaFacebook,FaTwitter } from 'react-icons/fa';

const Privacy = () => {
  return (
    <div className='privacy'>
      <div className="privacyleft">
        <h2>Privacy Policy</h2>
        <p>Your privacy is important to us. We ensure that your personal information is handled responsibly and in compliance with all relevant laws.</p>
        <p>We collect information to provide better services, such as improving our recommendations and enhancing your experience.</p>
      </div>
      <div className="privacycenter">
        <h2>Data Protection</h2>
        <p>We take data protection seriously. Your information is stored securely and used solely for providing you with our services.</p>
        <p>We do not share your personal data with third parties without your consent, except as required by law.</p>
      </div>
      <div className="privacyright">
        <h2>Contact Us</h2>
        <p>If you have any questions or concerns about our privacy practices, feel free to reach out:</p>
        <p>Email: support@example.com</p>
       <div className="contacticons">
        <FaFacebook size={30}/>
        <FaInstagram size={30}/>
        <FaWhatsapp size={30}/>
        <FaTwitter size={30}/>
       </div>
      </div>
    </div>
  );
}

export default Privacy;
