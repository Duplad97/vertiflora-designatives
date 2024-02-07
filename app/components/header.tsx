'use client'
import { CSSProperties, useEffect } from 'react';
import headerBg from '../../assets/images/header_bg.png';
import { BUTTON_TEXT, CONTENT_SUBTITLE, CONTENT_TITLE } from '../typography/header';
import ButtonContained from './custom/button-contained';
import NavBar from './navbar';

const backgroundStyle:CSSProperties = { 
    backgroundImage: `url(${headerBg.src})`,
};

export default function Header() {

    useEffect(() => {
        setTimeout(() => {
            const content = document.getElementById('header-content');
            content?.classList.add("active");
        }, 50);
    }, []);

    return (
        <header style={backgroundStyle}>
            <NavBar />

            <div id="overlay" />

            <div className='content reveal' id="header-content">
                <h1>{CONTENT_TITLE}</h1>
                <p>{CONTENT_SUBTITLE}</p>
                <ButtonContained text={BUTTON_TEXT} arrow={true} />
            </div>
        </header>
    )
}