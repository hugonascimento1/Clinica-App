'use client'

import Nav from "@/components/Nav";
import { BotIcon, FilePenLineIcon, StethoscopeIcon } from "lucide-react";
import Link from "next/link";
import withAuth from "@/components/withAuth";
import { useRouter } from "next/navigation";

function HomePage() {
  const router = useRouter();

  const handleBotButton = () => {
    router.push('home/chatbot')
  }

  const handleCirurgias = () => {
    router.push('home/cirurgias')
  }

  const handleMeusDados = () => {
    router.push('home/meusdados')
  }

  return (
    <div>
      <Nav />

      <div className="flex flex-col justify-center items-center gap-4 mt-16 mb-10 sm:w-full p-4">


        <button
          onClick={handleBotButton}
          className="flex flex-row w-full sm:w-3/4 h-40 md:w-1/2 sm:h-24 md:h-28 bg-[#9F3EB8] justify-center items-center gap-3 sm:gap-5 text-white text-xl sm:text-xl md:text-2xl font-medium rounded-lg shadow-xl/30"
        >
          <BotIcon className="w-10 h-10 sm:w-7 sm:h-7 md:w-8 md:h-8" />
          <h1>Acompanhamento</h1>
        </button>

        <div className="flex flex-row border-2 sm:w-3/4 sm:flex-col w-full md:w-1/2 gap-4">
          <button
            className="flex flex-row w-full h-32 bg-[#9F3EB8] justify-center items-center gap-3 sm:gap-5 text-white text-lg sm:text-xl md:text-2xl font-medium rounded-lg shadow-md"
          >
            <StethoscopeIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            <h1>Cirurgias</h1>
          </button>

          <button
            className="flex flex-row w-full h-32 bg-[#9F3EB8] justify-center items-center gap-3 sm:gap-5 text-white text-lg sm:text-xl md:text-2xl font-medium rounded-lg shadow-md"
          >
            <FilePenLineIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            <h1>Meus dados</h1>
          </button>
        </div>

      </div>
    </div>
  );
}

export default withAuth(HomePage);