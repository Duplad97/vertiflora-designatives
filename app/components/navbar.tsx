'use client'
import Image from "next/image";
import logo from "../../assets/images/logo.png";
import ButtonContained from "./custom/button-contained";
import { BUTTON_TEXT, CLOSE_MENU_TEXT } from "../typography/navbar";
import { useEffect } from "react";

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
        const mobileNavbar = document.getElementById("mobile-navbar");
        if (window !== undefined && navbar && mobileNavbar) {
            let windowHeight = window.scrollY;
            if (windowHeight > 100) {
                navbar.classList.add("sticky");
                mobileNavbar.classList.add("sticky");
            } else {
                navbar.classList.remove("sticky");
                mobileNavbar.classList.remove("sticky");
            }
        }
    };

    return (
        <>
            <DesktopNavBar />
            <MobileNavBar />
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

    const toggleMenu = (e:any) => {
        e?.preventDefault();
        const container = document.getElementById("menu");
 
        if (container) {
            if (container.classList.contains("active")) {
                container.classList.remove("active")
            } else {
                container.classList.add("active")
            }
        }
    }

    return (
        <div className="mobile-navbar" id="mobile-navbar">
            <ButtonContained className="toggle" text={<i className="fa fa-bars" />} onClick={toggleMenu} arrow={false}/>
            <div className="logo-container">
                <a href="#"><Image className="logo" src={logo} alt={"logo"} /></a>
            </div>
            <div className="menu" id="menu">
                {navItems.map(navItem => {
                    return <a key={Math.random()} className="nav-item" href={navItem.href}>{navItem.label}</a>
                })}
                <ButtonContained text={BUTTON_TEXT} arrow={false} />
                <a className="nav-item" href="" onClick={(e) => toggleMenu(e)}>{CLOSE_MENU_TEXT}</a>
            </div>
        </div>
    )
}