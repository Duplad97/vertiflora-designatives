import ArrowRight from "./arrow-right"

interface IProps {
    text: string | JSX.Element
    arrow: boolean
    onClick?: Function
    className?: string
}

export default function ButtonContained(props: IProps) {

    return (
        //@ts-ignore
        <button className={`button-contained ${props.className || ""}`} onClick={props.onClick ? () => props.onClick() : undefined}>
            {props.text}
            {props.arrow ? <ArrowRight /> : null}
        </button>
    )
}