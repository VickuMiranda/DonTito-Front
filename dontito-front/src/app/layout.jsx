import './globals.css';
import Navbar from './components/navbar';
import Footer from './components/footer';

export const metadata = {
  title: 'My Application', // Opcional, ajusta el título según tus necesidades
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <br></br>
        <Footer />
      </body>
    </html>
  );
}