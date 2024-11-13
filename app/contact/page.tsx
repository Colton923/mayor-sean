import ContactForm from "@/components/forms/ContactForm/ContactForm";

export default function Contact() {
  return (
    <div className="flex flex-col items-center space-y-4">
      <h1>Contact</h1>
      <p>Reach out to us!</p>
      <ContactForm c={"black"} />
    </div>
  );
}
