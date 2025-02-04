import * as React from "react"
import { SVGProps, memo } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={166}
        height={160}
        fill="none"
        {...props}
    >
        <path
            fill="#608AF5"
            fillRule="evenodd"
            d="M85.785.036c15.711-.719 29.486 9.458 42.753 18.757 14.154 9.922 31.343 18.871 36.176 36.57 4.813 17.622-4.937 35.514-11.923 52.232-6.197 14.831-13.802 28.908-25.915 38.317-11.991 9.313-26.528 15.703-41.09 13.729-13.787-1.868-22.042-16.857-34.349-23.952-15.57-8.976-38.166-6.232-47.019-22.954-8.864-16.745-2.924-39.144 4.977-56.464 7.263-15.922 22.694-23.779 36.143-33.68C58.367 13.148 70.368.741 85.785.036Z"
            clipRule="evenodd"
        />
        <path
            fill="#fff"
            transform="translate(35, 30)"
            d="M19.958 43.75h-8.333a4.167 4.167 0 1 0 0 8.333h8.333a4.167 4.167 0 1 0 0-8.333Zm69.917-11.833v-.25A12.5 12.5 0 0 0 80 27.083H46.958a12.5 12.5 0 0 0-8.333 3.084 12.208 12.208 0 0 0-4 7.333l-3.667 20.833a12.499 12.499 0 0 0 2.75 10.209A12.502 12.502 0 0 0 43.25 73h33.083a12.5 12.5 0 0 0 12.5-10.333L92.5 41.833a12.5 12.5 0 0 0-2.625-9.916Zm-11.417 3.5-14.166 11.5a4.167 4.167 0 0 1-5.75-.5l-9.709-11h29.625Zm2 25.708a4.167 4.167 0 0 1-4.166 3.458H43.25a4.168 4.168 0 0 1-3.167-1.5 4.166 4.166 0 0 1-.916-3.375L42.5 40.833l9.792 11.084a12.5 12.5 0 0 0 17.25 1.458l14.333-11.708-3.417 19.458ZM24.125 27.083h-12.5a4.167 4.167 0 1 0 0 8.334h12.5a4.167 4.167 0 1 0 0-8.334Z"
        />
    </svg>
)
export const EmailIcon = memo(SvgComponent)
