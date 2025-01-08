import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  PhoneAuthProvider,
  signInWithCredential,
} from "firebase/auth";
import { auth } from "./firebase";

export const setupRecaptcha = (
  recaptchaRef: React.MutableRefObject<RecaptchaVerifier | null>
) => {
  if (!recaptchaRef.current) {
    recaptchaRef.current = new RecaptchaVerifier(auth, "recaptcha-container", {
      size: "invisible",
      callback: () => {
        console.log("Recaptcha verified");
      },
    });
  }
};

export const signInWithPhone = async ({
  phoneNumber,
  recaptchaRef,
}: {
  phoneNumber: string;
  recaptchaRef: React.MutableRefObject<RecaptchaVerifier | null>;
}) => {
  try {
    setupRecaptcha(recaptchaRef);
    const appVerifier = recaptchaRef.current;

    if (!appVerifier) {
      throw new Error("Recaptcha setup failed");
    }

    const confirmationResult = await signInWithPhoneNumber(
      auth,
      phoneNumber,
      appVerifier
    );
    return confirmationResult.verificationId;
  } catch (error: any) {
    throw new Error("Error during sign-in: " + error.message);
  }
};

export const verifyOtp = async ({
  verificationId,
  otp,
}: {
  verificationId: string;
  otp: string;
}) => {
  try {
    const credential = PhoneAuthProvider.credential(verificationId, otp);
    await signInWithCredential(auth, credential);
    return "Phone number verified and signed in!";
  } catch (error: any) {
    throw new Error("Invalid OTP: " + error.message);
  }
};
