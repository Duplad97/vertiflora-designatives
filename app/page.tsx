import AboutUs from "./components/about-us";
import Header from "./components/header";
import References from "./components/references";
import Services from "./components/services";

export default function Home() {
    return (
        <>
        <main>
            <Header />
            <AboutUs />
            <Services />
        </main>
        <References />
        </>
    );
}
