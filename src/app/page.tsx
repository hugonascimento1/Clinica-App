'use client'

import LogoClinic from "@/components/LogoClinic";
import Link from "next/link";
import Logo from "../../public/Logo Clinica.svg"

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import Loading from "@/components/Loading";
import Image from "next/image";

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
    <div className=" container d-flex justify-content-center align-align-items-center vh-100">

      {loading ? (
        <Loading />
      ) : (
        <div className="w-100" style={{ maxWidth: '400px' }}>
          <LogoClinic />

          <div className=" d-flex flex-column align-items-center mt-5">
            <div className=" form-group w-100 mb-3 mt-5">
              <label htmlFor="email" className=" h5 fw-semibold">Email</label>
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
              <label htmlFor="password" className=" h5 fw-semibold">Senha</label>
              <input
                type="password"
                placeholder="Insira sua senha"
                className="form-control border-3 border-secondary rounded-3"
                style={{ height: '50px' }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* <a href="/forgotPassword" className=" text-decoration-underline mt-2 text-center">Esqueceu a senha?</a> */}
            </div>

            {errorMessage && (
              <div className=" text-danger mb-3">
                {errorMessage}
              </div>
            )}

            
              <button
                className="btn btn-primary w-100 mb-3 mt-3 rounded-3"
                style={{ backgroundColor: '#4844B6', height: '50px' }}
                onClick={handleLogin}
              >
                Entrar
              </button>
              <Link href="/createAccount" className=" text-decoration-underline">Cadastre-se</Link>
          </div>

        </div>
      )}

    </div>
  );
}
