import type { Metadata } from "next";
import "../styles/tokens.css";
import "../styles/styles.css";

export const metadata: Metadata = {
  title: "Shreyash Khare — Product Designer & Frontend Dev",
  description:
    "Shreyash Khare — product designer and frontend developer based in Chennai, India. Designing thoughtful digital products.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
