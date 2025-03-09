'use client'

import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { useState } from "react"
import { supabase } from "@/lib/supabaseClient"

export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState<'success' | 'error'>('success');

    const handleResetPassword = async () => {
        const { error } = await supabase.auth.resetPasswordForEmail(email);
        if (error) {
            setMessageType('error');
            setMessage('Erro ao enviar email de redefinição: '+ error.message);
        } else {
            setMessageType('success');
            setMessage('Email de redefinição de senha enviado com sucesso. Verifique seu email.')
        }
    }

    return (
        <div className="flex flex-col justify-center items-center">

            <div className="">
                <Link href="/" className="absolute left-5 top-5">
                    <ChevronLeft width={50} height={50} />
                </Link>
            </div>

            <div className="flex flex-col items-center justify-center mt-52 mb-4">
                <h1 className="text-3xl min-w-80">Esqueceu sua senha?</h1>
                <p className="text-gray-600 w-80">Enviaremos um e-mail com instruções de como redefinir sua senha</p>
            </div>



            <div className="flex items-center justify-center">
                <div className=" py-4 flex flex-col w-full mx-6 items-center justify-center">
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-2xl font-semibold mb-2">Email</label>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Insira seu email"
                            className="min-w-80 h-11 ring-2 ring-gray-600 border-3 rounded-lg border-gray-300 px-3"
                        />
                    </div>

                    <div className="mt-8 flex flex-col items-center">
                        <button 
                            onClick={handleResetPassword}
                            className="bg-foreground h-11 min-w-80 border rounded-lg text-white text-xl"
                        >
                            Enviar 
                        </button>
                    </div>
                </div>
            </div>

            {message && (
                <div className={`mt-4 text-center ${messageType === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                    {message}
                </div>
            )}

        </div>
    )
}