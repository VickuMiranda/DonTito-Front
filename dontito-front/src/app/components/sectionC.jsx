import '../globals.css';
import Image from 'next/image';

const SectionC = () => {
    return(
        <section className="flex items-center justify-between p-8 bg-gray-100">
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
                    width={50} // Ajusta el ancho según tus necesidades
                    height={50} // Ajusta la altura según tus necesidades
                    className="rounded-lg" // Puedes añadir estilos adicionales aquí
                />
            </div>
        </section>
    );
}
export default SectionC;