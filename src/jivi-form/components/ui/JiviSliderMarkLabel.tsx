import React from "react";

type MarkLabelProps = {
    text: string;
    left: boolean;
}

const MarkLabel: React.FC<MarkLabelProps> = ({ text, left }) => {
    return (
        left ?
            <p>{text}</p> :
            <p className="-translate-x-full">{text}</p>
    )
}

export default MarkLabel;