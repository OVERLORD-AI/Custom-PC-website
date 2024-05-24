import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Reference the image from the public directory
const backgroundImage = process.env.PUBLIC_URL + '/images/Signin_background_1.jpg';

// Styled components for styling the registration form
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: url(${backgroundImage}) no-repeat center center fixed;
  background-size: cover;
  color: white;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: rgba(51, 51, 51, 0.8);
  padding: 40px;  // increased padding for a bigger box
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  color: white;
  width: 600px;  // increased width for a bigger box
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  color: black;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  margin-bottom: 10px;
`;

const SuccessMessage = styled.p`
  color: green;
  margin-bottom: 10px;
`;

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    return email.endsWith('@gmail.com');
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*[!@#$&*]).{8,}$/;
    return regex.test(password);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!validateEmail(e.target.value)) {
      setError('Email must end with @gmail.com');
    } else {
      setError('');
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (!validatePassword(e.target.value)) {
      setError('Password must be at least 8 characters long, contain one capital letter, and one special character.');
    } else {
      setError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Email must end with @gmail.com');
      return;
    }
    if (!validatePassword(password)) {
      setError('Password must be at least 8 characters long, contain one capital letter, and one special character.');
      return;
    }
    setError('');
    setSuccess('');
    try {
      const response = await fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        setSuccess('Registered successfully!');
        setUsername('');
        setEmail('');
        setPassword('');
        setTimeout(() => {
          navigate('/signin'); // redirect to Sign In page after showing success message
        }, 1500);
      } else {
        setError(data.message || 'Registration failed');
      }
    } catch (error) {
      console.error(error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <Container>
      <h2 style={{ color: 'white' }}>Sign Up</h2>
      <Form onSubmit={handleSubmit}>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {success && <SuccessMessage>{success}</SuccessMessage>}
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <Button type="submit">Sign Up</Button>
      </Form>
    </Container>
  );
};

export default Register;
