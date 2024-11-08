'use client'
import '../../globals.css';
import Link from 'next/link';


const Footer = () => {
    return (
        <footer className="bg-custom text-white px-4 py-2 mt-auto flex justify-between items-center ">
            <div className="font-serif text-3xl ml-10 ">
            FELIX. A <br />MANSO
            </div>
            <Link href="/empleado/login">
                Empleado
            </Link>
        </footer>
       
    );
};
export default Footer;