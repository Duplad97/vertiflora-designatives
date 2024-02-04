import { CSSProperties } from 'react';
import headerBg from '../../assets/images/header_bg.png';
import { BUTTON_TEXT, CONTENT_SUBTITLE, CONTENT_TITLE } from '../typography/header';
import ButtonContained from './button-contained';

const backgroundStyle:CSSProperties = { 
    backgroundImage: `url(${headerBg.src})`,
};

export default function Header() {

    return (
        <header style={backgroundStyle}>
            <div id="overlay" />

            <div className='content'>
                <h1>{CONTENT_TITLE}</h1>
                <p>{CONTENT_SUBTITLE}</p>
                <ButtonContained text={BUTTON_TEXT} arrow={true} />
            </div>
        </header>
    )
}