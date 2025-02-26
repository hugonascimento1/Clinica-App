import Button from "@/components/Button";
import LogoClinic from "@/components/LogoClinic";
import Link from "next/link";

export default function Home() {

  return (
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
            />
          </div>

          <div className="flex flex-col mt-4">
            <label htmlFor="password" className="text-2xl font-semibold mb-2">Senha</label>
            <input
              type="password"
              placeholder="Insira sua senha"
              className="min-w-80 h-11 border-3 ring-2 ring-gray-600 rounded-lg border-gray-300 px-3"
            />
            <a href="/forgotPassword" className="underline mt-2 text-center p-0 w-40">Esqueceu a senha?</a>
          </div>

          <div className="mt-8 flex flex-col items-center">
            <Button textButton="Entrar" action="entrar" />
            <Link href="/createAccount" className="underline mt-4">Cadastre-se</Link>
          </div>
        </div>
      </div>

    </div>
  );
}
