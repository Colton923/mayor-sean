import Image from "next/image";
import aboutimg from "@/public/assets/SeanForMayor-900x900.webp";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="relative w-full h-64">
          <Image
            src={aboutimg.src} // Replace with your image path
            alt="About Us"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-gray-600 mb-4">
            Welcome to our page! We are dedicated to delivering exceptional
            services and experiences. Our mission is to bring value and
            creativity to everything we do, ensuring that our clients and
            community thrive together.
          </p>
          <p className="text-gray-600">
            With years of experience in the industry, we take pride in our team
            of experts who are passionate, skilled, and committed to excellence.
            Thank you for visiting and learning more about us.
          </p>
        </div>
      </div>
    </div>
  );
}
