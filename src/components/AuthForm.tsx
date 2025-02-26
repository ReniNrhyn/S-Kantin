"use client";

import React, { useState, useEffect } from "react";
import SocialAuth from "@app/components/SocialAuth";
import Button from "@app/components/Button";
import Input from "@app/components/Input";
import { useRouter } from "next/navigation";

const AuthForm = ({ isLogin }: { isLogin: boolean }) => {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Jika user sudah login, redirect ke dashboard
  useEffect(() => {
    const loggedInUser = sessionStorage.getItem("loggedInUser");
    if (loggedInUser) {
      router.push("/dashboard");
    }
  }, [router]);

  // Handle Register
  const handleRegister = (event: React.FormEvent) => {
    event.preventDefault();
    localStorage.setItem("user", JSON.stringify({ fullName, email, password }));
    alert("Registrasi berhasil! Silakan login.");
    router.push("/login"); // Redirect ke login
  };

  // Handle Login
  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");

    if (storedUser.email === email && storedUser.password === password) {
      alert(`Selamat datang, ${storedUser.fullName}!`);
      sessionStorage.setItem("loggedInUser", JSON.stringify(storedUser));
      router.push("/dashboard"); // Redirect ke dashboard
    } else {
      alert("Email atau password salah!");
    }
  };

  return (
    <div className="flex bg-gray-100 h-screen justify-center items-center">
      <div className="bg-white shadow-lg flex rounded-lg overflow-hidden w-[800px]">
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-bold text-green-600 mb-4">
            {isLogin ? "Sign in to Account" : "Create an Account"}
          </h2>
          <SocialAuth />
          <p className="text-gray-500 text-sm my-2 text-center">
            or use your email account
          </p>
          <form onSubmit={isLogin ? handleLogin : handleRegister}>
            {!isLogin && (
              <Input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFullName(e.target.value)
                }
              />
            )}
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />
            <div className="flex justify-between items-center text-sm my-2">
              {isLogin && (
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Remember me
                </label>
              )}
              {isLogin && (
                <a href="#" className="text-green-600">
                  Forgot Password?
                </a>
              )}
            </div>
            <Button
              text={isLogin ? "Sign In" : "Sign Up"}
              className="w-full mt-4"
            />
          </form>
        </div>
        <div className="w-1/2 bg-green-600 text-white flex flex-col justify-center items-center p-6">
          <h2 className="text-2xl font-bold">Hello, Friend!</h2>
          <p className="text-sm text-center my-2">
            Fill up personal information and start journey with us.
          </p>
          <Button
            text={isLogin ? "Sign Up" : "Sign In"}
            className="border-white mt-4"
            onClick={() => router.push(isLogin ? "/register" : "/login")}
          />
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
