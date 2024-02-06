import { TITLE } from "../typography/references";
import ImageSlider, { ISliderItem } from "./custom/image-slider";

import referenceImage1 from "../../assets/images/references_1.png";
import referenceImage2 from "../../assets/images/references_2.png";
import referenceImage3 from "../../assets/images/references_3.png";

export default function References() {
    const referencesList:ISliderItem[] = [
        { title: "Decathlon", subtitle: "Budaörs", imageSrc: referenceImage1 },
        { title: "Teljesen automata zöldfal", subtitle: "Üllő", imageSrc: referenceImage2 },
        { title: "Balalaland", subtitle: "Balatonszántód", imageSrc: referenceImage3 },
    ]

    return (
        <div className="references" id="references">
            <h1>{TITLE}</h1>

            <ImageSlider items={referencesList} />
        </div>
    )
}