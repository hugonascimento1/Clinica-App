'use client'

import Nav from "@/components/Nav";
import { BotIcon, FilePenLineIcon, StethoscopeIcon } from "lucide-react";
import Link from "next/link";
import withAuth from "@/components/withAuth";

function HomePage() {
  return (
    <div>
      <Nav />

      <div className="flex flex-col justify-center items-center gap-6 my-10 sm:w-full p-4">
        <Link
          href="/conteudo1"
          className="flex flex-row w-full sm:w-3/4 md:w-1/2 h-20 sm:h-24 md:h-28 bg-[#9F3EB8] justify-center items-center gap-3 sm:gap-5 text-white text-lg sm:text-xl md:text-2xl font-medium rounded-lg shadow-md"
        >
          <FilePenLineIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
          <h1>Conteúdo 1</h1>
        </Link>

        <Link
          href=""
          className="flex flex-row w-full sm:w-3/4 md:w-1/2 h-20 sm:h-24 md:h-28 bg-[#9F3EB8] justify-center items-center gap-3 sm:gap-5 text-white text-lg sm:text-xl md:text-2xl font-medium rounded-lg shadow-md"
        >
          <BotIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
          <h1>Acompanhamento</h1>
        </Link>

        <Link
          href=""
          className="flex flex-row w-full sm:w-3/4 md:w-1/2 h-20 sm:h-24 md:h-28 bg-[#9F3EB8] justify-center items-center gap-3 sm:gap-5 text-white text-lg sm:text-xl md:text-2xl font-medium rounded-lg shadow-md"
        >
          <StethoscopeIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
          <h1>Cirurgias</h1>
        </Link>
      </div>
    </div>
  );
}

export default withAuth(HomePage);