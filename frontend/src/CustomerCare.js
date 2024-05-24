import React from 'react';
import styled from 'styled-components';

// Styled-components
const CustomerCareSection = styled.section`
  background-color: #1a1a1a;
  color: #fff;
  padding: 40px;
  text-align: center;
  min-height: 100vh;
`;

const InfoContainer = styled.div`
  margin-bottom: 30px; /* Add bottom margin */
`;

const ContactInfo = styled.p`
  margin-bottom: 10px;
  font-size: 18px;
`;

const ReachUs = styled.h3`
  margin-bottom: 40px; /* Increase bottom margin */
  color: #ff5733;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Icon = styled.a`
  font-size: 24px;
  color: #ff5733;
  margin: 0 10px;
  transition: color 0.3s ease;

  &:hover {
    color: #fff;
  }
`;

const CustomerCare = () => {
  return (
    <CustomerCareSection>
      <h1>Customer Care</h1>
      <InfoContainer>
        <ContactInfo>Contact us for any assistance:</ContactInfo>
        <ContactInfo>Address: Pune University Campus, Ganesh Khind, Pune - 411 007, Maharashtra (India)</ContactInfo>
        <ContactInfo>Phone:+91-20-2570-4100, Fax: +91-20-2569 4004</ContactInfo>
        <ContactInfo>Address: Raintree Marg, Near Bharati Vidyapeeth, Opp. Kharghar Railway Station, Navi Mumbai, 400-614, Maharashtra (India)</ContactInfo>
        <ContactInfo>Phone: +91-22-27565303, Fax: +91-22-2756-0004</ContactInfo>
        <ContactInfo>Email: Pioneerssysrem7support@example.com</ContactInfo>
      </InfoContainer>
      <ReachUs>Reach Us</ReachUs>
      <SocialIcons>
        <Icon href="https://www.instagram.com/cdac_mumbai?igsh=MTVodTl0dzlqczZvZQ==" target="_blank"><i className="fab fa-instagram"></i></Icon>
        <Icon href="https://twitter.com/" target="_blank"><i className="fab fa-linkedin"></i></Icon>
        <Icon href="https://www.facebook.com/share/TMVqrpz3T4hAMq3N/?mibextid=qi2Omg" target="_blank"><i className="fab fa-facebook"></i></Icon>
        <Icon href="https://twitter.com/cdacindia" target="_blank"><i className="fab fa-twitter"></i></Icon>
        <Icon href="https://www.youtube.com/c/CDACOfficial" target="_blank"><i className="fab fa-youtube"></i></Icon>
      </SocialIcons>
    </CustomerCareSection>
  );
};

export default CustomerCare;
