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
        <div className="w-screen h-52 md:h-24 bg-foreground text-white py-5 flex items-center px-6 shadow-xl">
            <div className="flex w-full flex-row  justify-between">
                    <div className="flex flex-col justify-center items-start ml-5" >
                        <h1 className="font-semibold text-3xl sm:text-2xl  flex flex-col justify-center items-center">App Clínica</h1>
                        <h2 className="text-xl">Bem vindo!</h2>
                    </div>


                    <button onClick={() => setIsOpen(true)}>
                        <MenuIcon width={35} height={35} />
                    </button>

            </div>

            {isOpen && (
                <>
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsOpen(false)}></div>

                    <div className="fixed top-0 right-0 h-full w-64 bg-foreground shadow-lg z-50 p-6 flex flex-col">
                        <button onClick={() => setIsOpen(false)} className="self-end mb-4">
                            <X className="w-6 h-6 text-white" />
                        </button>

                        <nav className="flex flex-col gap-4 text-lg font-medium">
                            <Link href="/home" className="hover:text-blue-500 flex flex-row gap-2"><HomeIcon /> Home</Link>
                            <Link href="/conteudo1" className="hover:text-blue-500 flex flex-row gap-2"><FilePenLineIcon /> Conteúdo 1</Link>
                            <Link href="/acompanhamento" className="hover:text-blue-500 flex flex-row gap-2"><BotIcon /> Acompanhamento</Link>
                            <Link href="/cirurgias" className="hover:text-blue-500 flex flex-row gap-2"><StethoscopeIcon /> Cirurgias</Link>
                            <button onClick={handleLogout} className="text-gray-300 hover:text-white flex flex-row gap-2 fixed bottom-10"><LogOutIcon /> Sair</button>
                        </nav>
                    </div>

                </>
            )}
        </div>
    );
}
