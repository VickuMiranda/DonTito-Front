import './globals.css';
import Navbar from './components/navbar';
import Footer from './components/footer';

export const metadata = {
  title: 'DonTito', 
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
