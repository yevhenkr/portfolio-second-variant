import * as React from "react"
import { SVGProps, memo } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 330"
        width="100%" // Устанавливаем ширину в процентах
        height="100%" // Устанавливаем высоту в процентах
        fill="none"
        preserveAspectRatio="none"

        {...props}
    >
        <path
            fill="#4581F6"
            width="100%" // Устанавливаем ширину в процентах
            height="100%"
            d="m-201 330 57.3-41.2c57.3-41.2 171.9-123.6 286.5-123.6s229.2 82.4 343.8 82.4c114.6 0 229.2-82.4 343.8-96.048 114.6-14.677 229.2 41.973 343.8 27.295C1288.8 165.2 1403.4 82.8 1460.7 41.6L1518 .4V330H-201Z"
        />
    </svg>
)
export const WaveIcon = memo(SvgComponent)
