import { CSSProperties } from "react";
import ButtonContained from "./button-contained";

interface IProps {
    imageSrc: string
    title: string
    index: number
}

export default function ServiceCard(props: IProps) {

    const style:CSSProperties = { 
        backgroundImage: `url(${props.imageSrc})`,
        marginTop: `${(props.index + 1) * 50}px`
    };

    return (
        <div className="service-card" style={style}>
            <p>{props.title}</p>
            <ButtonContained text="" arrow={true} />
        </div>
    )
}