'use client'

import LogoClinic from "@/components/LogoClinic";
import Link from "next/link";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import Loading from "@/components/Loading";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    setErrorMessage("");
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      // setErrorMessage('Erro ao fazer login: '+ error.message);
      setErrorMessage('Erro ao fazer login: Verifique se o email e senha estão corretos');
    } else {
      setLoading(true);
      router.push("/home");
    }
  };

  return (
    <div>

      {loading ? (
        <Loading />
      ) : (
        <div>
          <LogoClinic />

          <div className="flex items-center justify-center">
            <div className=" py-4 flex flex-col w-full mx-6 items-center justify-center">
              <div className="flex flex-col">
                <label htmlFor="email" className="text-2xl font-semibold mb-2">Email</label>
                <input
                  type="text"
                  placeholder="Insira seu email"
                  className="min-w-80 h-11 border-3 rounded-lg ring-2 ring-gray-600 border-gray-300 px-3"
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
                {/* <a href="/forgotPassword" className="underline mt-2 text-center p-0 w-40">Esqueceu a senha?</a> */}
              </div>

              {errorMessage && (
                <div className="text-red-500 mt-4">
                  {errorMessage}
                </div>
              )}

              <div className="mt-8 flex flex-col items-center">
                <button
                  className="bg-foreground h-11 min-w-80 border rounded-lg text-white text-xl"
                  onClick={handleLogin}
                >
                  Entrar
                </button>
                <Link href="/createAccount" className="underline mt-4">Cadastre-se</Link>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
