import { LEFT_CONTENT_TEXT, LEFT_CONTENT_TITLE, RIGHT_CONTENT_TEXT } from "../typography/about-us";
import ArrowRight from "./custom/arrow-right";

export default function AboutUs() {

    return (
        <div className="about-us">

            <div className="left-content">
                <div className="title">
                    <ArrowRight />
                    <h6>{LEFT_CONTENT_TITLE}</h6>
                </div>
                <p>{LEFT_CONTENT_TEXT}</p>
            </div>

            <div className="right-content">
                <p><span>{RIGHT_CONTENT_TEXT}</span></p>
            </div>

        </div>
    )
}