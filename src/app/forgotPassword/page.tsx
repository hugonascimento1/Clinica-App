import Link from "next/link"
import Button from "@/components/Button"
import { ChevronLeft } from "lucide-react"

export default function ForgotPassword() {
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
                            placeholder="Insira seu email"
                            className="min-w-80 h-11 border-3 rounded-lg border-gray-300 px-3"
                        />
                    </div>

                    <div className="mt-8 flex flex-col items-center">
                        <Button textButton="Enviar" />
                    </div>
                </div>
            </div>
        </div>
    )
}