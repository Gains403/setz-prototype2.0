import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata = {
  title: "SETZ",
  description: "Smart gym set tracker",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 flex flex-col min-h-screen">
       
        <Navbar />

       
        <main className="flex-grow">{children}</main>

       
        <Footer />
      </body>
    </html>
  );
}
