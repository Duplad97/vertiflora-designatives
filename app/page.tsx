'use client'
import { useEffect } from "react";
import AboutUs from "./components/about-us";
import Header from "./components/header";
import References from "./components/references";
import Services from "./components/services";

export default function Home() {

    useEffect(() => {
        window.addEventListener('scroll', reveal);

        return () => {
            window.removeEventListener('scroll', reveal);
        };
    }, [])

    const reveal = () => {
        var reveals = document.querySelectorAll(".reveal");
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            } else {
                reveals[i].classList.remove("active");
            }
        }
    }

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
