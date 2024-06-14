import "../styles/globals.css";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";
import { sharedDescription, sharedTitle } from "./shared-metadata";
import { QueryClientProviderWrapper } from "@/providers/query-client";

const font = Urbanist({ subsets: ["latin"] });

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${font.className} antialiased`}>
      <QueryClientProviderWrapper>
        <body>
          <ModalProvider />
          <ToastProvider />
          <Navbar />
          {children}
          <Footer />
        </body>
      </QueryClientProviderWrapper>
    </html>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL("https://shop-estore.nderic.com"),
  robots: {
    index: true,
    follow: true,
  },
  title: {
    template: `%s — ${sharedTitle}`,
    default: sharedTitle,
  },
  description: sharedDescription,
  openGraph: {
    title: {
      template: `%s — ${sharedTitle}`,
      default: sharedTitle,
    },
    description: sharedDescription,
    type: "website",
    url: "/",
    siteName: sharedTitle,
    locale: "en_US",
  },
  alternates: {
    canonical: "/",
  },
  twitter: {
    card: "summary_large_image",
    site: `@odaltongain`,
    creator: `@odaltongain`,
  },
  other: {
    pinterest: "nopin",
  },
};

export const viewport = {
  themeColor: "white",
  colorScheme: "only light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};
