import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | SellanyMotor",
  description: "Get in touch with SellanyMotor for inquiries and support.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}