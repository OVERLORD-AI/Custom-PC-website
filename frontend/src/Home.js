import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled-components
const PageContainer = styled.div`
  color: #FFD700; /* Slightly towards saffron */
  font-family: Arial, sans-serif;
`;

const HeroSection = styled.section`
  height: 80vh; /* Adjusted height */
  display: flex;
  justify-content: center;
  align-items: center; /* Centered vertically and horizontally */
  flex-direction: column;
  background-image: url(${process.env.PUBLIC_URL}/images/home_background_1.webp);
  background-size: cover;
  background-position: center;
`;

const HeroTitle = styled.h1`
  font-size: 3em;
  color: inherit; /* Inherit color */
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5); /* Increased shadow */
`;

const PCSection = styled.section`
  background-color: #4B0082; /* Dark purple background */
  color: white;
  padding: 40px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2em;
  color: white;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 40px;
`;

const PCImage = styled.img`
  width: 30%;
  height: auto;
  border-radius: 8px;
`;

const Information = styled.div`
  width: 70%; /* Adjusted width */
  font-size: 1.2em;
  margin-top: 20px;
`;

const FooterSection = styled.footer`
  background-color: rgba(65, 105, 225, 0.8); /* Dark sky blue background for the footer */
  color: white;
  padding: 20px;
  text-align: center;
`;

const FooterLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  font-size: 1.2em;
  margin: 0 20px; /* Increased margin for spacing */
`;

const Home = () => {
  return (
    <PageContainer>
      <HeroSection>
        <HeroTitle>The Best PCs in the Universe</HeroTitle>
      </HeroSection>

      <PCSection>
        <Title>Pioneers Systems</Title>
        <InfoContainer>
          <PCImage src={`${process.env.PUBLIC_URL}/images/logo-transparent-png.png`} alt="PC" />
          <Information>
            <p>
            Hand picked, hand built, hand shipped, all right here in the Pioneer Systems prides itself on delivering a white glove service with every computer purchased.
            </p>
            <p>
            Whether it’s built on stream or in our warehouse, you can rest easy knowing that your computer is being built by people who eat, sleep, and breathe computers. We take pride in our work, and we love what we do.
            From Austin to The Andromeda Galaxy, we mean it when we say we have the best gaming PCs in the universe. Quality parts & craftsmanship allows us to give you the ultimate experience.
            </p>
          </Information>
        </InfoContainer>
      </PCSection>

      <FooterSection>
        <FooterLink to="/about-us">About Us</FooterLink>
        <FooterLink to="/contact-us">Contact Us</FooterLink>
        <FooterLink to="/customer-care">Customer Care</FooterLink>
      </FooterSection>
    </PageContainer>
  );
};

export default Home;
