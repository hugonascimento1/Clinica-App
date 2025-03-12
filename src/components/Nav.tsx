'use client'

import { BotIcon, FilePenLineIcon, HomeIcon, LogOutIcon, MenuIcon, StethoscopeIcon, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            alert('Erro ao sair: ' + error.message);
        } else {
            router.push('/');
        }
    }

    return (
        <div className="w-100 h-32 text-white py-5 d-flex align-items-center px-3"  style={{ backgroundColor: '#4844B6', height: '128px' }}>
            <div className="d-flex w-100 align-items-center justify-content-between">
                <button onClick={() => setIsOpen(true)} className="btn btn-link text-white p-0">
                    <MenuIcon />
                </button>

                <div className="flex-grow-1 text-center fs-2 fw-bold">
                    <div className="fw-semibold fs-3 d-flex flex-column justify-content-center align-items-center">
                        <h3>Logo</h3>
                        <h3>Clinica</h3>
                    </div>
                </div>

                <div></div>
            </div>

            {isOpen && (
                <>
                    <div className="position-fixed top-0 bottom-0 start-0 end-0 bg-black bg-opacity-50 z-40" onClick={() => setIsOpen(false)}></div>

                    <div className=" position-fixed top-0 start-0 h-100 w-25 bg-foreground shadow-lg z-50 p-4 d-flex flex-column"  style={{ backgroundColor: '#4844B6' }}>
                        <button onClick={() => setIsOpen(false)} className=" align-self-end mb-4 btn btn-link p-0 text-white">
                            <X className="w-6 h-6" />
                        </button>

                        <nav className=" d-flex flex-column gap-4 fs-5 fw-medium">
                            <Link href="/home" className="text-whit d-flex flex-row gap-2 text-decoration-none text-white"><HomeIcon/> Home</Link>
                            <Link href="/conteudo1" className="text-whit d-flex flex-row gap-2 text-decoration-none text-white"><FilePenLineIcon /> Conteúdo 1</Link>
                            <Link href="/acompanhamento" className="text-whit d-flex flex-row gap-2 text-decoration-none text-white"><BotIcon /> Acompanhamento</Link>
                            <Link href="/cirurgias" className="text-whit d-flex flex-row gap-2 text-decoration-none text-white"><StethoscopeIcon /> Cirurgias</Link>
                            <button onClick={handleLogout} className="text-whit d-flex flex-row gap-2 text-decoration-none text-white btn btn-link"><LogOutIcon /> Sair</button>
                        </nav>
                    </div>

                </>
            )}
        </div>
    );
}
