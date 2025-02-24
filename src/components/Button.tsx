import React from "react";

interface ButtonProps {
    textButton: string;
}

export default function Button({ textButton }: ButtonProps) {
    return (
        <div className="w-full">
            <button className="bg-foreground h-11 min-w-80 border rounded-lg text-white text-xl">
                {textButton}
            </button>
        </div>
    )
}