import '../../globals.css';
import Image from 'next/image';


const sectionSobreNosotros = () => {
    return(
        <section id="sobre-nosotros" className="flex items-center justify-between p-8 bg-gray-100">
            <div className="flex-1 pr-8"> {/* Ajusta el padding derecho según sea necesario */}
                <h1 className="text-3xl font-Poppins font-bold mb-4">Sobre Nosotros</h1>
                <p className="text-lg">En Manso Repuestos, nos dedicamos a comercializar repuestos <br />
                 de calidad para tractores. Fundada en 1994, hemos crecido desde <br />
                ser una pequeña tienda local hasta convertirnos en un líder de la <br />
                industria de repuestos de tractores, manteniendo nuestro compromiso <br />
                 con la excelencia.
                </p>
            </div>
            <div className="w-1/3 flex-shrink-0 flex items-center justify-center">
                <Image
                    src="/images/FrenteManso.png"
                    layout="responsive"
                    width={50}
                    height={50} 
                    className="rounded-lg" 
                />
            </div>
            <div style={{ width: '35%', height: '390px', border: '2px solid #ccc', borderRadius: '10px', overflow: 'hidden', margin: 'auto' }}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3218.2030248628375!2d-61.116428500000005!3d-36.2345618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bfe3161c0ba0b3%3A0xc758ed7a05e5b300!2sFelix%20Manso%20Repuestos!5e0!3m2!1ses!2sar!4v1725576682028!5m2!1ses!2sar"
                    width="100%"
                    height="100%"
                    style={{ border: '0' }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </section>
    );
}
export default sectionSobreNosotros;