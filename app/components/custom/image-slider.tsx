'use client';
import ArrowRight from "./arrow-right";
import ArrowLeft from "./arrow-left";
import Image, { StaticImageData } from "next/image";
import ButtonContained from "./button-contained";

export interface ISliderItem {
    title: string
    subtitle: string
    imageSrc: StaticImageData
}

interface IProps {
    items: ISliderItem[]
}

export default function ImageSlider(props: IProps) {
    const slideLeft = () => {
        let slider = document.getElementById("slider");
        if (slider) {
            slider.scrollLeft = slider.scrollLeft - 235;
        }
    };

    const slideRight = () => {
        let slider = document.getElementById("slider");
        if (slider) {
            slider.scrollLeft = slider.scrollLeft + 235;
        }
    };
    return (
        <div className="image-slider">
            <div className="title-controller">
                <div className="controller">
                    <button title="scroll left" onClick={slideLeft}>
                        <ArrowLeft />
                    </button>
                    <button title="scroll right" onClick={slideRight}>
                        <ArrowRight />
                    </button>
                </div>
            </div>
            <div className="row-container" id="slider">
                {props.items.map((item) => (
                    <div key={Math.random()} className="row-item">
                        <div className="item-header">
                            <Image src={item.imageSrc} alt="reference-image" />
                        </div>
                        <div className="item-description">
                            <div>
                                <p className="item-subtitle">{item.subtitle}</p>
                                <p className="item-title">{item.title}</p>
                            </div>
                            <ButtonContained text="" arrow={true} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}