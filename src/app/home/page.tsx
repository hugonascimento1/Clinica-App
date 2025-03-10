'use client'

import Nav from "@/components/Nav";
import { BotIcon, FilePenLineIcon, StethoscopeIcon } from "lucide-react";
import Link from "next/link";
import withAuth from "@/components/withAuth";

function HomePage() {
  return (
    <div>
      <Nav />

      <div className="d-flex flex-column align-items-center gap-3 my-4 w-100 p-3">
        <Link
          href="/conteudo1"
          className=" d-flex flex-row w-100 justify-content-center align-items-center gap-2 bg-[#9F3EB8] text-white fs-4 fw-medium rounded shadow p-3"
          style={{ maxWidth: '50%', backgroundColor: '#9F3EB8' }}
        >
          <FilePenLineIcon className="me-2" style={{ width: '1.5rem', height: '1.5rem' }} />
          <h3>Conteúdo 1</h3>
        </Link>

        <Link
          href="#"
          className="d-flex flex-row w-100 justify-content-center align-items-center gap-2 bg-[#9F3EB8] text-white fs-4 fw-medium rounded shadow p-3"
          style={{ maxWidth: '50%', backgroundColor: '#9F3EB8' }}
        >
          <BotIcon className="me-2" style={{ width: '1.5rem', height: '1.5rem' }} />
          <h3>Acompanhamento</h3>
        </Link>

        <Link
          href="#"
          className="d-flex flex-row w-100 justify-content-center align-items-center gap-2 bg-[#9F3EB8] text-white fs-4 fw-medium rounded shadow p-3"
          style={{ maxWidth: '50%', backgroundColor: '#9F3EB8' }}
        >
          <StethoscopeIcon className="me-2" style={{ width: '1.5rem', height: '1.5rem' }} />
          <h3>Cirurgias</h3>
        </Link>
      </div>
    </div>
  );
}

export default withAuth(HomePage);