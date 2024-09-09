import '../globals.css';
import Logos from './logos';


const SectionMarcas = () => {
    const brands = [
        { id: 1, name: 'Brand 1', logo: '/images/logos/logoVMG.png' },
        { id: 2, name: 'Brand 2', logo: '/images/logos/logoValvoline.png' },
        { id: 3, name: 'Brand 3', logo: '/images/logos/logoSPICER.png' },
        { id: 4, name: 'Brand 4', logo: '/images/logos/logoSKF.png' },
        { id: 5, name: 'Brand 5', logo: '/images/logos/logoOsram.png' },
        { id: 6, name: 'Brand 6', logo: '/images/logos/logoMWM.png' },
        { id: 7, name: 'Brand 7', logo: '/images/logos/logoMateo.png' },
        { id: 8, name: 'Brand 8', logo: '/images/logos/logoMannFilter.png' },
        { id: 9, name: 'Brand 9', logo: '/images/logos/logoLIQUIMOLY.png' },
        { id: 10, name: 'Brand 10', logo: '/images/logos/logoFleetguard.png' },
        { id: 11, name: 'Brand 11', logo: '/images/logos/logoElf.png' },
        { id: 12, name: 'Brand 12', logo: '/images/logos/logoDayco.png' },
    ];
    return (
        <div className="container mx-auto p-0">
            <Logos brands={brands} />
        </div>
    );
}
export default SectionMarcas;