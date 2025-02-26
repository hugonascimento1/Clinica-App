'use client'

import { useRouter } from "next/navigation"; 
import React from "react";

interface ButtonProps {
    textButton: string;
    action: "entrar" | "cadastrar";
}

export default function Button({ textButton, action }: ButtonProps) {
    const router = useRouter();

    const handleClick = () => {
        if (action === 'entrar') {
            router.push('/home')
        } else if (action === 'cadastrar') {
            router.push('/cadastro');
        }
    }

    return (
        <div className="w-full">
            <button
                className="bg-foreground h-11 min-w-80 border rounded-lg text-white text-xl"
                onClick={handleClick}
            >
                {textButton}
            </button>
        </div>
    )
}