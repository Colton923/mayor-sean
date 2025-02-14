import PhoneAuth from "../../firebase/PhoneAuth";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen mx-auto bg-white max-w-full sm:max-w-[700px] lg:max-w-[1050px] shadow-lg mb-20 md:my-40 lg:my-48">
      <PhoneAuth />
    </div>
  );
}
