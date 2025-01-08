"use client";

import { useRef, useState } from "react";
import { signInWithPhone, verifyOtp } from "./firebaseAuthClient"; // Import Firebase functions

export default function PhoneAuth() {
  const recaptchaRef = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [verificationId, setVerificationId] = useState("");
  const [message, setMessage] = useState("");

  const handlePhoneSignIn = async () => {
    try {
      const verificationId = await signInWithPhone({
        phoneNumber,
        recaptchaRef,
      });
      setVerificationId(verificationId);
      setMessage("OTP sent to your phone.");
    } catch (error: any) {
      setMessage(error.message);
    }
  };

  const handleOtpVerification = async () => {
    try {
      if (!verificationId) {
        setMessage("Verification ID is missing.");
        return;
      }
      const resultMessage = await verifyOtp({ verificationId, otp });
      setMessage(resultMessage);
    } catch (error: any) {
      setMessage(error.message);
    }
  };
  return (
    <div className="max-w-sm mx-auto text-center p-4">
      <h2 className="text-xl font-semibold mb-4">Sign In with Phone</h2>
      <div className="mb-4">
        <input
          type="tel"
          placeholder="Enter phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="w-full border rounded p-2 mb-2"
        />
        <button
          onClick={() => handlePhoneSignIn()}
          className="border p-2 w-full hover:bg-gray-100"
        >
          Send OTP
        </button>
      </div>
      {verificationId && (
        <div className="mt-4">
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full border rounded p-2 mb-2"
          />
          <button
            onClick={() => handleOtpVerification()}
            className="border p-2 w-full hover:bg-gray-100"
          >
            Verify OTP
          </button>
        </div>
      )}
      <div id="recaptcha-container" className="mt-4"></div>
      {message && <p className="text-sm text-gray-600 mt-2">{message}</p>}
    </div>
  );
}
