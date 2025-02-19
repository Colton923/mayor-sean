import ContactForm from "@/components/forms/ContactForm/ContactForm";

export default function Contact() {
  return (
    <div
      className={`flex flex-col items-center
      mx-auto bg-white 
      max-w-full 
      sm:max-w-[700px] 
      shadow-lg mb-20 md:my-40 lg:my-48`}
    >
      <ContactForm contactFormType="contact" />
    </div>
  );
}
