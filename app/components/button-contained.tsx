import Image from 'next/image';
import arrow from '../../assets/images/arrow.png';

interface IProps {
    text: string
    arrow: boolean
}

export default function ButtonContained(props: IProps) {

    return (
        <button className="button-contained">
            {props.text}
            {props.arrow ? <ArrowSVG /> : null}
        </button>
    )
}

const ArrowSVG = () => {
    return (
        <svg width="13.73" height="13.38" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.04105 2.31079L14.73 8.99979L8.04105 15.6888" stroke="currentColor" stroke-width="2" stroke-linecap="square" />
            <path d="M13.6739 9L1.00002 9" stroke="currentColor" stroke-width="2" stroke-linecap="square" />
        </svg>
    )
}