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
        <div className="d-flex flex-column align-items-center justify-content-center">
            <div style={{ transform: 'scale(0.75)' }}>
                <LogoClinic />
            </div>

            <div className="d-flex flex-row w-100 gap-3 align-items-center position-relative mb-4">
                <Link href="/" className="position-absolute start-0">
                    <ChevronLeft width={50} height={50}  />
                </Link>
                <h1 className=" flex-grow-1 text-center display-5 fw-bold">Criar Conta</h1>
            </div>


            <div className=" d-flex flex-column align-items-center justify-content-center">
                <div className="py-4 d-flex flex-column w-100 px-3 align-items-center justify-content-center">
                    <div className="form-group w-100 mb-3">
                        <label htmlFor="name" className=" h5">Nome</label>
                        <input
                            type="text"
                            placeholder="Insira seu nome"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="form-group w-100 mb-3">
                        <label htmlFor="email" className=" h5">Email</label>
                        <input
                            type="text"
                            placeholder="Insira seu email"
                            className=" form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className=" form-group w-100 mb-3">
                        <label htmlFor="password" className=" h5">Senha</label>
                        <input
                            type="password"
                            placeholder="Insira sua senha"
                            className=" form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className=" mt-4 d-flex flex-column align-items-center">
                        <button
                            onClick={handleSignup}
                            className=" btn btn-primary w-100"
                        >
                            Cadastrar
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
}