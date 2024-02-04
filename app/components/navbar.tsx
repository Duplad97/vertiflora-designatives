import Image from "next/image";
import logo from "../../assets/images/logo.png";
import ButtonContained from "./custom/button-contained";
import { BUTTON_TEXT } from "../typography/navbar";

export default function NavBar() {

    const navItems = [
        { label: "Rólunk", href: "#" },
        { label: "Zöldfalak", href: "#" },
        { label: "Referenciák", href: "#" },
        { label: "Kapcsolat", href: "#" },
    ];

    return (
        <nav>
            <div className="logo-container">
                <Image className="logo" src={logo} alt={"logo"} />
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