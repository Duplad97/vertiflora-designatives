import serviceImage1 from '../../assets/images/services_1.png';
import serviceImage2 from '../../assets/images/services_2.png';
import serviceImage3 from '../../assets/images/services_3.png';
import ServiceCard from './custom/service-card.component';

const servicesList = [
    { src: serviceImage1.src, title: "Zöldfalaink felépítése"},
    { src: serviceImage2.src, title: "Mobil zöldfalaink" },
    { src: serviceImage3.src, title: "Zöldfalak karbantartása" }
]

export default function Services() {

    return (
        <div className="services">
            {servicesList.map((service, index) => {
                return <ServiceCard key={Math.random()} index={index} imageSrc={service.src} title={service.title} />
            })}
        </div>
    )
}