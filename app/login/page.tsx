"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const mockAuthenticate = async (username: string, password: string) => {
    // Simulate an API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(username === 'admin' && password === 'admin');
      }, 1000);
    });
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const isAuthenticated = await mockAuthenticate(username, password);
    if (isAuthenticated) {
      router.push('/admin');
    } else {
      setErrorMessage('Invalid credentials');
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-white p-8">
        <h1 className="text-3xl font-bold mb-4">Sign In</h1>
        <form onSubmit={handleLogin} className="w-full">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border p-2 mb-2 w-full"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 mb-4 w-full"
            required
          />
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          <div className="flex items-center mb-4">
            <input type="checkbox" id="remember" className="mr-2" />
            <label htmlFor="remember">Remember Me</label>
          </div>
          <button type="submit" className="bg-gradient-to-r from-red-500 to-red-700 text-white p-2 rounded-full w-full" aria-label="Sign In">
            Sign In
          </button>
        </form>
        <a href="#" className="text-blue-500 mt-4" aria-label="Forgot Password">Forgot Password?</a>
        <div className="flex space-x-4 mt-4">
          <a href="#"><img src="/facebook-icon.png" alt="Facebook" /></a>
          <a href="#"><img src="/twitter-icon.png" alt="Twitter" /></a>
        </div>
      </div>
      <div className="hidden md:flex justify-center items-center w-full md:w-1/2 bg-gradient-to-r from-red-500 to-red-700 text-white">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Welcome to Login</h2>
          <a href="/signup" className="border border-white rounded-full px-4 py-2 mt-4 inline-block">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
