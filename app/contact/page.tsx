import { Metadata } from "next";
import ContactClient from "./contact-client";

export const metadata: Metadata = {
  title: "Contact Us | Sellanymotor",
  description: "Get in touch with our team for any inquiries about selling your vehicle.",
};

export default function ContactPage() {
  return <ContactClient />;
}