import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Reference the image from the public directory
const backgroundImage = process.env.PUBLIC_URL + '/images/Signin_background_1.jpg';

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
  padding: 40px;  
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  color: white;
  width: 600px; 
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

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*[!@#$&*]).{8,}$/;
    return regex.test(password);
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
    if (!validatePassword(password)) {
      setError('Password must be at least 8 characters long, contain one capital letter, and one special character.');
      return;
    }
    setError('');
    try {
      const response = await fetch('http://localhost:3001/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      console.log('Sign In Successful:', data);
      if (data.token) {
        localStorage.setItem('token', data.token);
        setUsername('');
        setPassword('');
        navigate('/'); // redirect to home page or wherever you want after successful login
      } else {
        setError(data.message || 'Sign In failed');
      }
    } catch (error) {
      console.error('Sign In Error:', error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <Container>
      <h2 style={{ color: 'white' }}>Sign In</h2>
      <Form onSubmit={handleSubmit}>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <Button type="submit">Sign In</Button>
      </Form>
    </Container>
  );
};

export default SignIn;
