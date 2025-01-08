"use client";

import PhoneAuth from "../../firebase/PhoneAuth";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <PhoneAuth />
    </div>
  );
}
