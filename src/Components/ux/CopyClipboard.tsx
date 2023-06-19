"use client";
import { FC, useRef, useState } from "react";

interface IcopyClipboardProps {
    text: string;
}

const CopyClipboard: FC<IcopyClipboardProps> = ({ text }) => {
    const [isMouseEnterEnabled, setMouseEnterEnabled] = useState(true);
    const childrenRef = useRef<HTMLSpanElement>(null);

    function tipHandler() {
        const onMouseEnter = () => {
            if (isMouseEnterEnabled) {
                childrenRef.current?.classList.add("hover");
            }
        };

        const onMouseLeave = () => {
            childrenRef.current?.classList.remove("hover");
        };

        const onCLick = () => {
            navigator.clipboard.writeText(text);
            disableMouseEnter();
            childrenRef.current?.classList.add("active");
            setTimeout(() => {
                childrenRef.current?.classList.remove("active");
            }, 1400);
        };

        return { onMouseEnter, onMouseLeave, onCLick };
    }

    function disableMouseEnter() {
        setMouseEnterEnabled(false);
        childrenRef.current?.classList.remove("hover");
        setTimeout(() => {
            setMouseEnterEnabled(true);
        }, 2000);
    }

    return (
        <span
            ref={childrenRef}
            onClick={tipHandler().onCLick}
            onMouseEnter={tipHandler().onMouseEnter}
            onMouseLeave={tipHandler().onMouseLeave}
        >
            {text}
        </span>
    );
};

export default CopyClipboard;

/* scss classes for this {
    .npm {
        position: relative;
        color: cadetblue;
        font-weight: bold;
        cursor: pointer;
        @mixin tooltip {
            position: absolute;
            top: -32px;
            left: 102%;
            text-align: center;
            font-size: 16px;
            font-weight: bold;
            width: 105px;
            padding: 10px;
            background-color: #f4f4f4;
            border: 2px solid cadetblue;
            border-radius: 4px;
        }
        .hover::before {
            content: "Click to copy";
            @include tooltip;
        }
        .active {
            &::before {
                content: "Copied";
                @include tooltip;
                text-align: left;
                padding-left: 18px;
            }
            &::after {
                content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='none' stroke='green' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-check-circle-2'%3E%3Cpath d='M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
                position: absolute;
                top: -28px;
                left: calc(102% + 85px);
                z-index: 2;
            }
        }
    }
} */
