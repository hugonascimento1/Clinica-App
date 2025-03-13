'use client'

import Nav from "@/components/Nav";
import withAuth from "@/components/withAuth"
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

function Conteudo1() {
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const fetchUser = async () => {
            const { data: { user }, error } = await supabase.auth.getUser();
            if (user) {
                setUserName(user.user_metadata.name);
            } else if (error) {
                console.error('Erro ao buscar usuário: ', error.message);
            }
        };
        fetchUser();
    }, []);

    return(
        <div>
            <Nav />
            <p>conteudo 1</p>
            <p>Bem vindo, {userName}!</p>
        </div>
    )
}

export default withAuth(Conteudo1);