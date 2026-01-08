import { generateMetadata } from "@/lib/metadata";

export const metadata = generateMetadata({
  title: "Contact",
  description: "Get in touch to discuss data engineering opportunities and collaborations.",
  url: "/contact"
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
