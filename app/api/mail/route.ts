import { MailService } from "@sendgrid/mail";
import type { FormData } from "@/components/forms/ContactForm/ContactForm";

const mailService = new MailService();
if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY is not set");
}

mailService.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request: Request) {
  const mailData = await request.json();
  if (
    !mailData.email ||
    !mailData.firstName ||
    !mailData.lastName ||
    !mailData.phone ||
    !mailData.mailingAddress
  ) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }

  const data: FormData = {
    email: mailData.email,
    firstName: mailData.firstName,
    lastName: mailData.lastName,
    mailingAddress: mailData.mailingAddress,
    phone: mailData.phone,
    message: mailData.message,
  };

  const msg = {
    to: "scgad@hotmail.com",
    from: data.email,
    subject: "New Contact Form Submission",
    text: `Name: ${data.firstName} ${data.lastName}`,
    html: `
        <div>
            <p>Name: ${data.firstName} ${data.lastName}</p>
            <p>Email: ${data.email}</p>
            <p>Phone: ${data.phone}</p>
            <p>Mailing Address: ${data.mailingAddress}</p>
        </div>
    `,
  };

  const res = await mailService.send(msg);
  return Response.json(res);
}
