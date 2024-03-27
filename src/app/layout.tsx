import type { Metadata } from "next";
import { Inter, Kantumruy_Pro, Poppins } from "next/font/google";
import "./globals.css";
import NextUILayout from "./NextUIProvider";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from './error'
import NavbarComponent from "@/components/layouts/navbar/NavbarComponent";
import image from '../../public/assets/pic.jpg'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  style: ["italic", "normal"],
  variable: "--font-poppins",
});
// Initialize fonts
const inter = Inter({ subsets: ["latin"] });
const kantumruy_pro = Kantumruy_Pro({
  subsets: ["khmer"],
  display: "swap",
  variable: "--font-kantumruy-pro",
});

export const metadata: Metadata = {
  icons: {
    icon: "favicon.ico"
  },
  title: {
    template: "%s - Seu Shopping",
    default: "Seu Seu Shopping",
  },
  description: "This is description shop",
  keywords: ["shop", "anime", "shopping", "store"],
  openGraph: {
    title: {
      template: "%s - Seu Shopping",
      default: "Seu Shopping",
    },
    description: "Ey Kor Louk Del Oy Tae mean luy",
    images: [
      "https://i.pinimg.com/736x/76/8d/16/768d16b32de5c1a638d90b6142552415.jpg",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${kantumruy_pro.variable}`}>
        <NextUILayout>
          <NavbarComponent/>
          <ErrorBoundary errorComponent={Error}>
            {children}
          </ErrorBoundary>
        </NextUILayout>
      </body>
    </html>
  );
}
