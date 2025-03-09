'use client'

import LogoClinic from "@/components/LogoClinic"
import Link from "next/link";
import { ChevronLeft } from 'lucide-react';

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function CreateAccount() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleSignup = async () => {
        const { error } = await supabase.auth.signUp({ 
            email, 
            password,
            options: {
                data: {
                    name
                }
            } 
        });
        if (error) {
            alert('Erro ao cadastrar: '+ error. message);
        } else {
            router.push("/")
        }
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="scale-75">
                <LogoClinic />
            </div>

            <div className="flex flex-row min-w-96 gap-10 items-center relative mb-8">
                <Link href="/" className="absolute left-0">
                    <ChevronLeft width={50} height={50}  />
                </Link>
                <h1 className="flex-grow text-center text-4xl font-bold">Criar Conta</h1>
            </div>


            <div className="flex flex-col items-center justify-center">
                <div className=" py-4 flex flex-col w-full mx-6 items-center justify-center">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-2xl font-semibold mb-2">Nome</label>
                        <input
                            type="text"
                            placeholder="Insira seu nome"
                            className="min-w-80 h-11 ring-2 ring-gray-600 border-3 rounded-lg border-gray-300 px-3"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col mt-4">
                        <label htmlFor="email" className="text-2xl font-semibold mb-2">Email</label>
                        <input
                            type="text"
                            placeholder="Insira seu email"
                            className="min-w-80 h-11 border-3 ring-2 ring-gray-600 rounded-lg border-gray-300 px-3"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col mt-4">
                        <label htmlFor="password" className="text-2xl font-semibold mb-2">Senha</label>
                        <input
                            type="password"
                            placeholder="Insira sua senha"
                            className="min-w-80 h-11 border-3 ring-2 ring-gray-600 rounded-lg border-gray-300 px-3"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="mt-8 flex flex-col items-center">
                        <button
                            onClick={handleSignup}
                            className="bg-foreground h-11 min-w-80 border rounded-lg text-white text-xl"
                        >
                            Cadastrar
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
}