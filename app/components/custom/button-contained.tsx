import ArrowRight from "./arrow-right"

interface IProps {
    text: string
    arrow: boolean
}

export default function ButtonContained(props: IProps) {

    return (
        <button className="button-contained">
            {props.text}
            {props.arrow ? <ArrowRight /> : null}
        </button>
    )
}