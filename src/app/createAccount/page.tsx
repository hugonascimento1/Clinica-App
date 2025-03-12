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
            alert('Erro ao cadastrar: ' + error.message);
        } else {
            router.push("/")
        }
    };

    return (
        <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
            <div style={{ transform: 'scale(0.75)' }}>
                <LogoClinic />
            </div>

            <div className="d-flex flex-row w-100 gap-3 align-items-center position-relative mb-1">
                {/* <Link href="/" className="position-absolute start-0">
                    <ChevronLeft width={50} height={50} />
                </Link> */}
                <h3 className="flex-grow-1 text-center display-5 fw-bold">Criar Conta</h3>
            </div>

            <div className="d-flex flex-column align-items-center justify-content-center w-100 mt-0" style={{ maxWidth: '400px' }}>
                <div className="py-4 d-flex flex-column w-100 px-3 align-items-center">
                    <div className="form-group w-100 mb-3">
                        <label htmlFor="name" className="h5 fw-semibold">Nome</label>
                        <input
                            type="text"
                            placeholder="Insira seu nome"
                            className="form-control border-3 border-secondary rounded-3"
                            style={{ height: '50px' }}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="form-group w-100 mb-3">
                        <label htmlFor="email" className="h5 fw-semibold">Email</label>
                        <input
                            type="text"
                            placeholder="Insira seu email"
                            className="form-control border-3 border-secondary rounded-3"
                            style={{ height: '50px' }}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="form-group w-100 mb-3">
                        <label htmlFor="password" className="h5 fw-semibold">Senha</label>
                        <input
                            type="password"
                            placeholder="Insira sua senha"
                            className="form-control border-3 border-secondary rounded-3"
                            style={{ height: '50px' }}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="mt-4 d-flex flex-column align-items-center w-100 gap-2">
                        <button
                            onClick={handleSignup}
                            className="btn btn-primary w-100 mb-3 rounded-3"
                            style={{ backgroundColor: '#4844B6', height: '50px' }}
                        >
                            Cadastrar
                        </button>
                        <Link href="/" className="text-decoration-underline">Já tem uma conta? Faça login</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}