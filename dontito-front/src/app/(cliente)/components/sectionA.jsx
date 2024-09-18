import '../../globals.css';
import Image from 'next/image';

const SectionA = () => {
    return(
        <section className="relative bg-gray-200 h-[80vh] ">
            <Image
                src="/images/Tractor.png"
                alt="Tractor"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0"
            />
            <div className="absolute top-4 left-4 text-white p-4 bg-black bg-opacity-50 rounded-lg">
                <h1 className="text-4xl font-Poppins">Manso Repuestos</h1>
                <p className="mt-4">¡Encuentra todo lo que necesitas para tu tractor en un solo lugar!</p>
            </div>
        </section>
    );
}
export default SectionA;