import ContactForm from "@/components/forms/ContactForm/ContactForm";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8 shadow-lg bg-white bg-opacity-90 max-w-5xl">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h1>
      <ContactForm c="black" />
    </div>
  );
}
