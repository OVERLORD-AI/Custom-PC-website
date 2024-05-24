import React from 'react';
import styled from 'styled-components';

// Styled-components
const ContactSection = styled.section`
  background-color: white;
  color: black;
  padding: 40px;
  text-align: center;
  min-height: 100vh;
`;

const ContactUs = () => {
  return (
    <ContactSection>
      <h1>Contact Us</h1>
      <p>Centre for Development of Advanced Computing (CDAC)</p>
      <h8>About Us</h8>
      <p>Centre for Development of Advanced Computing (C-DAC) is the premier R&D organization of the Ministry of Electronics and Information Technology (MeitY) for carrying out R&D in IT, Electronics and associated areas. Different areas of C-DAC, had originated at different times, many of which came out as a result of identification of opportunities.</p>
      <h9>Address</h9>
      <p>Raintree Marg, near Bharati Vidyapeeth, Sector 7, CBD Belapur, Navi Mumbai, Maharashtra 400614</p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.859782527528!2d73.05167127502615!3d19.025899382168365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c24cce39457b%3A0x8bd69eab297890b0!2sCentre%20for%20Development%20of%20Advanced%20Computing%20(CDAC)!5e0!3m2!1sen!2sin!4v1716255779462!5m2!1sen!2sin"
        width="400"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="Google Maps"
      ></iframe>
    </ContactSection>
  );
};

export default ContactUs;
