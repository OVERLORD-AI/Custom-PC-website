import React from 'react';
import styled from 'styled-components';

// Styled-components
const AboutSection = styled.section`
  background-color: black;
  color: white;
  padding: 40px;
  text-align: center;
  min-height: 100vh;
`;

const TeamTitle = styled.h2`
  color: white;
  margin-bottom: 20px;
`;

const TeamContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const TeamMember = styled.div`
  width: 30%;
  margin-bottom: 20px;
  border: 2px solid white;
  padding: 20px;
  max-width: 300px;
`;

const ProfilePic = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const Description = styled.p`
  color: white;
`;

const AboutUs = () => {
  const teamMembers = [
    {name: 'Nitesh Palkar', 
    role: 'Associate Engineer', 
    bio: 'BE Electronics and Telecommunication,Nitesh has a strong background in electronics and has been involved in several innovative projects.', 
    profilePic: '/images/nitesh_pro.jpg'
  },
    {name: 'Manoj Pinjari', 
    role: 'Associate Engineer', 
    bio: 'BE Mechanical, Manoj specializes in mechanical systems and has a passion for robotics and automation.',
     profilePic: '/images/manoj_pro.jpg'
    },
    {name: 'Ganesh Varkhede', 
    role: 'Technical Support',
     bio: 'BE Civil, Ganesh provides exceptional technical support and has a keen interest in infrastructure development.',
      profilePic: '/images/ganesh_pro.jpg'
    },
    {name: 'Prathmesh Barad'
    , role: 'Software Engineer', 
    bio: 'BE Computers, Prathmesh is a proficient software engineer with a focus on web development and cloud computing.'
    , profilePic: '/images/Prath_pro.jpg'
   },
  ];

  return (
    <AboutSection>
      <h1>About Us</h1>
      <TeamTitle>Team Members (PGDAC)</TeamTitle>
      <TeamContainer>
        {teamMembers.map((member, index) => (
          <TeamMember key={index}>
            <ProfilePic src={member.profilePic} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <Description>{member.bio}</Description>
          </TeamMember>
        ))}
      </TeamContainer>
    </AboutSection>
  );
};

export default AboutUs;
