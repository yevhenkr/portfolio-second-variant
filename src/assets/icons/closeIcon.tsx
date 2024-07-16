import * as React from "react"
import { SVGProps, memo } from "react"
import {myTheme} from "../../styles/Theme.styled";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
        <path
            d="m7 7 18 18M7 25 25 7"
            style={{
                fill: "none",
                stroke: `${myTheme.color.white}`,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
            }}
        />
    </svg>
)
export const CloseIcon = memo(SvgComponent)
