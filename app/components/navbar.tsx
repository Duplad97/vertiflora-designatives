'use client'
import Image from "next/image";
import logo from "../../assets/images/logo.png";
import ButtonContained from "./custom/button-contained";
import { BUTTON_TEXT } from "../typography/navbar";
import { useEffect, useRef } from "react";

const navItems = [
    { label: "Rólunk", href: "#about-us" },
    { label: "Zöldfalak", href: "#services" },
    { label: "Referenciák", href: "#references" },
    { label: "Kapcsolat", href: "#" },
];

export default function NavBar() {

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);

        return () => {
            window.removeEventListener('scroll', stickNavbar);
        };

    }, []);

    const stickNavbar = () => {
        const navbar = document.getElementById("navbar");
        if (window !== undefined && navbar) {
            let windowHeight = window.scrollY;
            windowHeight > 150 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
        }
    };

    return (
        <>
            <DesktopNavBar />
        </>
    )
}

const DesktopNavBar = () => {
    return (
        <nav id="navbar">
            <div className="logo-container">
                <a href="#"><Image className="logo" src={logo} alt={"logo"} /></a>
            </div>

            <div className="menu">
                {navItems.map(navItem => {
                    return <a key={Math.random()} className="nav-item" href={navItem.href}>{navItem.label}</a>
                })}
                <ButtonContained text={BUTTON_TEXT} arrow={false} />
            </div>
        </nav>
    )
}

const MobileNavBar = () => {

    const toggleMenu = () => {
        const container = document.getElementById("menu");
        if (container) {
            if (container.style.display === "block") {
                container.style.display = "none";
            } else {
                container.style.display = "block";
            }
        }
    }

    return (
        <div className="mobile-navbar">
            <a href="#home" className="active">Logo</a>
            <div className="menu" id="menu">
                {navItems.map(navItem => {
                    return <a key={Math.random()} className="nav-item" href={navItem.href}>{navItem.label}</a>
                })}
                <ButtonContained text={BUTTON_TEXT} arrow={false} />
            </div>
            <a href="javascript:void(0);" className="icon" onClick={toggleMenu}>
                <i className="fa fa-bars"></i>
            </a>
        </div>
    )
}