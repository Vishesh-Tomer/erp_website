import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import './globals.css';

export const metadata = {
  title: 'School ERP',
  description: 'A comprehensive school management system powered by AI.',
  icons: {
    icon: 'https://fav.farm/📚', // Online favicon placeholder (a book emoji)
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}